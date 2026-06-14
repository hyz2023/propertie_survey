import { NextResponse } from 'next/server';
import { getPropertyBySlug } from '../../../../lib/data.mjs';

export async function GET(_request, { params }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return NextResponse.json({ error: 'Property not found' }, { status: 404 });
  return NextResponse.json(property);
}
