// src/lib/ProtectedRoute.jsx
"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useGlobalContext();
  const router = useRouter();

  useEffect(() => {
    // 🔥 Asosiy tekshiruv: loading tugagan bo'lishi va user bo'lmasligi
    if (!loading && user === null) {
      console.log(
        "ProtectedRoute: User topilmadi, /login ga yo'naltirilmoqda."
      );
      router.replace("/login");
    }

    // Bu mantiq faqat boshlang'ich yuklanishda ishga tushishi kerak,
    // shuning uchun barcha bog'liqliklar (dependencies) aniq ko'rsatilgan.
  }, [user, loading, router]);

  // 1. Agar hali Auth holati aniqlanmagan bo'lsa (Loading...)
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl text-gray-500">
        Authentifikatsiya tekshirilmoqda...
      </div>
    );
  }

  // 2. Agar foydalanuvchi mavjud bo'lsa
  if (user) {
    return children;
  }

  // 3. Agar loading false va user null bo'lsa, useEffect uni allaqachon redirect qilgan.
  // Bu yerda hech narsa qaytarmaymiz (yoki juda yengil div):
  return null;
};

export default ProtectedRoute;
