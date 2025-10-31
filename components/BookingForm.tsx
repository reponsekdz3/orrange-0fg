import React, { useState } from 'react';
import { SearchParams } from '../types';
import { RWANDAN_CITIES } from '../constants';
import { UserIcon, CalendarIcon, LocationMarkerIcon, SwapIcon } from './IconComponents';

interface BookingFormProps {
    onSearch: (params: SearchParams) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSearch }) => {
    const [from, setFrom] = useState('Kigali');
    const [to, setTo] = useState('Musanze');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [passengers, setPassengers] = useState(1);
    const [error, setError] = useState('');

    const handleSwap = () => {
        const temp = from;
        setFrom(to);
        setTo(temp);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (from === to) {
            setError("Departure and destination cannot be the same.");
            return;
        }
        setError('');
        onSearch({ from, to, date, passengers });
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-4 items-end">
                <div className="lg:col-span-3">
                    <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">Uva</label>
                    <div className="relative">
                        <LocationMarkerIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <select id="from" value={from} onChange={(e) => setFrom(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all">
                            {RWANDAN_CITIES.map(city => <option key={city} value={city}>{city}</option>)}
                        </select>
                    </div>
                </div>

                <div className="hidden lg:flex lg:col-span-1 items-center justify-center mt-6">
                    <button type="button" onClick={handleSwap} className="p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition-all">
                        <SwapIcon className="h-5 w-5"/>
                    </button>
                </div>

                <div className="lg:col-span-3">
                    <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">Ujya</label>
                    <div className="relative">
                        <LocationMarkerIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <select id="to" value={to} onChange={(e) => setTo(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all">
                            {RWANDAN_CITIES.filter(c => c !== from).map(city => <option key={city} value={city}>{city}</option>)}
                        </select>
                    </div>
                </div>
                
                <div className="lg:col-span-3 grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Itariki</label>
                        <div className="relative">
                            <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" min={new Date().toISOString().split('T')[0]} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-1">Abagenzi</label>
                        <div className="relative">
                            <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input type="number" id="passengers" value={passengers} onChange={(e) => setPassengers(Math.max(1, parseInt(e.target.value, 10)))} className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" min="1" />
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2 lg:col-span-1">
                    <button type="submit" className="w-full bg-orange-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">Shakisha</button>
                </div>
            </form>
             {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
    );
};

export default BookingForm;
