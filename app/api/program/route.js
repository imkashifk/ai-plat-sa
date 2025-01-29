import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Program from '@/lib/models/Program';

export async function GET(request) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    const country = searchParams.get('country');
    const degree = searchParams.get('degree');
    
    let filter = {};
    
    if (query) {
      filter.$or = [
        { name: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
      ];
    }
    
    if (country && country !== 'all') {
      filter.country = country;
    }
    
    if (degree && degree !== 'all') {
      filter.degree = degree;
    }

    // Add error handling for the database query
    let programs;
    try {
      programs = await Program.find(filter).limit(20);
    } catch (queryError) {
      console.error('Database query error:', queryError);
      return NextResponse.json(
        { error: 'Failed to fetch programs from database' },
        { status: 500 }
      );
    }

    // Return empty array if no programs found
    if (!programs) {
      return NextResponse.json([]);
    }
    
    return NextResponse.json(programs);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch programs' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'university', 'country'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }
    
    const program = await Program.create(data);
    return NextResponse.json(program, { status: 201 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to create program' },
      { status: 500 }
    );
  }
}