import ProtectedRoute from "@/lib/ProtectedRoute";

export default function DashboardLayout({ children }) {
  return (
    <ProtectedRoute>
      <div className="dashboard-wrapper p-4">{children}</div>
    </ProtectedRoute>
  );
}
