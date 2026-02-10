import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded p-4">
            <h2 className="font-semibold">{product.name}</h2>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
