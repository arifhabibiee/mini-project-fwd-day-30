# NexxaTech — Mini Project Day 30

## NexxaTech — Product Catalog

Mini Project Full Stack Web Development Batch 13 — Day 30,
dikembangkan dari Mini Project Day 26 (React Styling).
Menggunakan React, Vite, dan Tailwind CSS v4 dengan fokus
pengembangan pada API Integration.

## Current Status

Project masih dalam tahap pengembangan awal. Desain, struktur
komponen, dan data produk dari project sebelumnya dipertahankan
sebagai baseline untuk pengembangan integrasi API, pagination,
halaman detail produk, dan authentication.

## Features

- Product catalog dengan 12 produk dan 5 kategori.
- Reusable React components, Props, dan list rendering menggunakan `map()`.
- Product detail dialog dengan `useState`, callback props, dan elemen HTML `dialog`.
- Responsive layout untuk desktop, tablet, dan mobile.
- Search, category filters, Cart dan Login masih visual preview; tidak ada backend atau transaksi nyata.

## Getting started

Prasyarat: Node.js 20.19+ pada jalur 20.x, atau Node.js 22.12+ (disarankan 22 LTS yang kompatibel dengan Vite 7).

```powershell
npm.cmd ci
npm.cmd run dev
```

Buka alamat localhost yang ditampilkan Vite. `npm ci` menggunakan `package-lock.json` yang tersedia. Jalankan `npm.cmd run build` untuk memeriksa build produksi setelah pengujian. Jangan commit `node_modules` atau `dist`.

## Project structure

```text
public/images/            Product illustrations and brand assets
src/
  components/
                          Header, Footer and catalog components
  data/products.js        Product data
  App.jsx                 Page composition
  main.jsx                React entry point
  index.css               Tailwind theme and custom styles
```

## References

- https://react.dev/learn/passing-props-to-a-component
- https://react.dev/learn/rendering-lists
- https://react.dev/reference/react/useState
- https://tailwindcss.com/docs/installation/using-vite
- https://vite.dev/guide/
