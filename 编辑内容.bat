@echo off
chcp 65001 >nul
echo ==========================================
echo   包装设计网站 - 内容管理系统
echo ==========================================
echo.
echo 正在启动编辑器，请稍候...
echo.

start "" http://localhost:5173/admin/index.html

cd /d "%~dp0"
npx decap-server & npx vite --host

pause
