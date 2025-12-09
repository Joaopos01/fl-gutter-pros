import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// ============================================================
// GOOGLE REVIEWS INTEGRATION
// ============================================================
// 
// This component is ready to receive reviews from your backend.
// 
// To integrate with Google Reviews:
// 1. Set up Google Places API or use a service like Elfsight/EmbedSocial
// 2. Fetch reviews from your backend API
// 3. Replace the `reviews` array below with your fetched data
// 
// Expected review data structure:
// interface GoogleReview {
//   id: string;
//   authorName: string;
//   authorPhoto?: string;
//   rating: number; // 1-5
//   text: string;
//   time: string; // ISO date or relative time
//   relativeTime?: string;
// }
// 
// Example API fetch:
// const { data: reviews } = useQuery({
//   queryKey: ['google-reviews'],
//   queryFn: () => fetch('/api/reviews').then(res => res.json())
// });
// ============================================================

export interface GoogleReview {
  id: string;
  authorName: string;
  authorPhoto?: string;
  rating: number;
  text: string;
  relativeTime: string;
}

interface GoogleReviewsProps {
  reviews?: GoogleReview[];
  placeId?: string; // Your Google Place ID for direct integration
}

// Placeholder reviews - replace with your actual Google reviews
const placeholderReviews: GoogleReview[] = [
  {
    id: "1",
    authorName: "M. Thompson",
    rating: 5,
    text: "Clean Cut Gutters did an incredible job. The installation looks perfect and solved all our drainage issues.",
    relativeTime: "2 weeks ago",
  },
  {
    id: "2",
    authorName: "J. Alvarez",
    rating: 5,
    text: "Fast, honest and high-quality service. Highly recommend for Florida homeowners.",
    relativeTime: "1 month ago",
  },
  {
    id: "3",
    authorName: "Sarah Mitchell",
    rating: 5,
    text: "Professional team, arrived on time and finished ahead of schedule. Our gutters look amazing!",
    relativeTime: "3 weeks ago",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
};

const GoogleReviews = ({ reviews = placeholderReviews }: GoogleReviewsProps) => {
  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : "5.0";

  return (
    <section className="section-padding bg-muted">
      <div className="container-narrow mx-auto">
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <svg className="h-8 w-8" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-lg font-semibold text-foreground">Google Reviews</span>
          </div>
          
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="text-4xl font-bold text-foreground">{averageRating}</span>
            <div>
              <StarRating rating={Math.round(Number(averageRating))} />
              <span className="text-sm text-muted-foreground">{reviews.length} reviews</span>
            </div>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.id} className="border-border bg-card shadow-card">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                    {review.authorName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">{review.authorName}</p>
                    <p className="text-sm text-muted-foreground">{review.relativeTime}</p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
                <p className="mt-4 text-muted-foreground leading-relaxed">"{review.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
