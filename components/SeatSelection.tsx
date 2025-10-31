import React, { useState } from 'react';
import { Bus, Seat } from '../types';

interface SeatSelectionProps {
    bus: Bus;
    onConfirm: (selectedSeats: string[], totalPrice: number) => void;
    onCancel: () => void;
}

const generateSeats = (totalSeats: number): Seat[] => {
    return Array.from({ length: totalSeats }, (_, i) => ({
        id: `M${i + 1}`,
        isBooked: Math.random() > 0.7, // Imyanya yafashwe mu buryo bwa kiswahili
    }));
};

const SeatSelection: React.FC<SeatSelectionProps> = ({ bus, onConfirm, onCancel }) => {
    const [seats] = useState<Seat[]>(generateSeats(40));
    const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

    const handleSeatClick = (seatId: string) => {
        setSelectedSeats(prev =>
            prev.includes(seatId)
                ? prev.filter(s => s !== seatId)
                : [...prev, seatId]
        );
    };
    
    const totalPrice = selectedSeats.length * bus.price;

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Hitamo Imyanya Yawe</h2>
            <p className="mb-2">{bus.company} - {bus.busType}</p>
            <div className="border rounded-lg p-4 grid grid-cols-5 gap-2 max-w-sm mx-auto bg-gray-50">
                <div className="col-span-5 text-right pr-2 text-sm text-gray-500">Imbere</div>
                {seats.map(seat => (
                    <button
                        key={seat.id}
                        onClick={() => !seat.isBooked && handleSeatClick(seat.id)}
                        disabled={seat.isBooked}
                        className={`w-12 h-12 rounded-md text-sm transition-all duration-200
                            ${seat.isBooked ? 'bg-gray-400 cursor-not-allowed' : ''}
                            ${selectedSeats.includes(seat.id) ? 'bg-orange-600 text-white ring-2 ring-orange-400' : ''}
                            ${!seat.isBooked && !selectedSeats.includes(seat.id) ? 'bg-gray-200 hover:bg-orange-200' : ''}
                        `}
                    >
                        {seat.id}
                    </button>
                ))}
            </div>
            <div className="flex justify-between items-center mt-6">
                <div>
                    <h3 className="text-lg font-semibold">Igiciro Cyose: {totalPrice.toLocaleString()} RWF</h3>
                    <p className="text-sm text-gray-600">{selectedSeats.length} umwanya(imyanya) wahisemo</p>
                </div>
                <div className="space-x-4">
                    <button onClick={onCancel} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg transition-colors">
                        Subira Inyuma
                    </button>
                    <button
                        onClick={() => onConfirm(selectedSeats, totalPrice)}
                        disabled={selectedSeats.length === 0}
                        className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg disabled:bg-orange-300 disabled:cursor-not-allowed transition-colors"
                    >
                        Emeza
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SeatSelection;