"use client";

import React from "react";
import { useFetch } from "@/lib/useFetch";

function ClearancePage({ params }) {
  let resolveParams = params;
  if (typeof params?.then === "function") {
    resolveParams = React.use(params);
  }

  const { id } = resolveParams;

  const { data, isPending, error } = useFetch("/api.json");

  if (isPending) {
    return <span className="loading loading-dots loading-xl"></span>;
  }

  if (error) {
    return <p>Xatolik yuz berdi + {error.message}</p>;
  }

  const prod = data?.products?.find((p) => String(p.id) === String(id));

  if (!prod) {
    if (!data || !data.products) {
      return <p>API ma'lumotlari yuklanmadi yoki noto'g'ri tuzilgan.</p>;
    }
    return <p>Mahsulot topilmadi (Qidirilgan ID: {id})</p>;
  }

  return (
    <div>
      <h1>{prod.title}</h1>
    </div>
  );
}

export default ClearancePage;
