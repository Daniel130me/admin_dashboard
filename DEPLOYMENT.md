# Deployment Guide

## Deploying to Render

### Option 1: Using Blueprint (Recommended)

1. **Push to GitHub**:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Render**:
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New" → "Blueprint"
   - Connect your GitHub repository
   - Render will detect `render.yaml` and create both services automatically

3. **Configure Environment Variables**:
   - After deployment, go to the frontend service settings
   - Add environment variable: `VITE_API_URL` = `<your-backend-service-url>`
   - Example: `https://admin-dashboard-api.onrender.com`

### Option 2: Manual Setup

#### Backend Service (json-server)

1. Create a new Web Service on Render
2. Configure:
   - **Name**: admin-dashboard-api
   - **Build Command**: `npm install`
   - **Start Command**: `npx json-server --watch db.json --port $PORT --host 0.0.0.0`
   - **Plan**: Free

#### Frontend Service (React App)

1. Create another Web Service on Render
2. Configure:
   - **Name**: admin-dashboard-frontend
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npx vite preview --host 0.0.0.0 --port $PORT`
   - **Plan**: Free
3. Add Environment Variable:
   - **Key**: `VITE_API_URL`
   - **Value**: Your backend service URL (e.g., `https://admin-dashboard-api.onrender.com`)

### Important Notes

- **Free Tier Limitations**: Render's free tier services spin down after 15 minutes of inactivity. First request may take 30-60 seconds.
- **CORS**: json-server automatically handles CORS, so no additional configuration needed.
- **Database Persistence**: On Render's free tier, the `db.json` file will reset on each deployment. For production, consider using a proper database.

## Alternative Deployment Options

### Vercel (Frontend Only)

```bash
npm install -g vercel
vercel
```

Note: You'll need to deploy the backend separately (e.g., on Render or Railway).

### Netlify (Frontend Only)

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set environment variable `VITE_API_URL` to your backend URL

## Environment Variables

- `VITE_API_URL`: The URL of your json-server backend (required for production)

## Post-Deployment

After deployment:

1. Test all features (Dashboard, Users, Products, Settings)
2. Verify API connectivity
3. Check responsive design on mobile devices
4. Monitor service logs for any errors
