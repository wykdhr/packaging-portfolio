@echo off
chcp 65001 >nul
title 包装设计网站 - 内容管理

cd /d "%~dp0"

if not exist "package.json" (
    echo [错误] 找不到 package.json，请将此文件放在项目根目录下
    pause
    exit /b 1
)

echo ==========================================
echo   包装设计网站 - 内容管理系统
echo ==========================================
echo.
echo 正在启动服务...
echo.

REM Kill any existing processes on these ports
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":8081" ^| findstr "LISTENING"') do (
    taskkill /f /pid %%a 2>nul
)
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":5173" ^| findstr "LISTENING"') do (
    taskkill /f /pid %%a 2>nul
)

REM Start decap-server in background (handles file read/write)
start /min "decap-server" cmd /c "npx decap-server"

REM Wait a moment for the proxy to start
timeout /t 3 /nobreak >nul

REM Start vite dev server
start /min "vite" cmd /c "npx vite --host"

REM Wait for vite to be ready
timeout /t 3 /nobreak >nul

REM Open the CMS admin page
start "" http://localhost:5173/admin/index.html

echo.
echo ==========================================
echo   管理后台已在浏览器中打开
echo ==========================================
echo.
echo 编辑完成后：
echo   1. 关闭浏览器页面
echo   2. 关闭本窗口和后台服务窗口
echo   3. 双击 "构建发布.bat" 发布网站
echo.
echo 修改的内容会自动保存到本地文件
echo.
pause
