import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Country from '@/lib/models/Country';

export async function GET(request) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    const region = searchParams.get('region');
    const livingCost = searchParams.get('livingCost');
    const workRights = searchParams.get('workRights');
    
    let filter = {};
    
    if (query) {
      filter.name = { $regex: query, $options: 'i' };
    }
    
    if (region) {
      filter.region = region;
    }
    
    if (livingCost) {
      filter.livingCost = livingCost;
    }
    
    if (workRights) {
      filter.workRights = workRights;
    }
    
    const countries = await Country.find(filter).limit(20);
    
    return NextResponse.json(countries);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}