import { products } from "@/src/lib/products";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export default function ProductDetail({ params }: Props) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="mt-2">₹{product.price}</p>
      <p className="mt-4 text-gray-600">{product.description}</p>
    </main>
  );
}
