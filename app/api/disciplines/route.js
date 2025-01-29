import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Program from '@/lib/models/Program';

export async function GET() {
  try {
    await dbConnect();
    
    // Aggregate programs to get discipline counts
    const disciplines = await Program.aggregate([
      // Unwind the disciplines array to create separate documents
      { $unwind: "$disciplines" },
      // Group by discipline and count programs
      {
        $group: {
          _id: "$disciplines",
          programCount: { $sum: 1 }
        }
      },
      // Sort by program count in descending order
      { $sort: { programCount: -1 } },
      // Limit to top disciplines
      { $limit: 8 },
      // Format the output
      {
        $project: {
          _id: 0,
          name: "$_id",
          programCount: 1
        }
      }
    ]);

    return NextResponse.json(disciplines);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch disciplines' },
      { status: 500 }
    );
  }
}