import { testDatabaseConnection } from '@/lib/utils/test-db';
import { testAllEndpoints } from '@/lib/utils/test-api';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Test database connection
    console.log('\n=== Testing Database Connection ===');
    const dbStatus = await testDatabaseConnection();
    
    // Test all API endpoints
    console.log('\n=== Testing API Endpoints ===');
    const apiStatus = await testAllEndpoints();

    // Compile complete test results
    const results = {
      timestamp: new Date().toISOString(),
      database: dbStatus,
      api: apiStatus,
      baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'
    };

    return res.status(200).json(results);
  } catch (error) {
    console.error('Test Error:', error);
    return res.status(500).json({
      error: 'Test execution failed',
      message: error.message
    });
  }
}