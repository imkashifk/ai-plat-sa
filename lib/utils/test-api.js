const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

const API_ROUTES = {
  programs: {
    base: '/program',
    methods: ['GET', 'POST'],
    single: (id) => `/program/${id}`,
    singleMethods: ['GET', 'PUT', 'DELETE']
  },
  universities: {
    base: '/universities',
    methods: ['GET', 'POST'],
    single: (id) => `/universities/${id}`,
    singleMethods: ['GET', 'PUT', 'DELETE']
  },
  countries: {
    base: '/countries',
    methods: ['GET', 'POST'],
    single: (id) => `/countries/${id}`,
    singleMethods: ['GET', 'PUT', 'DELETE']
  },
  scholarships: {
    base: '/scholarships',
    methods: ['GET', 'POST'],
    single: (id) => `/scholarships/${id}`,
    singleMethods: ['GET', 'PUT', 'DELETE']
  }
};

export async function testEndpoint(route, method = 'GET', data = null) {
  const timestamp = new Date().toISOString();
  const url = `${API_BASE_URL}${route}`;
  
  console.log(`[${timestamp}] Testing ${method} ${url}`);
  
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    if (data && (method === 'POST' || method === 'PUT')) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    const responseData = await response.json();

    console.log(`[${timestamp}] Status: ${response.status}`);
    console.log('Response:', responseData);

    return {
      success: response.ok,
      status: response.status,
      data: responseData,
      timestamp
    };
  } catch (error) {
    console.error(`[${timestamp}] Error:`, error);
    return {
      success: false,
      error: error.message,
      timestamp
    };
  }
}

export async function testAllEndpoints() {
  const results = {
    timestamp: new Date().toISOString(),
    endpoints: {}
  };

  for (const [name, route] of Object.entries(API_ROUTES)) {
    console.log(`\nTesting ${name} endpoints:`);
    results.endpoints[name] = [];

    // Test base endpoints
    for (const method of route.methods) {
      const result = await testEndpoint(route.base, method);
      results.endpoints[name].push({
        path: route.base,
        method,
        ...result
      });
    }

    // Test single item endpoints with a sample ID
    if (route.single) {
      const sampleId = '123456789012345678901234'; // Sample MongoDB ObjectId
      for (const method of route.singleMethods) {
        const result = await testEndpoint(route.single(sampleId), method);
        results.endpoints[name].push({
          path: route.single(sampleId),
          method,
          ...result
        });
      }
    }
  }

  return results;
}