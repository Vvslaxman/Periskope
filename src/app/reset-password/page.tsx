"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { error } = await supabase.auth.updateUser ({ password: newPassword });
      if (error) throw error;
      router.push("/login"); // Redirect after successful password reset
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="glass w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-4 text-black">Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-700" htmlFor="newPassword">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="w-full p-2 border rounded-md bg-transparent border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-black rounded transition duration-200"
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        {error && <p className="text-red-500 text-center mt-3">{error}</p>}
      </div>
    </div>
  );
}
