import React from 'react';
import { Bus } from '../types';
import { StarIcon } from './IconComponents';

interface SearchResultsProps {
    buses: Bus[];
    onSelectBus: (bus: Bus) => void;
    isLoading: boolean;
}

const SearchResults: React.FC<SearchResultsProps> = ({ buses, onSelectBus, isLoading }) => {

    if (isLoading) {
        return (
            <div className="text-center py-10">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto"></div>
                <p className="mt-4 text-lg text-gray-600">Turimo gushakisha ingendo nziza kuri wowe...</p>
            </div>
        );
    }
    
    if (!isLoading && buses.length === 0) {
        return <div className="text-center py-10 text-gray-500 bg-white rounded-lg shadow-md">Nta bisi ibonetse kuri uru rugendo.</div>;
    }

    const renderRating = (rating: number) => {
        return (
            <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className={`h-5 w-5 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} filled={i < rating} />
                ))}
                <span className="ml-2 text-gray-600">{rating.toFixed(1)}</span>
            </div>
        );
    };

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Bisi Zibonetse</h2>
            {buses.map((bus) => (
                <div key={bus.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center transition-transform transform hover:scale-105 hover:shadow-xl">
                    <div className="flex-1 mb-4 md:mb-0">
                        <h3 className="text-xl font-bold">{bus.company}</h3>
                        <p className="text-sm text-gray-500">{bus.busType}</p>
                        <div className="flex items-center space-x-4 mt-2">
                            <div>
                                <p className="font-semibold text-lg">{bus.departureTime}</p>
                                <p className="text-sm text-gray-500">Igihaguruka</p>
                            </div>
                            <div className="text-center text-gray-500">
                                <p className="text-sm">{bus.duration}</p>
                                <div className="border-t border-gray-300 my-1"></div>
                            </div>
                            <div>
                                <p className="font-semibold text-lg">{bus.arrivalTime}</p>
                                <p className="text-sm text-gray-500">Igera</p>
                            </div>
                        </div>
                        <div className="mt-2">{renderRating(bus.rating)}</div>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="text-2xl font-bold text-orange-600">{bus.price.toLocaleString()} RWF</p>
                        <p className="text-sm text-gray-500">{bus.availableSeats} imyanya isigaye</p>
                        <button onClick={() => onSelectBus(bus)} className="mt-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300">
                            Fata Itike
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;