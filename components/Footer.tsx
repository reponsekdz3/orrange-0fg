import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white mt-auto">
            <div className="container mx-auto py-6 px-4 text-center">
                <p>&copy; {new Date().getFullYear()} Orange Travel. Uburenganzira bwose burasigasiriwe.</p>
                <p className="text-sm text-gray-400">Turi kumwe nawe mu ngendo zawe zose.</p>
            </div>
        </footer>
    );
};

export default Footer;