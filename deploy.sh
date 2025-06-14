#!/bin/bash

# Personal Portfolio Website - GitHub Pages Deployment Script
# Make sure to update the repository URL and username before running

echo "🚀 Deploying Personal Portfolio to GitHub Pages..."

# Check if gh-pages is installed
if ! npm list gh-pages > /dev/null 2>&1; then
    echo "❌ gh-pages not found. Installing..."
    npm install -D gh-pages
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Not a git repository. Please initialize git first:"
    echo "   git init"
    echo "   git remote add origin https://github.com/ardasnturk/web-site.git"
    exit 1
fi

# Check if we have a remote origin
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ No remote origin found. Please add your GitHub repository:"
    echo "   git remote add origin https://github.com/ardasnturk/web-site.git"
    exit 1
fi

# Build the project
echo "📦 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🎉 Your portfolio is now live at: https://ardasnturk.github.io/web-site"
    echo ""
    echo "📋 Next steps:"
    echo "   1. Go to your repository settings on GitHub"
    echo "   2. Navigate to 'Pages' section"
    echo "   3. Set source to 'Deploy from a branch'"
    echo "   4. Select 'gh-pages' branch"
    echo "   5. Your site will be available in a few minutes!"
else
    echo "❌ Deployment failed. Please check the errors above."
    exit 1
fi 