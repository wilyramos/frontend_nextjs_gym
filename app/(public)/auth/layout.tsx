import { getCurrentUser } from '@/src/auth/currentUser'
import { redirect } from 'next/navigation';
import React from 'react'

export default async function layout({ children }: { children: React.ReactNode }) {


    const user = await getCurrentUser();
    if (user) {
        redirect('/profile')
    }

    return (


        <div className=''>

            <section>
                {children}
            </section>
        </div>
    )
}