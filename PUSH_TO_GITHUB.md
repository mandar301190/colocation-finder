# 🔐 How to Push to GitHub with Your Token

## Option 1: Use Token in URL (Easiest)

Replace `YOUR_TOKEN_HERE` with your actual Personal Access Token:

```bash
git remote set-url origin https://YOUR_TOKEN_HERE@github.com/mandar301190/colocation-finder.git
git push -u origin main
```

After successful push, change it back to regular URL for security:
```bash
git remote set-url origin https://github.com/mandar301190/colocation-finder.git
```

## Option 2: Use Token as Password (Recommended)

```bash
git push -u origin main
```

When prompted:
- **Username**: mandar301190
- **Password**: [Paste your Personal Access Token here]

## Option 3: Use GitHub CLI (Alternative)

If you have GitHub CLI installed:

```bash
gh auth login
git push -u origin main
```

## Troubleshooting

### Still getting 403 error?

1. **Verify your token has correct permissions:**
   - Go to: https://github.com/settings/tokens
   - Click on your token
   - Ensure `repo` scope is checked
   - If not, regenerate the token with `repo` scope

2. **Make sure the repository exists:**
   - Visit: https://github.com/mandar301190/colocation-finder
   - If it doesn't exist, create it first at: https://github.com/new

3. **Clear all cached credentials:**
   ```bash
   # For macOS
   git credential-osxkeychain erase
   # Then press Enter, type:
   host=github.com
   protocol=https
   # Press Enter twice
   ```

4. **Try SSH instead of HTTPS:**
   ```bash
   git remote set-url origin git@github.com:mandar301190/colocation-finder.git
   git push -u origin main
   ```
   (Requires SSH key setup: https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

## Quick Fix Command

Run this (replace YOUR_TOKEN with your actual token):

```bash
git remote set-url origin https://YOUR_TOKEN@github.com/mandar301190/colocation-finder.git && git push -u origin main && git remote set-url origin https://github.com/mandar301190/colocation-finder.git
```

This will:
1. Set the URL with your token
2. Push the code
3. Remove the token from the URL (for security)

## After Successful Push

Once you see "Branch 'main' set up to track remote branch 'main' from 'origin'", you're done!

Visit your repository: https://github.com/mandar301190/colocation-finder

Then proceed to Step 3 (Deploy Backend to Vercel) in DEPLOY_NOW.md
