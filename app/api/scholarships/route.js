import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Scholarship from '@/lib/models/Scholarship';

export async function GET(request) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    const type = searchParams.get('type');
    const degree = searchParams.get('degree');
    const country = searchParams.get('country');
    
    let filter = {};
    
    if (query) {
      filter.name = { $regex: query, $options: 'i' };
    }
    
    if (type) {
      filter.type = type;
    }
    
    if (degree) {
      filter.degree = degree;
    }
    
    if (country) {
      filter.country = country;
    }
    
    const scholarships = await Scholarship.find(filter).limit(20);
    
    return NextResponse.json(scholarships);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}