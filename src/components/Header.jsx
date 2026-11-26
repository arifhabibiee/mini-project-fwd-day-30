function Header() {
  return (
    <header id="top" className="border-b border-line bg-paper">
      <div className="flex w-full items-center justify-between gap-3 px-10 py-3 max-[900px]:px-6 max-[600px]:px-4.5 max-[360px]:px-2.5">
        <a href="#top" className="inline-flex shrink-0 items-center gap-2 max-[600px]:gap-1.5" aria-label="NexxaTech, kembali ke atas">
          <img src="/images/logo-nexxatech.png" alt="" className="w-8 shrink-0 max-[600px]:w-7.25 max-[360px]:w-6.5" width="32" height="26" />
          <img src="/images/wordmark-nexxatech.png" alt="NexxaTech" className="w-27 shrink-0 max-[600px]:w-24.75 max-[360px]:w-22.5" width="108" height="16" />
        </a>

        <nav aria-label="Navigasi utama">
          <ul className="flex items-center gap-8 max-[900px]:gap-4 max-[600px]:gap-3.5 max-[360px]:gap-2">
            <li><a href="#products" aria-current="page" className="text-sm font-medium text-brand underline underline-offset-5 max-[600px]:text-[13px]">Catalog</a></li>
            <li className="max-[600px]:hidden"><a href="#categories" className="text-sm font-medium text-muted hover:text-brand focus-visible:text-brand">Categories</a></li>
            <li className="max-[600px]:hidden"><span className="text-sm font-medium text-muted" title="Demo visual; cart belum tersedia">Cart</span></li>
            <li><span className="inline-block rounded-md bg-brand px-6 py-2.5 transition-colors hover:bg-blue-800 text-sm font-bold leading-5 text-white max-[600px]:px-4 max-[600px]:py-2.25 max-[360px]:px-2.5" title="Demo visual; login belum tersedia">Login</span></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
