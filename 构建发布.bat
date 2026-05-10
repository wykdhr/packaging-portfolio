@echo off
chcp 65001 >nul
title 包装设计网站 - 构建发布

cd /d "%~dp0"

REM Verify we're in the right directory
if not exist "package.json" (
    echo [错误] 找不到 package.json，请将此文件放在项目根目录下
    echo 当前目录: %cd%
    pause
    exit /b 1
)

echo ==========================================
echo   包装设计网站 - 构建发布
echo ==========================================
echo.
echo 正在构建网站，请稍候...
echo.

call npm run build

if errorlevel 1 (
    echo.
    echo ==========================================
    echo   构建失败！请检查上方错误信息
    echo ==========================================
    echo.
    echo 常见问题：
    echo   1. Node.js 未安装或版本过低
    echo   2. 依赖包不完整，请尝试运行 npm install
    echo.
    pause
    exit /b 1
)

if not exist "dist\index.html" (
    echo.
    echo ==========================================
    echo   构建异常！dist 文件夹未生成
    echo ==========================================
    pause
    exit /b 1
)

echo.
echo ==========================================
echo   构建成功！
echo ==========================================
echo.
echo 将 dist 文件夹拖入以下网址即可发布：
echo.
echo   https://app.netlify.com/drop
echo.
echo dist 文件夹位置：
echo %cd%\dist
echo.

explorer "%cd%\dist"
pause
