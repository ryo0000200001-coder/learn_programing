@echo off
rem Code Reading Dojo: get the latest version from GitHub, then open the site.
cd /d "%~dp0"

where git >nul 2>nul
if errorlevel 1 (
  echo Git is not installed. Opening the site without updating.
  timeout /t 3 >nul
  goto open
)

echo Updating from GitHub...
git pull --ff-only
if errorlevel 1 (
  echo.
  echo Update failed. Opening the current version instead.
  timeout /t 5 >nul
)

:open
start "" "%~dp0site\index.html"
