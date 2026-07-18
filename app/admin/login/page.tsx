"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Mail, Lock } from "lucide-react";
import { createClient } from "../../lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/admin");
    router.refresh();
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#1F2E20] via-[#2C4432] to-[#3F5D44] px-6">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#8FC15D]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#4A7C3A]/20 blur-3xl" />

      <div className="relative w-full max-w-md">
        {/* Brand mark */}
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
            <Image
              src="/logo.png"
              alt="OBLEC logo"
              fill
              className="rounded-full object-contain p-2"
            />
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            OBLEC
          </p>
          <h1 className="mt-1 font-serif text-3xl text-white">Admin login</h1>
          <p className="mt-2 text-sm text-white/60">
            Sign in to view contact submissions
          </p>
        </div>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/95 p-8 shadow-2xl shadow-black/20 backdrop-blur"
        >
          {error && (
            <p className="mb-5 rounded-md border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-600">
              {error}
            </p>
          )}

          <div>
            <label className="mb-2 block text-sm font-medium text-[#2B2B28]">
              Email
            </label>
            <div className="relative">
              <Mail
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#2B2B28]/35"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-[#4A7C3A]/25 bg-[#F8FAF7] py-3 pl-11 pr-4 text-sm text-[#2B2B28] outline-none transition focus:border-[#4A7C3A] focus:bg-white focus:ring-2 focus:ring-[#4A7C3A]/15"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-[#2B2B28]">
              Password
            </label>
            <div className="relative">
              <Lock
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#2B2B28]/35"
              />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-lg border border-[#4A7C3A]/25 bg-[#F8FAF7] py-3 pl-11 pr-4 text-sm text-[#2B2B28] outline-none transition focus:border-[#4A7C3A] focus:bg-white focus:ring-2 focus:ring-[#4A7C3A]/15"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-7 w-full rounded-lg bg-[#2F5C2B] py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#234420] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-white/40">
          Old Basing &amp; Lychpit Environment Campaign
        </p>
      </div>
    </main>
  );
}
