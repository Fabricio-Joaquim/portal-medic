import { MobileBar } from "@components/SideBar/MobileBar"
import { Sidebar } from "@components/SideBar"

export const LayerPrivate = ({ children }: any) => {
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
