import React from 'react'
import Navbar from '@/src/components/common/Navbar'


export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-gray-50 min-h-screen '>
            <Navbar />
            {children}
        </div>
    )
}