import { NextResponse } from 'next/server';

export async function GET() {
  const uptimeSeconds = process.uptime();
  const memoryUsage = process.memoryUsage();

  return NextResponse.json(
    {
      status: 'healthy',
      service: 'sambaleaf-web',
      version: '2.0.0',
      timestamp: new Date().toISOString(),
      uptime: {
        seconds: Math.floor(uptimeSeconds),
        formatted: `${Math.floor(uptimeSeconds / 60)}m ${Math.floor(uptimeSeconds % 60)}s`
      },
      environment: process.env.NODE_ENV || 'production',
      nodeVersion: process.version,
      memory: {
        rssMb: Math.round((memoryUsage.rss / 1024 / 1024) * 100) / 100,
        heapUsedMb: Math.round((memoryUsage.heapUsed / 1024 / 1024) * 100) / 100,
        heapTotalMb: Math.round((memoryUsage.heapTotal / 1024 / 1024) * 100) / 100
      },
      services: {
        woodfireDumHearth: 'operational',
        whatsappOrderGateway: 'operational',
        menuCatalog: 'operational',
        loyaltyEngine: 'operational'
      }
    },
    {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, max-age=0'
      }
    }
  );
}
