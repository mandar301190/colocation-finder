#!/bin/bash

echo "🔍 Checking Colocation Finder Deployment Status"
echo "================================================"

echo ""
echo "📋 Repository Information:"
echo "Repository: mandar301190/colocation-finder"
echo "Branch: main"
echo "GitHub Pages URL: https://mandar301190.github.io/colocation-finder/"

echo ""
echo "🌐 Testing URLs:"
echo "1. Testing main app..."
curl -s -o /dev/null -w "Main App: %{http_code} - %{url_effective}\n" "https://mandar301190.github.io/colocation-finder/"

echo "2. Testing deployment test page..."
curl -s -o /dev/null -w "Test Page: %{http_code} - %{url_effective}\n" "https://mandar301190.github.io/colocation-finder/test-deployment.html"

echo "3. Testing API data..."
curl -s -o /dev/null -w "API Data: %{http_code} - %{url_effective}\n" "https://mandar301190.github.io/colocation-finder/api/locations.json"

echo ""
echo "📊 Expected Results:"
echo "- All URLs should return 200 (OK)"
echo "- If you get 404, the deployment may still be processing"
echo "- If you get other errors, there may be a configuration issue"

echo ""
echo "⏰ Note: GitHub Pages deployments can take 5-10 minutes to propagate"
echo "🔄 If you see 404 errors, wait a few minutes and try again"

echo ""
echo "🛠️ Troubleshooting:"
echo "1. Check GitHub Actions: https://github.com/mandar301190/colocation-finder/actions"
echo "2. Check GitHub Pages settings: https://github.com/mandar301190/colocation-finder/settings/pages"
echo "3. Verify the gh-pages branch exists and has content"