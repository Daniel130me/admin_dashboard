# Deployment Guide - Single Service

## Simplified Deployment to Render

This project is configured to run both the frontend and backend on a **single Render service**, making deployment simpler and more cost-effective.

### How It Works

- **Frontend**: Built React app served via `serve` on port 3000
- **Backend**: json-server running on port 3001
- Both run concurrently using the `npm start` command

### Deploy to Render

#### Option 1: Blueprint (Automatic)

1. **Push to GitHub** (already done ✅)

2. **Deploy on Render**:
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click **"New"** → **"Blueprint"**
   - Connect your repository: `Daniel130me/admin_dashboard`
   - Render will detect `render.yaml` and create the service automatically

3. **Access Your App**:
   - Render will provide a URL like: `https://admin-dashboard.onrender.com`
   - Both frontend and backend will be accessible from this single URL

#### Option 2: Manual Setup

1. Create a new **Web Service** on Render
2. Configure:
   - **Name**: admin-dashboard
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free

### Local Testing

Test the production build locally:

```bash
npm run build
npm start
```

Then visit `http://localhost:3000`

### Important Notes

- **Free Tier**: Services spin down after 15 minutes of inactivity
- **Database**: `db.json` resets on each deployment (free tier limitation)
- **Ports**: Frontend (3000) and API (3001) run on the same service
- **No CORS Issues**: Since both are on the same domain, no CORS configuration needed

### Troubleshooting

If you encounter issues:

1. Check Render logs for errors
2. Verify `npm start` works locally
3. Ensure all dependencies are in `package.json`
4. Check that `dist` folder is created during build
