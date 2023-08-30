import { Sidebar } from "@components/SideBar"
import React from 'react'

export const LayerPrivate = ({ children }: any) => {
    return (
        <div className="grid grid-cols-dashboard grid-rows-dashboard h-screen">
            <Sidebar />
            <div className="flex flex-col w-full max-w-full items-center justify-center">
                {children}
            </div>
        </div>
    )

}
