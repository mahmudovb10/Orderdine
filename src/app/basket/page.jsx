"use client";

import { useGlobalContext } from "@/context/GlobalContext";

export default function BasketPage() {
  const { cart, cartTotal } = useGlobalContext();

  if (!cart || cart.length === 0) return <p>Savatcha bo‘sh</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Savatcha</h1>
      <div className="space-y-3">
        {cart.map((item) => (
          <div
            key={item.id}
            className="card p-4 bg-base-200 flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p>
                {item.price} so‘m x {item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-lg font-bold mt-4">Jami: {cartTotal} so‘m</p>
    </div>
  );
}
