@echo off
rem av.bat
rem Format: aa masfilename_less_extension
if "%1"=="" goto err
mas %1  
@echo off            
if errorlevel 1 goto end
sim %1 %2 %3 %4 %5 %6 %7 %8 %9 /v
goto end
:err
echo Error: File name not specified
echo Format: av masfilename_less_extension
:end
