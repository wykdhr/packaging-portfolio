@echo off
chcp 65001 >nul
echo ==========================================
echo   包装设计网站 - 构建发布
echo ==========================================
echo.
echo 正在构建网站...

cd /d "%~dp0"
call npm run build

if %errorlevel% neq 0 (
    echo.
    echo ❌ 构建失败，请检查错误信息
    pause
    exit /b 1
)

echo.
echo ==========================================
echo   ✅ 构建成功！
echo ==========================================
echo.
echo 发布方法：将 dist 文件夹拖入以下网址
echo.
echo   https://app.netlify.com/drop
echo.
echo dist 文件夹路径：
echo %~dp0dist
echo.
explorer "%~dp0dist"

pause
