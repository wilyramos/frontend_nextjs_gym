import AdminSidebar from '@/src/components/layout/AdminSidebar'
import React from 'react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen">
            {/* Sidebar fijo */}
            <div className='hidden md:block'>
                <AdminSidebar />
            </div>

            {/* Contenido principal */}
            <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
                {children}
            </main>
        </div>
    )
}
