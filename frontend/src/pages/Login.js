import { useState } from 'react'
import loginIcon from '../assest/signin.gif'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Login = () => {
    const [showPassword, setShowPassword ] = useState(false)
    return(
        <section id="login">
            <div className="mx-auto container p-4">
                <div className="bg-white p-5 w-full max-w-sm mx-auto">
                    <div className="w-20 h-20 mx-auto">
                        <img src={loginIcon} alt="login Icon" /> 
                    </div>

                    {/* Form */}
                    <form className='pt-6'>
                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-100 p-2 rounded-lg'>
                                <input type='email' placeholder='Enter email' className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>

                        <div className='my-2'>
                            <label>Password : </label>
                            <div className='bg-slate-100 p-2 flex rounded-lg'>
                                <input type={showPassword ? "text" : "password"} placeholder='Enter password' className='w-full h-full outline-none bg-transparent'/>

                                <div className='cursor-pointer text-xl' onClick={() => setShowPassword((preve) => !preve)}>
                                    <span>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash />
                                            ) :
                                            (
                                            <FaEye />
                                            )
                                        }
                                    </span>
                                </div>
                            </div>
                            <Link to={'/forgot-password'} className='block text-blue-500 py-2 font-semibold w-fit ml-auto hover:underline hover:text-blue-600'>
                                Forgot Password ?
                            </Link>
                        </div>

                        <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>
                    </form>
                    <p className='my-5 font-semibold'>Don't have a account ? <Link to={"/sign-up"} className='text-blue-500 font-semibold hover:underline hover:text-blue-600'>Sign up</Link></p>
                </div>
            </div>
        </section>
    )
}
export default Login