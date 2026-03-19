@echo off
setlocal

cd /d "%~dp0"

echo Starting project...
docker compose up -d

if errorlevel 1 (
  echo Failed to start Docker containers.
  echo Please make sure Docker Desktop is running, then try again.
  pause
  exit /b 1
)

echo Opening website...
start "" "http://localhost:3000"
start "" "http://localhost:3000/admin"

echo Project is running.
echo Public site: http://localhost:3000
echo Admin CMS:   http://localhost:3000/admin
pause
