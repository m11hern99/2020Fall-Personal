@echo off
rem tlog.bat
rem Format: tlog logfile_basename
if "%1"=="" goto err
if exist %1.rpt goto eraseit
goto noerase
:eraseit
del %1.rpt
:noerase
for %%p in (%1.*) do crc /d%2 %%p
goto end
:err
echo Error: Log file basename not specified
echo Format: tlog logfile_basename
:end
