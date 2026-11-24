' Readable: update from GitHub without a console window, then open the site.
Option Explicit
Dim sh, fso, dir
Set sh = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
dir = fso.GetParentFolderName(WScript.ScriptFullName)
sh.CurrentDirectory = dir

' Run "git pull" in a hidden window (0) and wait until it finishes (True).
' If Git is missing or the update fails, just open the current version.
On Error Resume Next
sh.Run "cmd /c git pull --ff-only", 0, True
On Error GoTo 0

sh.Run """" & dir & "\site\index.html""", 1, False
