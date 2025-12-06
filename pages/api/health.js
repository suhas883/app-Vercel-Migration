import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Test database connection
      const result = await sql`SELECT NOW() as current_time;`;
      
      return res.status(200).json({
        status: 'ok',
        message: 'Database connection successful',
        timestamp: result.rows[0].current_time,
        environment: process.env.NODE_ENV,
      });
    } catch (error) {
      console.error('Health check failed:', error);
      return res.status(500).json({
        status: 'error',
        message: 'Database connection failed',
        error: error.message,
      });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
