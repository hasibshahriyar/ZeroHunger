@echo off
echo ================================
echo ZeroHunger Project Startup
echo ================================

echo.
echo Starting Backend Server...
start cmd /k "cd /d "%~dp0zero-hunger-server-main\zero-hunger-server-main" && npm start"

timeout /t 3 /nobreak >nul

echo.
echo Starting Frontend Server...
start cmd /k "cd /d "%~dp0Uni-Project-main\Uni-Project-main" && npm run dev"

echo.
echo ================================
echo Both servers are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo ================================
echo.
echo Press any key to close this window...
pause >nul
