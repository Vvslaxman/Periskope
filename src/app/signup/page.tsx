"use client";

import { AuthForm } from "../../components/AuthForm";

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="glass w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-4 text-black">Create an Account</h1>
        <AuthForm isSignUp={true} />
      </div>
    </div>
  );
}
