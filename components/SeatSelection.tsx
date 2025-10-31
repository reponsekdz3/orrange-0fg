import React, { useState } from 'react';
import { Bus } from '../types';

interface SeatSelectionProps {
    bus: Bus;
    onConfirm: (seats: string[], totalPrice: number) => void;
    onCancel: () => void;
}

const Seat: React.FC<{ number: string; isSelected: boolean; isOccupied: boolean; onSelect: (number: string) => void; }> = ({ number, isSelected, isOccupied, onSelect }) => {
    const baseClasses = "w-10 h-10 flex items-center justify-center font-bold rounded-md text-sm transition-all";
    const occupiedClasses = "bg-gray-300 text-gray-500 cursor-not-allowed";
    const selectedClasses = "bg-orange-600 text-white scale-110 shadow-lg";
    const availableClasses = "bg-orange-100 text-orange-800 hover:bg-orange-200 cursor-pointer";

    const getClasses = () => {
        if (isOccupied) return `${baseClasses} ${occupiedClasses}`;
        if (isSelected) return `${baseClasses} ${selectedClasses}`;
        return `${baseClasses} ${availableClasses}`;
    };

    return (
        <div className={getClasses()} onClick={() => !isOccupied && onSelect(number)}>
            {number}
        </div>
    );
};

const SeatSelection: React.FC<SeatSelectionProps> = ({ bus, onConfirm, onCancel }) => {
    const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
    
    // Simulating some occupied seats
    const occupiedSeats = React.useMemo(() => {
        const seats = new Set<string>();
        const totalSeats = 40;
        const occupiedCount = totalSeats - bus.availableSeats;
        for (let i = 0; i < occupiedCount; i++) {
            const row = String.fromCharCode(65 + Math.floor(Math.random() * 4)); // A, B, C, D
            const number = Math.floor(Math.random() * 10) + 1;
            seats.add(`${row}${number}`);
        }
        return seats;
    }, [bus.availableSeats]);

    const handleSelectSeat = (seatNumber: string) => {
        setSelectedSeats(prev => 
            prev.includes(seatNumber) 
                ? prev.filter(s => s !== seatNumber)
                : [...prev, seatNumber]
        );
    };

    const totalPrice = selectedSeats.length * bus.price;

    const seatsLayout = Array.from({ length: 10 }, (_, i) => `A${i + 1}`)
        .concat(Array.from({ length: 10 }, (_, i) => `B${i + 1}`))
        .concat(Array.from({ length: 10 }, (_, i) => `C${i + 1}`))
        .concat(Array.from({ length: 10 }, (_, i) => `D${i + 1}`));

    return (
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg mt-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Hitamo Imyanya</h2>
            <div className="border-2 border-gray-200 rounded-lg p-4">
                <div className="bg-gray-100 p-4 rounded-md">
                    <p className="text-center font-semibold">Imbere</p>
                </div>
                <div className="grid grid-cols-5 gap-2 md:gap-4 mt-4">
                    {seatsLayout.map((seat, index) => (
                        <React.Fragment key={seat}>
                           <Seat
                                number={seat}
                                isSelected={selectedSeats.includes(seat)}
                                isOccupied={occupiedSeats.has(seat)}
                                onSelect={handleSelectSeat}
                            />
                            {(index + 1) % 2 === 0 && (index + 1) % 5 !== 0 && <div className="col-span-1"></div>}
                        </React.Fragment>
                    ))}
                </div>
            </div>

             <div className="mt-6 flex flex-wrap gap-4 justify-center items-center">
                <div className="flex items-center space-x-2"><div className="w-5 h-5 rounded bg-orange-100"></div><span>Uhari</span></div>
                <div className="flex items-center space-x-2"><div className="w-5 h-5 rounded bg-orange-600"></div><span>Wahisemo</span></div>
                <div className="flex items-center space-x-2"><div className="w-5 h-5 rounded bg-gray-300"></div><span>Wafashwe</span></div>
            </div>

            <div className="mt-8 border-t pt-6">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-lg font-semibold">Imyanya Wahisemo:</p>
                        <p className="text-orange-600 font-bold text-xl">{selectedSeats.join(', ') || 'Nta n\'umwe'}</p>
                    </div>
                     <div>
                        <p className="text-lg font-semibold">Igiciro Cyose:</p>
                        <p className="text-orange-600 font-bold text-2xl">{totalPrice.toLocaleString()} RWF</p>
                    </div>
                </div>
                 <div className="flex justify-between mt-8 space-x-4">
                    <button onClick={onCancel} className="w-full bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors">Subira Inyuma</button>
                    <button onClick={() => onConfirm(selectedSeats, totalPrice)} disabled={selectedSeats.length === 0} className="w-full bg-orange-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-700 transition-colors disabled:bg-orange-300 disabled:cursor-not-allowed">Emeza</button>
                </div>
            </div>
        </div>
    );
};

export default SeatSelection;
