import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import University from '@/lib/models/University';

export async function GET(request) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    const country = searchParams.get('country');
    const type = searchParams.get('type');
    const ranking = searchParams.get('ranking');
    
    let filter = {};
    
    if (query) {
      filter.name = { $regex: query, $options: 'i' };
    }
    
    if (country) {
      filter.country = country;
    }
    
    if (type) {
      filter.type = type;
    }
    
    if (ranking) {
      filter.ranking = ranking;
    }
    
    const universities = await University.find(filter).limit(20);
    
    return NextResponse.json(universities);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}