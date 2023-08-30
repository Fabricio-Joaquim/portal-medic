import { BsGearFill, BsFillClipboard2PlusFill } from 'react-icons/bs';
import { useUserData } from '../../hooks/useUserData';
import { Link, useLocation } from 'react-router-dom';
import { RouterEnum } from '../../Enum/routerEnum';
import { FaClipboardList } from 'react-icons/fa';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { useState } from 'react';

const LISTSIDE = [
    {
        name: 'List Medication',
        link: RouterEnum.HOME,
        icon: <FaClipboardList size={30} />,
    },
    {
        name: 'Register Medication',
        link: RouterEnum.REGISTER_MEDICATION,
        icon: <BsFillClipboard2PlusFill size={30} />,
    },
];

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cleanTokenAction } = useUserData()
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const location = useLocation().pathname;

    return (
        <aside
            className={`flex flex-col w-14 items-center ${isOpen ? 'w-14' : 'w-52'
                } overflow-hidden transition-max-height duration-500 ease-in-out text-gray-400 bg-gray-900 rounded`}
        >
            <button
                className="flex gap-2 items-center w-full px-3 mt-3"
                onClick={toggleSidebar}
            >
                <BsGearFill size={30} className="fixed" />
                <span className="text-sm ml-11 font-medium">Menu</span>
            </button>
            <div className="w-full px-2 border-t border-gray-700 mt-3">
                {LISTSIDE.map((item) => (
                    <Link
                        key={item.name}
                        to={item.link}
                        className={`flex items-center w-full px-3 mt-3 h-12 pl-1 pr-3 rounded
      ${location === item.link ? "text-gray-200 bg-gray-700 rounded hover:bg-gray-600 hover:text-gray-300" : "hover:bg-gray-700 hover:text-gray-300"}`}
                    >
                        <div className="flex items-center">
                            {item.icon}
                            <span className="ml-5 text-sm font-medium whitespace-nowrap">
                                {item.name}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
            <Link
                to="/"
                onClick={() => cleanTokenAction()}
                className="flex items-center w-full px-3 h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
            >
                <RiLogoutBoxFill size={30} className="fixed" />
                <span className="ml-11 text-sm font-medium">Logout</span>
            </Link>
        </aside>
    );
};

export { Sidebar };
