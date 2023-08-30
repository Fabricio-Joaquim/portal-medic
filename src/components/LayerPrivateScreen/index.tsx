import { Sidebar } from "@components/SideBar"

export const LayerPrivate = ({ children }: any) => {
    return (
        <div className="grid lg:grid-cols-dashboard lg:grid-rows-dashboard h-screen">
            <Sidebar />
            <div className="flex flex-col w-full max-w-full items-center justify-center">
                {children}
            </div>
        </div>
    )

}
