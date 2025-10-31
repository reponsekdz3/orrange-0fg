import React from 'react';
import { Company } from '../types';

interface CompanyDetailsModalProps {
    company: Company;
    onClose: () => void;
}

const CompanyDetailsModal: React.FC<CompanyDetailsModalProps> = ({ company, onClose }) => {
    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-lg shadow-2xl max-w-2xl w-full transform transition-all duration-300 scale-95 animate-modal-in"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
                <div className="relative">
                    <img src={company.imageUrl} alt={company.name} className="w-full h-56 object-cover rounded-t-lg"/>
                    <button onClick={onClose} className="absolute top-4 right-4 bg-white bg-opacity-70 rounded-full p-2 text-gray-800 hover:bg-opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="absolute -bottom-10 left-8 bg-white p-2 rounded-full shadow-lg">
                        <img src={company.logoUrl} alt={`${company.name} logo`} className="h-16 w-16 object-contain rounded-full" />
                    </div>
                </div>

                <div className="p-8 pt-12">
                    <h2 className="text-3xl font-bold text-gray-800">{company.name}</h2>
                    <p className="text-yellow-500 my-2">Amanota: {company.rating}/5</p>
                    <p className="text-gray-600 mt-4">{company.description}</p>
                    
                    <div className="mt-6 border-t pt-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Ingendo Zikunzwe</h3>
                        <div className="flex flex-wrap gap-2">
                            {company.popularRoutes.map(route => (
                                <span key={route} className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">{route}</span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 border-t pt-6">
                         <h3 className="text-lg font-semibold text-gray-700 mb-2">Twandikire</h3>
                         <p className="text-gray-600">Telefone: {company.contact.phone}</p>
                         <p className="text-gray-600">Email: {company.contact.email}</p>
                    </div>
                </div>
            </div>
             <style>{`
                @keyframes modal-in {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-modal-in {
                    animation: modal-in 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default CompanyDetailsModal;
