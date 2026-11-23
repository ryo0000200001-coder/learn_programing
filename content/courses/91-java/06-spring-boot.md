---
title: Spring Boot のコードを読む ― アノテーションだらけの API
level: 3
minutes: 18
concepts: [backend, http_api, reading, ai_coding]
summary: Java の Web アプリで最もよく使われる Spring Boot。@RestController・@GetMapping・@PathVariable・@RequestBody・@Valid、サービスとリポジトリの層、依存性注入、JPA のエンティティ、例外を 404 にする仕組み。FastAPI と並べて読む。
---
## このレッスンのゴール

- `@RestController`・`@GetMapping` などのアノテーションが何をしているか説明できる
- コントローラー・サービス・リポジトリの役割の違いが分かる
- Spring Boot の API を、FastAPI のコードと対応させて読める

このレッスンのコードは、Spring Boot の書き方の説明のための抜粋です（Spring Boot のアプリをここでは動かしていません）。書き方は Spring Boot 3 の形です。

## アノテーション：@ で始まる印

Spring Boot のコードは、`@` で始まる **アノテーション** だらけです。

```java
@RestController
@RequestMapping("/tasks")
public class TaskController { ... }
```

アノテーションは、クラスやメソッドに付ける **「印」** です。それ自体は何もしませんが、Spring がアプリの起動時に印を探して、**「この印があるクラスは Web の窓口として登録しよう」** のように動きます。

Python のデコレーター（`@app.get("/tasks")`。Python コースのレッスン 13）と見た目も役割もよく似ています。

## 全体のつながり

```text
リクエスト → TaskController（窓口）→ TaskService（業務の処理）→ TaskRepository（データベース）
                    ↑ JSON にして返す        ↑ ルール・チェック         ↑ SQL は自動
```

バックエンドコースのレッスン 16 の「層に分ける」を、Spring は **決まった形** でやります。

## エンティティ：テーブルの形

```java
@Entity
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String title;

    private boolean done;

    @ManyToOne(fetch = FetchType.LAZY)
    private User owner;

    // getter・setter は省略
}
```

| アノテーション | 意味 | SQLAlchemy で言うと |
|---|---|---|
| `@Entity` / `@Table(name = "tasks")` | このクラスは tasks テーブル | `__tablename__ = "tasks"` |
| `@Id` ＋ `@GeneratedValue(...)` | 主キー・自動の連番 | `mapped_column(primary_key=True)` |
| `@Column(nullable = false, length = 200)` | NOT NULL・200 文字まで | `mapped_column(String(200), nullable=False)` |
| `@ManyToOne(fetch = FetchType.LAZY)` | 多対 1（タスクの持ち主）。LAZY は使うときに読み込む | `relationship()`（遅延読み込み） |

これは **JPA**（Java のデータベースの ORM の決まり。中身は Hibernate）です。データベース設計のコースのレッスン 6 の「ORM の関係」と「N+1」が、そのまま当てはまります。

## リポジトリ：SQL を書かない

```java
public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByOwnerIdOrderByIdDesc(Long ownerId);
    Optional<Task> findByIdAndOwnerId(Long id, Long ownerId);
}
```

**インターフェースを書くだけで、中身は Spring が自動で作ります**。

| メソッド | Spring が作る SQL（だいたい） |
|---|---|
| `findAll()`・`findById(id)`・`save(t)`・`deleteById(id)` | 最初から用意されている CRUD |
| `findByOwnerIdOrderByIdDesc(ownerId)` | `SELECT ... WHERE owner_id = ? ORDER BY id DESC` |
| `findByIdAndOwnerId(id, ownerId)` | `SELECT ... WHERE id = ? AND owner_id = ?` |

**メソッドの名前から SQL を組み立てる** という、Spring Data の仕組みです。名前を読めば、どんな SQL か分かります。値はプレースホルダで渡されるので、SQL インジェクションの心配はありません（`@Query` で自分で SQL を書く場合は、`:name` のパラメータを使っているか確認）。

## サービス：業務の処理

```java
@Service
public class TaskService {
    private final TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public Task get(Long id, Long userId) {
        return repository.findByIdAndOwnerId(id, userId)
            .orElseThrow(() -> new TaskNotFoundException(id));
    }

    @Transactional
    public Task create(String title, User owner) {
        Task t = new Task();
        t.setTitle(title);
        t.setOwner(owner);
        return repository.save(t);
    }
}
```

| 部分 | 意味 |
|---|---|
| `@Service` | 業務の処理をする部品として登録 |
| コンストラクタで `TaskRepository` を受け取る | **依存性注入**：必要な部品を Spring が自動で渡してくれる（FastAPI の `Depends`） |
| `findByIdAndOwnerId(...)` | ✅ **持ち主の確認**（IDOR を防ぐ。バックエンドコースのレッスン 9） |
| `.orElseThrow(() -> new TaskNotFoundException(id))` | 無ければ例外（レッスン 4 の Optional） |
| `@Transactional` | このメソッドの中の処理を **トランザクション** にする（データベース設計のコースのレッスン 5） |

## コントローラー：Web の窓口

```java
@RestController
@RequestMapping("/tasks")
public class TaskController {
    private final TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    public record CreateTaskRequest(@NotBlank @Size(max = 200) String title) {}

    @GetMapping("/{id}")
    public Task get(@PathVariable Long id, @AuthenticationPrincipal User user) {
        return service.get(id, user.getId());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Task create(@Valid @RequestBody CreateTaskRequest req, @AuthenticationPrincipal User user) {
        return service.create(req.title(), user);
    }
}
```

FastAPI で書くと、こうなります。

```python
class CreateTaskRequest(BaseModel):
    title: str = Field(min_length=1, max_length=200)

@app.get("/tasks/{id}")
def get(id: int, user: User = Depends(current_user)):
    return service.get(id, user.id)

@app.post("/tasks", status_code=201)
def create(req: CreateTaskRequest, user: User = Depends(current_user)):
    return service.create(req.title, user)
```

| Spring | FastAPI | 意味 |
|---|---|---|
| `@RestController` | （`app = FastAPI()`） | 返した値を JSON にする窓口 |
| `@RequestMapping("/tasks")` ＋ `@GetMapping("/{id}")` | `@app.get("/tasks/{id}")` | ルーティング |
| `@PathVariable Long id` | `id: int` | パスの値 |
| `@RequestBody CreateTaskRequest req` | `req: CreateTaskRequest` | 本文の JSON |
| `@Valid` ＋ `@NotBlank @Size(max = 200)` | Pydantic の `Field(...)` | **バリデーション**。失敗したら自動で 400 |
| `@AuthenticationPrincipal User user` | `Depends(current_user)` | ログイン中のユーザー |
| `@ResponseStatus(HttpStatus.CREATED)` | `status_code=201` | 成功したときのステータス |

**入力用の record（`CreateTaskRequest`）を、エンティティ（`Task`）とは別に作っている** のがポイントです。`@RequestBody Task task` とエンティティで直接受け取ると、`owner` や `id` まで外から書き込める **マスアサインメント** になります（セキュリティのコースのレッスン 5）。

## 例外を 404 にする

```java
@ResponseStatus(HttpStatus.NOT_FOUND)
public class TaskNotFoundException extends RuntimeException {
    public TaskNotFoundException(Long id) { super("タスクが見つかりません: " + id); }
}
```

例外のクラスに `@ResponseStatus(HttpStatus.NOT_FOUND)` を付けておくと、それが投げられたときに **Spring が 404 の返事にしてくれます**。まとめて変換したいときは `@RestControllerAdvice` ＋ `@ExceptionHandler` を使います。FastAPI の `raise HTTPException(404)` や `@app.exception_handler(...)` に当たります。

## AI のコードではこう出てくる

| 見かけたら | チェック |
|---|---|
| `@RequestBody Task task`（エンティティで直接受け取る） | ⚠️ マスアサインメント。入力用の DTO・record に |
| `repository.findById(id)` だけで、持ち主を確かめていない | ⚠️ IDOR |
| `@Query("SELECT ... WHERE name = '" + name + "'")` / `createNativeQuery("..." + x)` | ⚠️ SQL インジェクション。`:name` のパラメータに |
| エンティティをそのまま JSON で返している（`password` 列がある） | ⚠️ パスワードのハッシュまで返る。返す用の DTO を作るか `@JsonIgnore` |
| ループの中で `task.getOwner().getName()`（LAZY） | ⚠️ N+1（データベース設計のコースのレッスン 6）。`JOIN FETCH` や `@EntityGraph` |
| `application.properties` / `application.yml` に `spring.datasource.password=...` | ⚠️ 秘密は環境変数から（`${DB_PASSWORD}`） |
| `@Autowired` をフィールドに付けている | 古い書き方。コンストラクタで受け取る形が今の推奨 |

```quiz
? `@GetMapping("/{id}") public Task get(@PathVariable Long id)` を FastAPI で書くと？
+ `@app.get("/{id}")` の関数の引数 `id: int`
- `@app.post("/{id}")`
- `request.json()["id"]`
> `@GetMapping` は GET のルーティング、`@PathVariable` は URL のパスの値です。

? `interface TaskRepository extends JpaRepository<Task, Long> { Optional<Task> findByIdAndOwnerId(Long id, Long ownerId); }` の中身の SQL は？
- 自分で書く必要がある
+ メソッド名から Spring が `WHERE id = ? AND owner_id = ?` のような SQL を自動で作る
- 全件を読んでから Java で絞り込む
> Spring Data は、メソッド名を読んで SQL を組み立てます。値はプレースホルダで渡されます。

? コントローラーで `@RequestBody Task task`（エンティティ）を直接受け取るのが危ない理由は？
- 処理が遅くなるから
+ id や owner など、利用者に変えさせたくない項目まで外から書き込めてしまうから
- JSON を受け取れないから
> 入力用の record や DTO を作り、受け取る項目を決めておくのが、マスアサインメントの対策です。
```
