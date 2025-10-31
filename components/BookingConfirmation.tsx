import React from 'react';
import { BookingDetails } from '../types';

interface BookingConfirmationProps {
    details: BookingDetails;
    onNewSearch: () => void;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({ details, onNewSearch }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-2xl mx-auto">
            <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h2 className="text-3xl font-bold mt-4 mb-2">Itike Yawe Yemejwe!</h2>
            <p className="text-gray-600 mb-6">Itike yawe yemejwe neza. Turakwifuriza urugendo rwiza!</p>

            <div className="text-left border-t border-b py-4">
                <h3 className="text-xl font-semibold mb-4">Amakuru y'Urugendo</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-gray-500">Isosiyete</p>
                        <p className="font-medium">{details.bus.company}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Ubwoko bwa Bisi</p>
                        <p className="font-medium">{details.bus.busType}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Igihaguruka</p>
                        <p className="font-medium">{details.bus.departureTime}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Igera</p>
                        <p className="font-medium">{details.bus.arrivalTime}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Imyanya Wahisemo</p>
                        <p className="font-medium">{details.seats.join(', ')}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Igiciro Cyose</p>
                        <p className="font-medium text-orange-600 text-lg">{details.totalPrice.toLocaleString()} RWF</p>
                    </div>
                </div>
            </div>

            <button onClick={onNewSearch} className="mt-8 w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                Fata Indi Tike
            </button>
        </div>
    );
};

export default BookingConfirmation;