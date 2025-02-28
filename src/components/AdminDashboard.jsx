import React from "react";

import { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

export default function AdminDashboard() {
  const [activeTab] = useState("dashboard");

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Sales",
        data: [400, 320, 500, 700],
        borderColor: "#06b6d4",
        backgroundColor: "#06b6d4",
      },
    ],
  };

  const barData = {
    labels: ["User A", "User B", "User C"],
    datasets: [
      {
        label: "Purchases",
        data: [5, 9, 3],
        backgroundColor: ["#4ade80", "#facc15", "#f43f5e"],
      },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-5">
        <h1 className="text-2xl font-bold">GamerVault Admin</h1>
        <nav className="mt-5">
          <ul>
            <li
              className={`py-2 cursor-pointer ${
                activeTab === "dashboard" ? "text-cyan-400" : ""
              }} onClick={() => setActiveTab("dashboard")`}
            >
              Dashboard
            </li>
            <li
              className={`py-2 cursor-pointer ${
                activeTab === "users" ? "text-cyan-400" : ""
              }} onClick={() => setActiveTab("users")`}
            >
              Users
            </li>
            <li
              className={`py-2 cursor-pointer ${
                activeTab === "products" ? "text-cyan-400" : ""
              } onClick={() => setActiveTab("products")`}
            >
              Products
            </li>
            <li
              className={`py-2 cursor-pointer ${
                activeTab === "analytics" ? "text-cyan-400" : ""
              }} onClick={() => setActiveTab("analytics")`}
            >
              Analytics
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5">
        {activeTab === "dashboard" && (
          <section>
            <h2 className="text-xl font-bold mb-4">Sales Overview</h2>
            <div className="bg-white p-5 rounded-lg shadow">
              <Line data={lineData} />
            </div>
          </section>
        )}
        {activeTab === "analytics" && (
          <section>
            <h2 className="text-xl font-bold mb-4">User Purchases</h2>
            <div className="bg-white p-5 rounded-lg shadow">
              <Bar data={barData} />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
