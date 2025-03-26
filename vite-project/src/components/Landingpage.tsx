import React from 'react';
import{Link} from"react-router-dom";
export const Landingpage:React.FC =() =>(
    <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-6">welcome to Task Manager</h1>
        <div className="space-x-4">
            <Link to="/signup">


            
            </Link>

        </div>
    </div>
)