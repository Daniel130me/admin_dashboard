# Admin Dashboard

A modern, responsive admin dashboard built with React, Vite, and json-server.

## Features

- 📊 **Dashboard Overview** - Real-time stats and revenue charts
- 👥 **User Management** - Add, edit, and delete users
- 📦 **Product Inventory** - Manage products with stock tracking
- ⚙️ **Settings** - Customize admin preferences
- 🎨 **Modern UI** - Beautiful design with Tailwind CSS
- 📱 **Responsive** - Works seamlessly on all devices

## Tech Stack

- **Frontend**: React 19, React Router DOM
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Backend**: json-server (mock REST API)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd admin-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   This will start:
   - Vite dev server on `http://localhost:3000`
   - json-server on `http://localhost:3001`

4. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start both Vite and json-server concurrently
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run server` - Start only json-server

## Project Structure

```
admin-dashboard/
├── pages/              # React page components
│   ├── DashboardPage.jsx
│   ├── UsersPage.jsx
│   ├── ProductsPage.jsx
│   └── SettingsPage.jsx
├── services/           # API service layer
│   └── api.js
├── App.jsx            # Main app component
├── index.jsx          # Entry point
├── index.html         # HTML template
├── db.json            # json-server database
└── vite.config.js     # Vite configuration
```

## Deployment

### Deploying to Render

This project is configured for deployment on Render with two services:

1. **Web Service** (Frontend)
2. **Web Service** (json-server Backend)

See `render.yaml` for the complete configuration.

#### Quick Deploy

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

Or manually:

1. Push your code to GitHub
2. Create a new Blueprint on Render
3. Connect your GitHub repository
4. Render will automatically detect `render.yaml` and create both services

## API Endpoints

The json-server provides the following endpoints:

- `GET /users` - Get all users
- `POST /users` - Create a new user
- `DELETE /users/:id` - Delete a user
- `GET /products` - Get all products
- `GET /stats` - Get dashboard statistics

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
