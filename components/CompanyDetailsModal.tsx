
import React from 'react';
import { Company } from '../types';

interface CompanyDetailsModalProps {
    company: Company;
    onClose: () => void;
}

const CompanyDetailsModal: React.FC<CompanyDetailsModalProps> = ({ company, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full transform transition-all animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                        <img src={company.logoUrl} alt={`${company.name} logo`} className="h-12 w-12 object-contain rounded-full mr-4 border"/>
                        <div>
                            <h2 className="text-2xl font-bold">{company.name}</h2>
                             <p className="text-yellow-500">Amanota: {company.rating}/5</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="text-3xl text-gray-500 hover:text-gray-800">&times;</button>
                </div>
               
                <p className="text-gray-700 mb-4">{company.description}</p>
                <p className="mt-4 text-sm text-gray-500">Amakuru arambuye ku modoka zikoreshwa, inzira zikoreshwa, na serivisi zitangwa yashyirwa hano.</p>
                <div className="text-right mt-6">
                    <button onClick={onClose} className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                        Funga
                    </button>
                </div>
            </div>
              {/* FIX: Removed 'jsx' prop from style tag to fix TypeScript error. */}
              <style>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default CompanyDetailsModal;