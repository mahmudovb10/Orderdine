// src/app/dashboard/layout.jsx
// Server Komponenti (bu faylda hooklar yo'q)

import ProtectedRoute from "@/lib/ProtectedRoute";

export default function DashboardLayout({ children }) {
  return (
    <ProtectedRoute>
      <div className="dashboard-wrapper p-4">
        {/* Dashboardga tegishli UI elementlari (agar mavjud bo'lsa) */}
        {children}
      </div>
    </ProtectedRoute>
  );
}
