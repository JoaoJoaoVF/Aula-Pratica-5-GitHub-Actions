import React, { useState, useEffect } from 'react';
import SideBarDashboard from '../components/layout/SideBarDashboard';
import HeaderDashboard from '../components/layout/HeaderDashboard';

export default function Dashboard(props: {
    children: React.ReactNode
}) {


    return <div className='h-full'>

        <div className="flex flex-col w-full overflow-x-hidden">
            <HeaderDashboard />
            <div className="flex">
                <SideBarDashboard />
                <main className="w-full">
                    {props.children}
                </main>
            </div>
        </div>

    </div >
}

