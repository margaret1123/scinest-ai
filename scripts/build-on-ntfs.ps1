# Build helper: mirrors the project to C:\dev\scinest-verify (NTFS) and builds there.
#
# Why: the G: drive is exFAT. On exFAT, Node's readlink() returns EISDIR for
# regular files, which breaks webpack's resolution during `next build`.
# Vercel's cloud builds (Linux) are unaffected — this script is only for
# LOCAL build verification.
#
# Usage: powershell -ExecutionPolicy Bypass -File scripts\build-on-ntfs.ps1 [build|dev]
#   build (default) — mirror + npm run build on C:
#   dev             — mirror + npm run dev on C:

param([string]$Mode = "build")

$ErrorActionPreference = "Stop"
$src = "G:\版本统一\scinest-ai_new"
$dst = "C:\dev\scinest-verify"

Write-Host "[1/3] Mirroring app/ and public/ to $dst ..."
robocopy "$src\app"    "$dst\app"    /MIR /NFL /NDL /NJH /NJS | Out-Null
robocopy "$src\public" "$dst\public" /MIR /NFL /NDL /NJH /NJS | Out-Null
robocopy "$src\scripts" "$dst\scripts" /MIR /NFL /NDL /NJH /NJS | Out-Null
Copy-Item "$src\package.json" "$dst\package.json" -Force
Copy-Item "$src\package-lock.json" "$dst\package-lock.json" -Force
Copy-Item "$src\next.config.ts" "$dst\next.config.ts" -Force
Copy-Item "$src\tsconfig.json" "$dst\tsconfig.json" -Force
Copy-Item "$src\middleware.ts" "$dst\middleware.ts" -Force
Copy-Item "$src\lib" "$dst\lib" -Recurse -Force
Copy-Item "$src\docs" "$dst\docs" -Recurse -Force
if (Test-Path "$src\.env.local") { Copy-Item "$src\.env.local" "$dst\.env.local" -Force }

if (-not (Test-Path "$dst\node_modules")) {
    Write-Host "[2/3] First run — installing dependencies (one time, ~1-2 min)..."
    Set-Location $dst
    npm ci --no-audit --no-fund
    if ($LASTEXITCODE -ne 0) { throw "npm ci failed" }
} else {
    Write-Host "[2/3] node_modules already present, skipping install"
}

Write-Host "[3/3] Running npm run $Mode ..."
Set-Location $dst
npm run $Mode
exit $LASTEXITCODE
