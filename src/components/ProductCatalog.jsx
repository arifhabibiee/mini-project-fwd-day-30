import { useState } from 'react';
import ProductDetailModal from './ProductDetailModal.jsx';
import ProductCard from './ProductCard.jsx';

function ProductCatalog({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleSelectProduct(product) {
    setSelectedProduct(product);
  }

  function handleCloseModal() {
    setSelectedProduct(null);
  }

  return (
    <section id="products" aria-labelledby="products-heading" className="min-w-0">
      <div className="mb-5 flex items-end justify-between gap-3 max-[680px]:flex-col max-[680px]:items-start">
        <div className="min-w-0">
          <h2 id="products-heading" className="text-[28px] font-bold tracking-[-0.035em] max-[680px]:text-[23px]">All products</h2>
          <p className="mt-1.5 text-sm text-muted">{products.length} products</p>
        </div>
        <div className="w-full min-w-0 max-w-xs max-[680px]:max-w-none">
          <label htmlFor="product-search" className="mb-2 block text-sm font-bold">Search catalog</label>
          <div className="flex min-h-11.5 items-center gap-2 rounded-[5px] border border-[#B7BDC6] bg-white px-3 py-2.5 text-muted focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-brand">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="shrink-0"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg>
            <input id="product-search" type="search" readOnly aria-describedby="filter-note" placeholder="Search digital products" className="w-full min-w-0 cursor-default border-0 bg-transparent text-base text-ink outline-none placeholder:text-muted" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 min-[351px]:grid-cols-2 min-[1021px]:grid-cols-3 max-[680px]:gap-x-3 max-[680px]:gap-y-4.5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={handleSelectProduct}
          />
        ))}
      </div>
      <p className="mt-5 text-xs leading-normal text-muted">
        Prices, ratings and review counts are sample data for this learning project. Product images are illustrations.
      </p>
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}

export default ProductCatalog;
