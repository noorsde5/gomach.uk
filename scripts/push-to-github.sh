#!/usr/bin/env bash
set -e

REPO_URL="https://noorsde5:${GITHUB_PAT}@github.com/noorsde5/gomach.uk.git"

# Configure git identity if not set
git config user.email "gomach@replit.deploy" 2>/dev/null || true
git config user.name "GoMach Deploy" 2>/dev/null || true

# Remove old github remote if exists, add fresh one
git remote remove github 2>/dev/null || true
git remote add github "$REPO_URL"

# Push main branch
git push github main --force

echo "✅ Pushed to https://github.com/noorsde5/gomach.uk"
