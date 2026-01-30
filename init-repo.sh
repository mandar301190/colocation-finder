#!/bin/bash

# Colocation Finder - GitHub Repository Initialization Script
# This script helps you set up and deploy the project to GitHub

echo "🌐 Colocation Finder - Repository Setup"
echo "========================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Git and Node.js are installed"
echo ""

# Get GitHub username
read -p "Enter your GitHub username: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ GitHub username is required"
    exit 1
fi

# Repository name
REPO_NAME="colocation-finder"

echo ""
echo "📦 Repository will be created at:"
echo "   https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo ""

read -p "Continue? (y/n): " CONTINUE

if [ "$CONTINUE" != "y" ]; then
    echo "❌ Setup cancelled"
    exit 0
fi

echo ""
echo "🔧 Setting up Git repository..."

# Initialize git if not already initialized
if [ ! -d .git ]; then
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Update vite.config.js with correct base path
echo ""
echo "🔧 Configuring frontend..."
sed -i.bak "s|base: '/colocation-finder/'|base: '/$REPO_NAME/'|g" frontend/vite.config.js
rm -f frontend/vite.config.js.bak
echo "✅ Frontend configured"

# Create .gitignore if it doesn't exist
if [ ! -f .gitignore ]; then
    echo "node_modules/" > .gitignore
    echo "dist/" >> .gitignore
    echo ".env" >> .gitignore
fi

# Add all files
echo ""
echo "📝 Adding files to Git..."
git add .
echo "✅ Files added"

# Commit
echo ""
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Colocation Finder webapp"
echo "✅ Commit created"

# Add remote
echo ""
echo "🔗 Adding GitHub remote..."
git remote remove origin 2>/dev/null
git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
echo "✅ Remote added"

# Rename branch to main
git branch -M main

echo ""
echo "=========================================="
echo "✅ Repository setup complete!"
echo ""
echo "📋 Next Steps:"
echo ""
echo "1. Create the repository on GitHub:"
echo "   - Go to https://github.com/new"
echo "   - Repository name: $REPO_NAME"
echo "   - Make it public"
echo "   - Don't initialize with README"
echo "   - Click 'Create repository'"
echo ""
echo "2. Push your code:"
echo "   git push -u origin main"
echo ""
echo "3. Deploy backend to Vercel:"
echo "   - Go to https://vercel.com"
echo "   - Import your repository"
echo "   - Set root directory to 'backend'"
echo "   - Deploy"
echo ""
echo "4. Deploy frontend to GitHub Pages:"
echo "   cd frontend"
echo "   npm install"
echo "   VITE_API_URL=https://your-backend.vercel.app npm run build"
echo "   npm run deploy"
echo ""
echo "5. Enable GitHub Pages:"
echo "   - Go to repository Settings > Pages"
echo "   - Source: gh-pages branch"
echo "   - Save"
echo ""
echo "📖 For detailed instructions, see DEPLOYMENT.md"
echo "=========================================="
