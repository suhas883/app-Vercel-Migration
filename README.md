# Replit to Vercel Migration

## Overview

This repository contains the migrated application code from Replit to Vercel with Neon database integration. The migration ensures zero downtime on the existing Replit deployment while establishing a new production environment on Vercel.

## Migration Status

✅ GitHub Repository Setup  
✅ Environment Configuration  
✅ Neon Database Connection  
⏳ Vercel Deployment (In Progress)  

## Project Structure

```
app-Vercel-Migration/
├── package.json          # Node.js dependencies and scripts
├── .env.example          # Environment variables template
├── README.md             # This file
└── [application files]   # Your Replit project files
```

## Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Vercel account
- Neon database account

## Installation

1. Clone the repository:
```bash
git clone https://github.com/suhas883/app-Vercel-Migration.git
cd app-Vercel-Migration
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env.local
```

Then add your Neon database connection string to `.env.local`:
```
DATABASE_URL=postgresql://[user]:[password]@[host]/[database]
```

## Local Development

```bash
npm run dev
```

Your application will be available at `http://localhost:3000`

## Deployment on Vercel

### Automatic Deployment

This repository is configured for automatic deployment on Vercel:

1. Every push to the `main` branch triggers a new deployment
2. Environment variables are configured in Vercel dashboard
3. Vercel automatically detects Next.js and optimizes the build

### Manual Deployment

To deploy manually:

```bash
npm i -g vercel
vercel
```

## Environment Variables

The following environment variables must be configured in Vercel:

- `DATABASE_URL` - Neon PostgreSQL connection string
- `NODE_ENV` - Set to "production" for production deployments
- `NEXT_PUBLIC_API_URL` - Your API endpoint URL

## Database (Neon)

This project uses Neon for PostgreSQL database hosting:

- **Host**: neon.tech
- **Connection Pool**: Enabled for optimal performance
- **Backup**: Automatic daily backups
- **Region**: US East 2

## Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Production start
npm start
```

## Zero Downtime Migration

The migration strategy ensures zero downtime:

1. **Phase 1**: Set up Vercel deployment (original Replit still live)
2. **Phase 2**: Test Vercel deployment thoroughly
3. **Phase 3**: Point domain to Vercel
4. **Phase 4**: Monitor Vercel for stability
5. **Phase 5**: Archive Replit project (optional)

## Troubleshooting

### Database Connection Issues
- Verify DATABASE_URL in Vercel environment variables
- Check Neon console for connection details
- Ensure IP whitelisting is configured in Neon

### Build Failures
- Check Vercel deployment logs
- Verify all dependencies are in package.json
- Ensure Node.js version compatibility (18.x+)

## Support

For deployment issues:
1. Check Vercel logs in dashboard
2. Verify environment variables are correctly set
3. Test locally with: `npm run dev`

## Next Steps

1. ✅ Repository created at: https://github.com/suhas883/app-Vercel-Migration
2. ✅ Environment template added
3. ⏳ Deploy to Vercel
4. ⏳ Configure custom domain
5. ⏳ Monitor for issues

---

**Migration Date**: December 6, 2025  
**Status**: Ready for Vercel Deployment
