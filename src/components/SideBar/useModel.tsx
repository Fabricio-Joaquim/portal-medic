import { BsFillClipboard2PlusFill } from 'react-icons/bs';
import { RouterEnum } from "../../Enum/routerEnum";
import { FaClipboardList } from 'react-icons/fa';
import { useUserData } from '@hooks/useUserData';
import { useAuth } from '@hooks/useAuth';

const ViewModelSideBar = () => {
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

    const { cleanTokenAction } = useUserData()
    const { cleanAuthAction } = useAuth()
    const handlerLogout = () => {
        cleanTokenAction();
        cleanAuthAction()
    }

    return {
        LISTSIDE,
        handlerLogout

    }
}

export { ViewModelSideBar }