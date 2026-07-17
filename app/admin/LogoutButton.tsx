"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { createClient } from "../lib/supabase/client";

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      style={{ color: "#ffffff" }}
      className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition hover:bg-white/10"
    >
      <LogOut size={18} style={{ color: "#ffffff" }} />
      <span style={{ color: "#ffffff" }}>Log out</span>
    </button>
  );
}
