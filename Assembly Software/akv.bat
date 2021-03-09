@echo off
rem akv.bat
rem Format: ala masfilename_less_extension
if "%1"=="" goto err
mas %1  
@echo off            
if errorlevel 1 goto end
lin %1 ksup
if errorlevel 1 goto end
sim %1 %2 %3 %4 %5 %6 %7 %8 %9 /v
goto end
:err
echo Error: File name not specified
echo Format: akv masfilename_less_extension
:end
