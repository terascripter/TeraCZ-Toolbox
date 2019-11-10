pushd %~dp0
COPY /y ReleaseRevision.txt "%ProgramFiles(x86)%\CZLauncher\apps\tera\Binaries\ReleaseRevision.txt"
popd
pause