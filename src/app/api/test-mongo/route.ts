import { connectToDB } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDB();
    return NextResponse.json({ message: 'MongoDB connected ✅' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Connection failed ❌' }, { status: 500 });
  }
}
