import ProductRating from './ProductRating.jsx';

function ProductCard({ product, onSelect }) {
  const priceText = `Rp${product.price.toLocaleString('id-ID')}`;

  return (
    <article id={product.id} className="product-card relative flex min-w-0 flex-col rounded-xl border border-line p-2.5 max-[680px]:rounded-[10px] max-[680px]:p-1.75">
      <img
        src={product.image}
        alt={product.alt}
        width="720"
        height="540"
        loading="lazy"
        className="aspect-4/3 w-full rounded-[7px] object-cover"
      />
      <div className="flex flex-1 flex-col px-0.75 pt-2.75 pb-0.75 max-[680px]:px-px max-[680px]:pt-2.25 max-[680px]:pb-0.5">
        <p className="text-xs leading-[1.4] font-semibold text-brand">{product.category}</p>
        <h3 className="my-1.25 mb-3 text-base leading-[1.35] font-semibold tracking-[-0.012em] wrap-break-word max-[680px]:text-sm">
          <button
            type="button"
            className="product-trigger cursor-pointer text-left"
            onClick={() => onSelect(product)}
            aria-label={`View details: ${product.name}`}
            aria-haspopup="dialog"
          >
            {product.name}
          </button>
        </h3>
        <div className="mt-auto flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-[15px] font-semibold text-ink max-[680px]:text-sm">{priceText}</p>
          <ProductRating rating={product.rating} reviews={product.reviews} />
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
