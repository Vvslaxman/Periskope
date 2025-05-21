"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";

export function AuthForm({ isSignUp }: { isSignUp: boolean }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLoginOrSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({ email: email, password: password, options: {
    emailRedirectTo: 'https://yshazdlnxxbafruifxrl.supabase.co/auth/v1/callback',
  }, });

        if (error) throw error;

        setMessage("✅ Please check your email for the confirmation link.");
        // Optional: Wait 3 seconds and redirect to login page
        setTimeout(() => {
          router.push("/");
        }, 3000);
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password,});
        if (error) throw error;

        router.push("/");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (provider: "github" | "google") => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({ provider });
      if (error) throw error;
      // Redirect handled automatically by Supabase OAuth
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleLoginOrSignup} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700" htmlFor="email">
            Email
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

        <div>
          <label className="block text-sm font-semibold text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded"
          disabled={loading}
        >
          {loading
            ? isSignUp
              ? "Signing up..."
              : "Logging in..."
            : isSignUp
              ? "Sign Up"
              : "Login"}
        </button>

        {!isSignUp && (
          <div className="mt-3">
            <p className="text-sm text-gray-600">Or</p>
            <button
              onClick={() => handleSocialLogin("github")}
              type="button"
              className="w-full py-2 px-4 bg-gray-800 hover:bg-black text-white rounded mt-3"
            >
              Login with GitHub
            </button>
            <button
              onClick={() => handleSocialLogin("google")}
              type="button"
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded mt-3"
            >
              Login with Google
            </button>
          </div>
        )}
      </form>

      <div className="text-center">
        {isSignUp ? (
          <p>
            Already have an account?{" "}
            <button
              onClick={() => router.push("/")}
              className="text-blue-500 hover:underline"
            >
              Login
            </button>
          </p>
        ) : (
          <>
            <p>
              Don’t have an account?{" "}
              <button
                onClick={() => router.push("/signup")}
                className="text-blue-500 hover:underline"
              >
                Sign up
              </button>
            </p>
            <p className="mt-3">
              <button
                onClick={() => router.push("/forgot-password")}
                className="text-blue-500 hover:underline"
              >
                Forgot your password?
              </button>
            </p>
          </>
        )}
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}
      {message && <p className="text-green-600 text-center">{message}</p>}
    </div>
  );
}
