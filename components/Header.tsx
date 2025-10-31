import React from 'react';

interface HeaderProps {
    onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-20">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-orange-600 cursor-pointer" onClick={() => onNavigate('home')}>
                    Orange Travel
                </div>
                <div className="hidden md:flex items-center space-x-6">
                    <button onClick={() => onNavigate('home')} className="text-gray-600 hover:text-orange-600 transition-colors duration-300">Ahabanza</button>
                    <button onClick={() => onNavigate('companies')} className="text-gray-600 hover:text-orange-600 transition-colors duration-300">Amakompanyi</button>
                    <button onClick={() => onNavigate('history')} className="text-gray-600 hover:text-orange-600 transition-colors duration-300">Ingendo Zanjye</button>
                    <button onClick={() => onNavigate('contact')} className="text-gray-600 hover:text-orange-600 transition-colors duration-300">Twandikire</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
