import { NextResponse } from 'next/server';
import { MENU_ITEMS } from '../../../lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  let items = MENU_ITEMS;
  if (category) {
    items = items.filter(i => i.category === category);
  }

  return NextResponse.json({
    success: true,
    total: items.length,
    kitchen: 'Karur Woodfire Central Hearth',
    data: items
  });
}
