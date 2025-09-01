"use client";

import { useSearchParams } from "next/navigation";

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Crear cuenta</h1>

        <form className="space-y-4">
          <input
            type="email"
            defaultValue={email}
            className="w-full border px-3 py-2 rounded"
            disabled
          />
          <input
            type="text"
            placeholder="Nombre"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded"
          >
            Registrarme
          </button>
        </form>
      </div>
    </div>
  );
}
