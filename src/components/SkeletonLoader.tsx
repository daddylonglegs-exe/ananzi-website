import { Skeleton } from './ui/skeleton';

export const HeroSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center px-6">
    <div className="container mx-auto text-center space-y-6">
      <Skeleton className="h-24 w-3/4 mx-auto" />
      <Skeleton className="h-8 w-2/3 mx-auto" />
      <div className="flex gap-4 justify-center">
        <Skeleton className="h-12 w-40" />
        <Skeleton className="h-12 w-40" />
      </div>
    </div>
  </div>
);

export const CardSkeleton = () => (
  <div className="glass-card p-6 space-y-4">
    <Skeleton className="h-6 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-5/6" />
    <Skeleton className="h-10 w-full" />
  </div>
);

export const ServicesSkeleton = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <CardSkeleton key={i} />
    ))}
  </div>
);