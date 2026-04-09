"use client";

import { useEffect, useState } from "react";
import { api } from "../lib/api";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [users, setUsers] = useState<any[]>([]);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      window.location.replace("/login");
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);

    fetchUsers().finally(() => {
      setIsChecking(false);
    });
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await api.get("/users");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
      localStorage.removeItem("user");
      window.location.replace("/login");
    }
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
    } catch (err) {
      console.error(err);
    }

    localStorage.removeItem("user");
    window.location.replace("/login");
  };

  if (isChecking) {
    return null; 
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
            {user && (
              <p className="text-xl text-gray-600 mt-2">
                Welcome back, <span className="font-semibold">{user.name}</span> 👋
              </p>
            )}
          </div>

          <button
            onClick={logout}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-all"
          >
            Logout
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow p-8">
          <h2 className="text-2xl font-semibold mb-6">All Users</h2>
          <ul className="space-y-3">
            {users.map((u) => (
              <li key={u._id} className="p-4 bg-gray-50 rounded-2xl flex justify-between">
                <div>
                  <p className="font-medium">{u.name}</p>
                  <p className="text-gray-500 text-sm">{u.email}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}