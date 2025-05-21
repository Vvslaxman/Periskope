// app/forgot-password.tsx
"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {redirectTo:'http://localhost:3000/reset-password'});
      if (error) throw error;
      router.push("/check-email"); // Redirect after sending reset link
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-semibold text-gray-700" htmlFor="email">
            Enter your email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-black rounded"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send reset link"}
        </button>
      </form>

      {error && <p className="text-red-500 text-center mt-3">{error}</p>}
    </div>
  );
}
