// Category preview
const categories = ['All Products', 'E-books', 'Templates', 'Source Code', 'UI Kits', 'Digital Media'];

function CategorySidebar({ products }) {
  return (
    <aside id="categories" aria-label="Kategori katalog" className="min-w-0">
      <section aria-labelledby="category-heading">
        <h2 id="category-heading" className="mb-3.5 text-lg font-bold">Browse by category</h2>
        <ul className="grid gap-1 max-[680px]:flex max-[680px]:flex-wrap max-[680px]:gap-1.5">
          {categories.map((category) => {
            const count = category === 'All Products'
              ? products.length
              : products.filter((product) => product.category === category).length;

            return (
              <li key={category} className={`flex items-center justify-between rounded px-2.5 py-2.75 text-sm max-[680px]:gap-2 max-[680px]:border max-[680px]:border-line max-[680px]:px-2.25 max-[680px]:py-1.75 ${category === 'All Products' ? 'bg-brand font-bold text-white' : 'border-b border-line text-muted'}`}>
                <span>{category}</span><span className="tabular-nums">{count}</span>
              </li>
            );
          })}
        </ul>
      </section>
      <p id="filter-note" className="mt-5 text-xs leading-normal text-muted max-[680px]:mt-2.5">
        Search and category filters are visual previews only.
      </p>
    </aside>
  );
}

export default CategorySidebar;
