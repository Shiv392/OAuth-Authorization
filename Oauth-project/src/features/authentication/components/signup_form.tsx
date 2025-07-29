import { useState } from "react"
import useSignup from "../hooks/useSignup";

const SignUpForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, SetPassword] = useState('');

    const {signup, loading, error} = useSignup();

    const register_submit= async(event : any)=>{
      event.preventDefault();
      const response = await signup({name : name, password : password, email : email});
      console.log('signup response----->',response);
      console.log('signup error--->',error);
    }

    return (
        <div>
            <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form onSubmit={()=> register_submit(event)}>
                            <div className="flex flex-col justify-center items-start">
                                <label className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <div className="mt-1 w-full">
                                    <input 
                                    value = {name}
                                    onChange={(e)=> setName(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" autoComplete="username" type="text" name="username" id="username" />
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col justify-center items-start">
                                <label className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1 w-full">
                                    <input
                                     value = {email}
                                     onChange={(e)=> setEmail(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  autoComplete="email" type="email" name="email" id="email" />
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col justify-center items-start">
                                <label className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1 w-full">
                                    <input 
                                    value = {password}
                                    onChange={(e)=> SetPassword(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  autoComplete="current-password" type="password" name="password" id="password" />
                                </div>
                            </div>

                            <div className="mt-6">
                                <button 
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default SignUpForm