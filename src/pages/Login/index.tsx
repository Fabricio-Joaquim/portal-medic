import { RiLockPasswordLine, RiUser3Fill } from "react-icons/ri";
import { useFormLogin } from './hookForm/useFormLogin'
import { InputText } from '../../components/TextInput'
import { Button } from '../../components/Button'

const Login = () => {
    
    const { control, onSubmit } = useFormLogin()

    return (
        <div className="w-4/12 flex flex-col backdrop-blur-xl backdrop:blur-lg bg-white p-20 rounded-xl">
            <h1 className="text-3xl font-bold text-center mb-10">Sign In</h1>
            <form onSubmit={onSubmit} className=''>
                <InputText name="username" label="Email" control={control} placeholder='user12345' Icon={RiUser3Fill} />
                <InputText name="password" label="Password" control={control} type='password' placeholder='*****' Icon={RiLockPasswordLine}  />
                <Button>Sign In</Button>
            </form>
        </div>
    )
}

export default Login