function ProductRating({ rating, reviews }) {
  const ratingPercentage = (rating / 5) * 100;

  return (
    <p className="flex flex-wrap items-center gap-x-1.25 gap-y-0.5 text-xs leading-[1.35] tabular-nums text-muted max-[680px]:text-[11px]" aria-label={`${rating.toFixed(1)} dari 5 bintang, ${reviews} ulasan`}>
      <span aria-hidden="true" className="rating-stars">
        <span>★★★★★</span>
        <span className="rating-stars-filled" style={{ width: `${ratingPercentage}%` }}>
          ★★★★★
        </span>
      </span>
      <span className="whitespace-nowrap">{rating.toFixed(1)} ({reviews} reviews)</span>
    </p>
  );
}

export default ProductRating;
