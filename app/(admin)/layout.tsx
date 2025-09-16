import AdminSidebar from '@/src/components/layout/AdminSidebar'
import React from 'react'
import { verifySession } from '@/src/auth/dal'
import { redirect } from 'next/navigation';


export default async function AdminLayout({ children }: { children: React.ReactNode }) {


    const { user } = await verifySession()
    if ( user.role !== 'ADMIN' ) {
        redirect("/profile");
    }

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
