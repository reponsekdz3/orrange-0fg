
import React, { useState, useMemo } from 'react';
import { BUS_COMPANIES } from '../constants';
import CompanyDetailsModal from './CompanyDetailsModal';
import { Company } from '../types';

const CompaniesPage = () => {
    const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCompanies = useMemo(() => 
        BUS_COMPANIES.filter(company => 
            company.name.toLowerCase().includes(searchQuery.toLowerCase())
        ), [searchQuery]);
    
    return (
        <div className="container mx-auto py-8 px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold mb-4 text-gray-800">Amasosiyete y'Ingendo Dukorana</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Buri sosiyete tuyihitamo hashingiwe ku bwizere, umutekano, na serivisi nziza iha abakiliya.</p>
                <div className="mt-8 max-w-lg mx-auto">
                     <input 
                        type="text"
                        placeholder="Shakisha isosiyete..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                     />
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCompanies.map(company => (
                    <div 
                        key={company.name} 
                        className="relative bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group overflow-hidden"
                        onClick={() => setSelectedCompany(company)}
                    >
                        <img src={company.imageUrl} alt={company.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                             <div className="bg-white p-2 rounded-full shadow-lg inline-block mb-4">
                                <img src={company.logoUrl} alt={`${company.name} logo`} className="h-10 w-10 object-contain rounded-full" />
                            </div>
                            <h3 className="text-2xl font-bold text-white shadow-text">{company.name}</h3>
                            <p className="text-yellow-300 my-1 shadow-text">Amanota: {company.rating}/5</p>
                        </div>
                    </div>
                ))}
            </div>
             {filteredCompanies.length === 0 && (
                <div className="text-center py-16 text-gray-500">
                    <p>Nta sosiyete ibonetse ijyanye n'ibyo washatse.</p>
                </div>
            )}
            {selectedCompany && (
                <CompanyDetailsModal 
                    company={selectedCompany} 
                    onClose={() => setSelectedCompany(null)}
                />
            )}
             {/* FIX: Removed 'jsx' prop from style tag to fix TypeScript error. */}
             <style>{`
                .shadow-text {
                    text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
                }
            `}</style>
        </div>
    );
};

export default CompaniesPage;