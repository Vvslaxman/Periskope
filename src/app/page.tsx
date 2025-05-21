"use client";

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { AuthForm } from "../components/AuthForm";

export default function Home() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to My App</h1>
        {session ? (
          <>
            <p className="mb-4 text-gray-700">You are logged in!</p>
            <button
              onClick={handleLogout}
              className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded  transition duration-200"
            >
              Logout
            </button>
          </>
        ) : (
          <AuthForm isSignUp={false} /> // Show login form initially
        )}
      </div>
    </div>
  );
}
