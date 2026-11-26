function CatalogHero() {
  return (
    <section
      aria-labelledby="catalog-heading"
      className="grid grid-cols-2 items-center gap-10 border-b border-line pt-10.5 pb-9.5 max-[1020px]:gap-6 max-[680px]:grid-cols-1 max-[680px]:gap-5 max-[680px]:pt-8 max-[680px]:pb-6"
    >
      <div className="max-w-145">
        <h1
          id="catalog-heading"
          className="mb-5 font-display text-[clamp(42px,6vw,86px)] leading-[0.99] font-normal tracking-[-0.035em] max-[680px]:mb-3 max-[680px]:text-[clamp(40px,12vw,65px)]"
        >
          Good tools for
          <br />
          good ideas.
        </h1>
        <p className="max-w-[49ch] text-[17px] leading-[1.6] text-muted max-[680px]:text-[15px]">
          Find e-books, templates, UI kits, code and creative assets that help
          you learn, design and build your next project.
        </p>
      </div>
      <img
        src="/images/catalog-hero.svg"
        alt="Examples of a digital book, creator interface kit and JavaScript source code"
        width="710"
        height="370"
        className="w-full rounded-md"
      />
    </section>
  );
}

export default CatalogHero;
