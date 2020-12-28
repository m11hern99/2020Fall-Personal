@echo off
rem cakv.bat
rem Format: caka cppfilename_less_extension
if "%1"=="" goto err
mas %1.cpp              
if errorlevel 1 goto end
lin %1 ksup
if errorlevel 1 goto end
sim %1 %2 %3 %4 %5 %6 %7 %8 %9 /v
goto end
:err
echo Error: File name not specified
echo Format: cakv cppfilename_less_extension
:end
