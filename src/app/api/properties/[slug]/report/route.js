import { NextResponse } from 'next/server';
import { getPropertyReport } from '../../../../../lib/data.mjs';

export async function GET(_request, { params }) {
  const { slug } = await params;
  const report = getPropertyReport(slug);
  if (!report) return NextResponse.json({ error: 'Report not found' }, { status: 404 });
  return NextResponse.json(report);
}
