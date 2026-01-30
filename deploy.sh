#!/bin/bash

echo "🚀 Colocation Finder Deployment Script"
echo "======================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Step 1: Checking prerequisites...${NC}"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git is not installed. Please install Git first.${NC}"
    exit 1
fi

# Check if node is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js first.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Prerequisites check passed${NC}"

echo -e "${BLUE}Step 2: Checking GitHub repository status...${NC}"

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo -e "${RED}❌ Not in a git repository. Please run this from your project root.${NC}"
    exit 1
fi

# Check if remote is configured
if ! git remote get-url origin &> /dev/null; then
    echo -e "${RED}❌ No remote origin configured.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Git repository configured${NC}"

echo -e "${BLUE}Step 3: Pushing latest changes to GitHub...${NC}"

# Add all changes and push
git add .
git commit -m "Prepare for deployment - $(date)" || echo "No changes to commit"
git push origin main

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Code pushed to GitHub successfully${NC}"
else
    echo -e "${RED}❌ Failed to push to GitHub${NC}"
    exit 1
fi

echo -e "${BLUE}Step 4: Preparing frontend for deployment...${NC}"

cd frontend

# Install dependencies if not already installed
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}Installing frontend dependencies...${NC}"
    npm install
fi

echo -e "${BLUE}Step 5: Deployment Instructions${NC}"
echo "============================================"
echo ""
echo -e "${YELLOW}🔧 BACKEND DEPLOYMENT (Vercel):${NC}"
echo "1. Go to: https://vercel.com"
echo "2. Sign in with GitHub"
echo "3. Click 'Add New Project'"
echo "4. Import 'colocation-finder' repository"
echo "5. Configure:"
echo "   - Framework: Other"
echo "   - Root Directory: backend"
echo "   - Build Command: (leave empty)"
echo "   - Install Command: npm install"
echo "6. Click 'Deploy'"
echo "7. Copy your backend URL (e.g., https://colocation-finder-xyz.vercel.app)"
echo ""
echo -e "${YELLOW}🌐 FRONTEND DEPLOYMENT (GitHub Pages):${NC}"
echo "After deploying backend, run these commands:"
echo ""
echo -e "${GREEN}cd frontend${NC}"
echo -e "${GREEN}echo \"VITE_API_URL=https://your-backend-url.vercel.app\" > .env.production${NC}"
echo -e "${GREEN}npm run build${NC}"
echo -e "${GREEN}npm run deploy${NC}"
echo ""
echo "Then enable GitHub Pages:"
echo "1. Go to: https://github.com/mandar301190/colocation-finder/settings/pages"
echo "2. Source: Deploy from branch"
echo "3. Branch: gh-pages"
echo "4. Folder: / (root)"
echo "5. Save"
echo ""
echo -e "${GREEN}🎉 Your app will be live at:${NC}"
echo -e "${BLUE}https://mandar301190.github.io/colocation-finder/${NC}"
echo ""
echo -e "${YELLOW}📚 For detailed instructions, see DEPLOY_NOW.md${NC}"

cd ..