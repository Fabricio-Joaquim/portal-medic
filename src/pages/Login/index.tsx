import { RiLockPasswordLine, RiUser3Fill } from "react-icons/ri";
import { useFormLogin } from './viewModel/useFormLogin'
import { InputText } from '../../components/TextInput'
import { Button } from '../../components/Button'

const Login = () => {

    const { control, onSubmit } = useFormLogin()

    return (
        <div className="min-h-screen justify-center flex items-center bg-slate-600">
            <div className=" md:w-10/12 lg:w-4/12 flex flex-col backdrop-blur-xl backdrop:blur-lg bg-white dark:bg-slate-500 p-20 rounded-xl">
                <h1 className="text-3xl font-bold text-center mb-10 dark:text-white">Sign In</h1>
                <form onSubmit={onSubmit} className=''>
                    <InputText name="username" label="Username" control={control} placeholder='user12345' Icon={RiUser3Fill} />
                    <InputText name="password" label="Password" control={control} type='password' placeholder='*****' Icon={RiLockPasswordLine} />
                    <Button type="submit">Sign In</Button>
                </form>
            </div>
        </div>
    )
}

export default Login
