$cwd = Split-Path -Path $MyInvocation.MyCommand.Definition -Parent
Set-Location $cwd
$next = Join-Path $cwd 'node_modules\.bin\next.cmd'
Write-Host "next=$next"
if (-Not (Test-Path $next)) {
  Write-Host "ERROR: next.cmd not found"
  exit 1
}
& $next build
Write-Host "EXIT=$LASTEXITCODE"
