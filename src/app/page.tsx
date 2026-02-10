import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-6 text-3xl font-bold">Featured Products</h1>
      <ProductGrid products={products} />
    </main>
  );
}
