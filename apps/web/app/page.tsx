"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setIsLoggedIn(true);
      router.push("/dashboard");
    } else {
      setIsLoggedIn(false);
    }

    setChecking(false);
  }, [router]);

  if (checking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navbar */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
              N
            </div>
            <h1 className="text-2xl font-bold text-gray-900">NestNext</h1>
          </div>

          <div className="flex gap-4">
            <Link
              href="/login"
              className="px-6 py-2.5 text-gray-700 hover:text-gray-900 font-medium transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl transition-all active:scale-95"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-8 pt-24 pb-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-6">
            Simple. Secure.<br />
            Full-Stack Authentication
          </h1>

          <p className="text-2xl text-gray-600 mb-10">
            Built with Next.js + NestJS + MongoDB.<br />
            Clean, modern, and production-ready.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-2xl hover:brightness-105 transition-all active:scale-[0.98]"
            >
              Create Free Account
            </Link>

            <Link
              href="/login"
              className="px-10 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 text-lg font-semibold rounded-2xl transition-all"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">
            Why Choose NestNext?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Secure Authentication",
                desc: "JWT + HTTP-only cookies. Protected routes with middleware.",
              },
              {
                title: "Beautiful UI",
                desc: "Modern Tailwind design with smooth animations.",
              },
              {
                title: "Full Stack Ready",
                desc: "Next.js 15 + NestJS + MongoDB. Ready for production.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-3xl hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                  {i === 0 ? "🔒" : i === 1 ? "🎨" : "⚡"}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <p>© 2026 NestNext Demo. Built for learning and production.</p>
        </div>
      </footer>
    </div>
  );
}