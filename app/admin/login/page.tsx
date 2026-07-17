"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/client"

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
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAF7] px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-lg border border-[#4A7C3A]/20 bg-white p-8 shadow-sm"
      >
        <h1 className="font-serif text-2xl text-[#2F5C2B]">Admin login</h1>
        <p className="mt-2 text-sm text-[#2B2B28]/70">
          Sign in to view contact submissions.
        </p>

        {error && (
          <p className="mt-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </p>
        )}

        <div className="mt-6">
          <label className="mb-2 block text-sm font-medium text-[#2B2B28]">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-[#4A7C3A]/40 bg-[#F8FAF7] px-4 py-3 text-sm text-[#2B2B28] outline-none focus:border-[#4A7C3A] focus:ring-2 focus:ring-[#4A7C3A]/15"
          />
        </div>

        <div className="mt-4">
          <label className="mb-2 block text-sm font-medium text-[#2B2B28]">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-[#4A7C3A]/40 bg-[#F8FAF7] px-4 py-3 text-sm text-[#2B2B28] outline-none focus:border-[#4A7C3A] focus:ring-2 focus:ring-[#4A7C3A]/15"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-md bg-[#2F5C2B] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#234420] disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </main>
  );
}