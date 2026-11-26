import ProductRating from './ProductRating.jsx';

function openDialog(dialog) {
  if (dialog && !dialog.open) {
    dialog.showModal();
  }
}

function ProductDetailModal({ product, onClose }) {
  const priceText = `Rp${product.price.toLocaleString('id-ID')}`;

  return (
    <dialog
      ref={openDialog}
      onClose={onClose}
      aria-labelledby="detail-title"
      className="product-modal m-auto w-[calc(100%-2rem)] max-w-3xl max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-xl border border-line bg-paper p-6 text-ink max-[600px]:p-4"
    >
      <div className="mb-5 flex items-center justify-between gap-3 border-b border-line pb-3">
        <p className="text-sm font-semibold text-muted">Product details</p>
        <form method="dialog">
          <button
            type="submit"
            className="cursor-pointer rounded-md border border-line px-3 py-2 text-sm font-semibold transition-colors hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Close <span aria-hidden="true">×</span>
          </button>
        </form>
      </div>
      <div className="grid grid-cols-2 items-start gap-6 max-[600px]:grid-cols-1 max-[600px]:gap-4">
        <img src={product.image} alt={product.alt} width="720" height="540" className="aspect-4/3 w-full rounded-lg object-cover" />
        <div className="min-w-0">
          <p className="mb-2 text-sm font-semibold text-brand">{product.category}</p>
          <h2 id="detail-title" className="mb-3 text-2xl leading-tight font-bold wrap-break-word">{product.name}</h2>
          <ProductRating rating={product.rating} reviews={product.reviews} />
          <p className="my-4 text-2xl font-semibold">{priceText}</p>
          <p className="text-sm leading-relaxed text-muted">{product.description}</p>
        </div>
      </div>
    </dialog>
  );
}

export default ProductDetailModal;
