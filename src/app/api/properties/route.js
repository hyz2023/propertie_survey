import { NextResponse } from 'next/server';
import { getProperties } from '../../../lib/data.mjs';

export function GET(request) {
  const { searchParams } = new URL(request.url);
  const district = searchParams.get('district');
  const q = searchParams.get('q')?.trim().toLowerCase();
  let rows = getProperties();
  if (district) rows = rows.filter((item) => item.district === district);
  if (q) {
    rows = rows.filter((item) => [item.name, item.marketingName, item.registeredName, item.address, item.developer, ...item.tags].join(' ').toLowerCase().includes(q));
  }
  return NextResponse.json({ count: rows.length, data: rows });
}
