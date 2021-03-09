@echo off
rem alv.bat
rem Format: ala masfilename_less_extension
if "%1"=="" goto err
mas %1              
if errorlevel 1 goto end
lin %1 sup
if errorlevel 1 goto end
sim %1 %2 %3 %4 %5 %6 %7 %8 %9 /v
goto end
:err
echo Error: File name not specified
echo Format: alv masfilename_less_extension
:end
