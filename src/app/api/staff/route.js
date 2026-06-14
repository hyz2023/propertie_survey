import { NextResponse } from 'next/server';
import { getStaffList } from '../../../lib/data.mjs';

export function GET() {
  const rows = getStaffList();
  return NextResponse.json({ count: rows.length, data: rows });
}
