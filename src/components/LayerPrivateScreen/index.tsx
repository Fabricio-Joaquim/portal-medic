import { MobileBar } from "../SideBar/MobileBar"
import { Sidebar } from "../SideBar"
import React from "react"

export const LayerPrivate = ({ children }: React.PropsWithChildren) => {
    return (
        <div className="lg:grid flex lg:grid-cols-dashboard lg:grid-rows-dashboard h-screen">
            <Sidebar />
            <MobileBar />
            <div className="flex flex-col w-full items-center justify-normal lg:justify-center">
                {children}
            </div>
        </div>
    )
}
