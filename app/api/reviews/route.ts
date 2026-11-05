import { NextResponse } from 'next/server';
import { REVIEWS_DATA, getAverageRating } from '../../../lib/reviewsData';

export async function GET() {
  const stats = getAverageRating();
  return NextResponse.json({
    success: true,
    stats,
    reviews: REVIEWS_DATA
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { author, rating, comment, location } = body;

    if (!author || !comment || !rating) {
      return NextResponse.json({ success: false, error: 'Author, rating and comment are required' }, { status: 400 });
    }

    const newReview = {
      id: `rev-${Date.now()}`,
      author,
      location: location || 'Karur',
      rating: Number(rating),
      date: 'Just now',
      comment,
      orderItem: 'Custom Order',
      verifiedBuyer: true,
      avatarSeed: author.toLowerCase().replace(/\s+/g, '')
    };

    return NextResponse.json({
      success: true,
      message: 'Review received and queued for verified buyer publication',
      review: newReview
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
