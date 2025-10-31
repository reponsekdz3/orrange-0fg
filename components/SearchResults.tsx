import React from 'react';
import { Bus } from '../types';

interface SearchResultsProps {
    buses: Bus[];
    onSelectBus: (bus: Bus) => void;
    isLoading: boolean;
}

const SearchResults: React.FC<SearchResultsProps> = ({ buses, onSelectBus, isLoading }) => {

    const LoadingSkeleton = () => (
        <div className="space-y-4">
            {[...Array(3)].map((_, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md animate-pulse">
                    <div className="flex justify-between items-center">
                        <div className="w-1/4 h-8 bg-gray-200 rounded"></div>
                        <div className="w-1/4 h-8 bg-gray-200 rounded"></div>
                        <div className="w-1/6 h-10 bg-gray-300 rounded"></div>
                    </div>
                </div>
            ))}
        </div>
    );


    if (isLoading) {
        return (
             <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Turimo Gushakisha Ingendo...</h2>
                <LoadingSkeleton />
            </div>
        );
    }
    
    if (!buses.length) {
         return (
             <div className="bg-white p-6 rounded-2xl shadow-lg mt-8 text-center">
                <h2 className="text-xl font-bold text-gray-700">Nta Ngendo Zibonetse</h2>
                <p className="text-gray-500 mt-2">Hindura ibyo washatse maze wongere ugerageze.</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-2xl shadow-lg mt-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Ibisubizo Byabonetse</h2>
            <div className="space-y-4">
                {buses.map((bus) => (
                    <div key={bus.id} className="border border-gray-200 p-4 rounded-lg hover:shadow-lg hover:border-orange-400 transition-all duration-300">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
                            <div className="md:col-span-1 flex items-center space-x-3">
                                <img src={bus.companyLogoUrl || `https://ui-avatars.com/api/?name=${bus.company}&background=random`} alt={bus.company} className="h-10 w-10 object-contain rounded-full" />
                                <div>
                                    <p className="font-bold text-gray-800">{bus.company}</p>
                                    <p className="text-sm text-yellow-600">★ {bus.rating || 'N/A'}</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-semibold">{bus.departureTime}</p>
                                <p className="text-sm text-gray-500">Guhaguruka</p>
                            </div>
                            <div className="text-center">
                                <p className="text-sm text-gray-500">{bus.duration}</p>
                                <div className="w-full bg-gray-200 rounded-full h-1 my-1">
                                    <div className="bg-orange-500 h-1 rounded-full" style={{ width: '100%' }}></div>
                                </div>
                                <p className="text-sm text-gray-500">Igihe</p>
                            </div>
                            <div className="text-center">
                                <p className="text-lg font-semibold">{bus.arrivalTime}</p>
                                <p className="text-sm text-gray-500">Kugerayo</p>
                            </div>
                            <div className="text-center md:text-right">
                                <p className="text-xl font-bold text-orange-600">{bus.price.toLocaleString()} RWF</p>
                                <button
                                    onClick={() => onSelectBus(bus)}
                                    className="mt-1 bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 transition-all duration-300 text-sm"
                                >
                                    Hitamo
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
