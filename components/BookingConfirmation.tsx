import React from 'react';
import { BookingDetails } from '../types';

interface BookingConfirmationProps {
    details: BookingDetails;
    onNewSearch: () => void;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({ details, onNewSearch }) => {
    const { bus, seats, totalPrice } = details;

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg mt-8 max-w-2xl mx-auto">
            <div className="text-center">
                <div className="mx-auto bg-green-100 rounded-full h-16 w-16 flex items-center justify-center">
                    <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold mt-4 text-gray-800">Byakunze! Itike Yawe Yemejwe.</h2>
                <p className="text-gray-600 mt-2">Twakohereje amakuru y'ingenzi kuri email yawe. Urugendo rwiza!</p>
            </div>
            
            <div className="mt-8 border-t border-b py-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-700">Amakuru y'Urugendo</h3>
                <div className="flex justify-between">
                    <span className="text-gray-500">Isosiyete:</span>
                    <span className="font-semibold text-gray-800">{bus.company}</span>
                </div>
                 <div className="flex justify-between">
                    <span className="text-gray-500">Isaha yo Guhaguruka:</span>
                    <span className="font-semibold text-gray-800">{bus.departureTime}</span>
                </div>
                 <div className="flex justify-between">
                    <span className="text-gray-500">Imyanya:</span>
                    <span className="font-semibold text-orange-600">{seats.join(', ')}</span>
                </div>
                 <div className="flex justify-between">
                    <span className="text-gray-500">Igiciro Cyose:</span>
                    <span className="font-bold text-xl text-orange-600">{totalPrice.toLocaleString()} RWF</span>
                </div>
            </div>

            <div className="mt-8 text-center">
                <button 
                    onClick={onNewSearch} 
                    className="bg-orange-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                    Fata Indi Tike
                </button>
            </div>
        </div>
    );
};

export default BookingConfirmation;
