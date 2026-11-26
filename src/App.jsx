import Header from "./components/Header.jsx";
import CatalogHero from "./components/CatalogHero.jsx";
import CategorySidebar from "./components/CategorySidebar.jsx";
import ProductCatalog from "./components/ProductCatalog.jsx";
import Footer from "./components/Footer.jsx";
import { products } from "./data/products.js";

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-330 px-10 max-[1020px]:px-6 max-[680px]:px-4.5">
        <CatalogHero />
        <div className="grid grid-cols-[218px_minmax(0,1fr)] gap-9 pt-10 max-[1020px]:grid-cols-[180px_minmax(0,1fr)] max-[1020px]:gap-6 max-[680px]:grid-cols-1 max-[680px]:gap-6 max-[680px]:pt-6">
          <CategorySidebar products={products} />
          <ProductCatalog products={products} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
