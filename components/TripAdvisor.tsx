import React, { useState, useEffect } from 'react';
import { getTripAdvice } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

interface TripAdvisorProps {
    destination: string;
}

const TripAdvisor: React.FC<TripAdvisorProps> = ({ destination }) => {
    const [advice, setAdvice] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (destination) {
            setIsLoading(true);
            getTripAdvice(destination)
                .then(setAdvice)
                .catch(err => setAdvice("Kunoza amakuru y'urugendo byanze."))
                .finally(() => setIsLoading(false));
        }
    }, [destination]);

    if (!destination) return null;

    return (
        <div className="bg-orange-50 p-6 rounded-lg shadow-md mt-8 border border-orange-200">
            <h3 className="text-2xl font-bold mb-4 text-orange-800">Inama ku Rugendo rwawe i {destination}</h3>
            {isLoading ? (
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-700 mx-auto"></div>
                    <p className="mt-2 text-orange-700">Turimo gutegura inama z'ingirakamaro...</p>
                </div>
            ) : (
                <div className="prose max-w-none prose-headings:text-orange-800 prose-strong:text-orange-700">
                     <ReactMarkdown>{advice}</ReactMarkdown>
                </div>
            )}
        </div>
    );
};

export default TripAdvisor;