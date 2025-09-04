import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Header */}
            <header className="bg-amber-300 text-black p-4 shadow-md">
                <h1 className="text-xl font-bold">GoGYM</h1>
            </header>

            {/* Main Content */}
            <main className="flex-1 container mx-auto p-6 text-gray-800">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-black text-gray-300 text-center py-3">
                © {new Date().getFullYear()} Gym System. All rights reserved.
            </footer>
        </div>
    );
}
