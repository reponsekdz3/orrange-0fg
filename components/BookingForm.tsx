import React, { useState } from 'react';
import { CITIES } from '../constants';
import { SearchParams } from '../types';
import { CalendarIcon, LocationIcon, ArrowRightLeftIcon } from './IconComponents';

interface BookingFormProps {
    onSearch: (params: SearchParams) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSearch }) => {
    const [from, setFrom] = useState(CITIES[0]);
    const [to, setTo] = useState(CITIES[1]);
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

    const handleSwap = () => {
        const temp = from;
        setFrom(to);
        setTo(temp);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (from && to && date) {
            onSearch({ from, to, date });
        } else {
            alert("Nyamunekauzuza ibyasabwe byose.");
        }
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-2xl">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-10 gap-4 items-end">
                <div className="relative md:col-span-4">
                    <label htmlFor="from" className="block text-sm font-medium text-gray-700">Uva</label>
                    <LocationIcon className="absolute top-8 left-3 h-5 w-5 text-gray-400" />
                    <select
                        id="from"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        className="mt-1 block w-full pl-10 pr-3 py-3 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
                    >
                        {CITIES.map(city => <option key={city} value={city}>{city}</option>)}
                    </select>
                </div>

                <div className="flex items-center justify-center md:col-span-1">
                    <button type="button" onClick={handleSwap} className="p-2 rounded-full bg-gray-200 hover:bg-orange-200 text-gray-600 transition-all duration-300 hover:rotate-180">
                        <ArrowRightLeftIcon className="h-5 w-5" />
                    </button>
                </div>

                <div className="relative md:col-span-4">
                    <label htmlFor="to" className="block text-sm font-medium text-gray-700">Ujya</label>
                    <LocationIcon className="absolute top-8 left-3 h-5 w-5 text-gray-400" />
                    <select
                        id="to"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        className="mt-1 block w-full pl-10 pr-3 py-3 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
                    >
                        {CITIES.map(city => <option key={city} value={city}>{city}</option>)}
                    </select>
                </div>

                <div className="relative md:col-span-2">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Itariki</label>
                    <CalendarIcon className="absolute top-8 left-3 h-5 w-5 text-gray-400" />
                    <input
                        type="date"
                        id="date"
                        value={date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setDate(e.target.value)}
                        className="mt-1 block w-full pl-10 pr-3 py-3 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
                    />
                </div>

                <div className="md:col-span-10">
                    <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-4 rounded-lg mt-4 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Shakisha Bisi
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;