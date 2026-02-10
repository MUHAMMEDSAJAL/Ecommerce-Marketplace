import Image from "next/image";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ id, name, price, image }: Product) {
  return (
    <Link
      href={`/products/${id}`}
      className="group rounded-xl border p-4 hover:shadow-md transition"
    >
      <div className="relative h-48 w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-900">{name}</h3>
        <p className="mt-1 text-lg font-semibold text-blue-600">₹{price}</p>
      </div>
    </Link>
  );
}
