import React, { useState } from 'react';
import Login from './auth/Login';
import SignUp from './auth/Signup';

type TabType = 'login' | 'signup';

const Auth: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>('login');

    const handleTabClick = (tab: TabType) => {
        setActiveTab(tab);
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-6">
                <ul className="flex">
                    <li className={`-mb-px mr-1 ${activeTab === 'login' ? 'border-b-2 border-blue-500' : 'border-b-2 border-transparent'}`}>
                        <button className={`bg-white inline-block py-2 px-4 font-semibold ${activeTab === 'login' ? 'text-blue-500' : 'text-gray-500'} hover:text-blue-500 focus:outline-none`}
                            onClick={() => handleTabClick('login')}>
                            Login
                        </button>
                    </li>
                    <li className={`-mb-px mr-1 ${activeTab === 'signup' ? 'border-b-2 border-blue-500' : 'border-b-2 border-transparent'}`}>
                        <button className={`bg-white inline-block py-2 px-4 font-semibold ${activeTab === 'signup' ? 'text-blue-500' : 'text-gray-500'} hover:text-blue-500 focus:outline-none`}
                            onClick={() => handleTabClick('signup')}>
                            Sign Up
                        </button>
                    </li>
                </ul>
            </div>
            {activeTab === 'login' && <Login />}
            {activeTab === 'signup' && <SignUp />}
        </div>
    )
}

export default Auth;
