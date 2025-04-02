import React from "react";
import { Link } from "react-router-dom";

export const Landingpage: React.FC = () => (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-6">Welcome to Task Manager</h1>
        <p className="text-lg mb-8">
            We help you organize your tasks efficiently.
        </p>
        <div className="space-x-4">
            <Link to="/signup">
                <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                    Sign Up
                </button>
            </Link>
            <Link to="/signin"> {/* Added the missing to prop */}
                <button className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600">
                    Sign In
                </button>
            </Link>
        </div>
    </div>
);