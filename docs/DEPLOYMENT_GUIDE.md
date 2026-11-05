# SAMBALEAF Production Deployment & Operations Guide

## 1. Production Overview
SAMBALEAF is configured as an optimized Next.js 14 application ready for one-click deployment on **Vercel**, **AWS Amplify**, or custom **Docker VPS** (Ubuntu / NGINX).

## 2. Environment Prerequisites
- Node.js 18.17+ or Node.js 20+
- npm or pnpm package manager

## 3. Local Verification & Test Execution
Before deploying any release, verify TypeScript typing and run the comprehensive test suite:
```bash
# 1. Run unit, coupon, and pricing assertions
npm test

# 2. Verify static type compilation
npx tsc --noEmit

# 3. Test production build
npm run build
```

## 4. Vercel Deployment (Recommended)
1. Import GitHub repository `https://github.com/Hari-Haran-A-07/www.sambaleaf.com`.
2. Framework Preset: **Next.js**.
3. Build Command: `npm run build` or `next build`.
4. Output Directory: `.next`.
5. Environment Variables:
   - `NEXT_PUBLIC_APP_URL`: `https://sambaleaf.com`
   - `NEXT_PUBLIC_WHATSAPP_PHONE`: `919876543210`
   - `NEXT_PUBLIC_KITCHEN_PHONE`: `919442188320`

## 5. Docker Deployment
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
CMD ["npm", "start"]
```

## 6. Live Health Check
Verify API routes are responding:
```bash
curl https://sambaleaf.com/api/status
curl https://sambaleaf.com/api/menu
```
