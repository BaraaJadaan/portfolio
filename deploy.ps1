# Fast one-step automated build and deployment to GitHub Pages via SSH
Write-Host "1/3 Building project..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Error "Build failed!"
    exit 1
}

Write-Host "2/3 Syncing master branch..." -ForegroundColor Cyan
git add src/ public/ package.json deploy.ps1 README.md
git commit -m "Update portfolio routing, README, and assets" -q 2>$null
git push origin master -q

Write-Host "3/3 Deploying build to gh-pages branch..." -ForegroundColor Cyan
git add -f build
$tree = (git write-tree --prefix=build).Trim()
$commit = (git commit-tree $tree -m "Deploy latest portfolio build to GitHub Pages").Trim()
git push origin "$($commit):refs/heads/gh-pages" --force -q
git reset HEAD build -q

Write-Host "Successfully deployed to GitHub Pages!" -ForegroundColor Green
