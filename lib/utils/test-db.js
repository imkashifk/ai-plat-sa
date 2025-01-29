import mongoose from 'mongoose';
import dbConnect from '@/lib/db';

export async function testDatabaseConnection() {
  try {
    await dbConnect();
    
    // Check connection state
    const state = mongoose.connection.readyState;
    const states = {
      0: 'disconnected',
      1: 'connected',
      2: 'connecting',
      3: 'disconnecting'
    };
    
    console.log(`Database Connection Status: ${states[state]}`);
    
    // Test simple query
    const collections = await mongoose.connection.db.collections();
    console.log('Available collections:', collections.map(c => c.collectionName));
    
    return {
      success: true,
      state: states[state],
      collections: collections.map(c => c.collectionName)
    };
  } catch (error) {
    console.error('Database Connection Error:', error);
    return {
      success: false,
      error: error.message
    };
  }
}