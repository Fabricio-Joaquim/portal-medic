import { RiLogoutBoxFill } from 'react-icons/ri'
import { ViewModelSideBar } from './useModel'
import { Link } from 'react-router-dom'

export const MobileBar = () => {

    const { LISTSIDE, handlerLogout } = ViewModelSideBar()

    return (
        <aside className="fixed bottom-0 z-50 lg:hidden justify-center w-screen bg-white border border-gray-100 rounded-lg dark:bg-gray-700 dark:border-gray-600">
            <div className="sticky bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="max-w-lg mx-auto flex justify-around">
                    <button onClick={() => handlerLogout()} className="flex flex-col items-center justify-center px-2 py-3 text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                        <RiLogoutBoxFill size={30} />
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 whitespace-nowrap">
                            Logout
                        </span>
                    </button>
                    {
                        LISTSIDE.map((item) => (
                            <Link key={item.name} to={item.link} className="flex flex-col items-center justify-center px-2 py-3 text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                                {item.icon}
                                <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 whitespace-nowrap">
                                    {item.name}
                                </span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </aside>
    )
}