"use client";

import { useFetch } from "@/lib/useFetch";

export default function Home() {
  const { data, isPending, error } = useFetch("/api.json");
  return (
    <div>
      <h1>Commerce</h1>
      {data?.products.map((prod) => (
        <div key={prod.id}>
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <img className="prodImage" src={prod.thumbnail} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{prod.title}</h2>
              <p>{prod.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">
                  Sotib olish {prod.price} So'm
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
