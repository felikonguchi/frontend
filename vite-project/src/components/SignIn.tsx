import React,{useState} from"react";
import{ Link, useNavigate} from "react-router-dom";
import { LoginUser } from "../api";
import {AxiosError} from "axios";

interface SignInProps{
    onLogin:(token: string) => void
    signupMessage: string | null;

}

export const SignIn:React.FC<SignInProps> = ({onLogin, signupMessage}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handelsubmit = async (e: React.FormEvent) => {
        e.preventDefault();
            try {
                const response = await LoginUser({ username, password });
                if (response?.data?.token) {
                    navigate("/dashboard");
                }
            } catch (err) {
                if (err instanceof AxiosError) {
                    const axiosError = err as AxiosError<{msg?: string}>
                    setError(axiosError.response?.data?.message || "Registraction failed");
                }
            }
        }
        
        return (
            <div className="flex items-center justify-center min-h-screen">
                <form onSubmit={handelsubmit} className="bg-white p-6 rounded shadow-md w-96 ">
                    <h2 className="text-2xl font-bold mb-4">Sign up To Task</h2>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 mb-4 border rounded"
                        id="username"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 mb-4 border rounded"
                        id="password"
                    />
                    {error && <p className="text-red-500">{error}</p>}
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-b">
                        Sign Up
                        </button>
                </form>
                <div className='mt-4 '>
                    <Link to="/" className='text-blue-500 hover:underline'>Back to Landing Page</Link>
                    <br />
                    <Link to="/signin" className='text-blue-500 hover:underline'>Already have an account? Sign In</Link>
                </div>
            </div>
    );
}
        
        