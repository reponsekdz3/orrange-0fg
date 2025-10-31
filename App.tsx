
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';
import SearchResults from './components/SearchResults';
import SeatSelection from './components/SeatSelection';
import BookingConfirmation from './components/BookingConfirmation';
import TripAdvisor from './components/TripAdvisor';
import BookingHistory from './components/BookingHistory';
import CompaniesPage from './components/CompaniesPage';
import ContactPage from './components/ContactPage';
import { SearchParams, Bus, BookingDetails, Company } from './types';
import { findBuses } from './services/geminiService';
import { BUS_COMPANIES } from './constants';

type AppState = 'home' | 'results' | 'seats' | 'confirmation';
type Page = 'home' | 'companies' | 'history' | 'contact';

const App: React.FC = () => {
    const [page, setPage] = useState<Page>('home');
    const [appState, setAppState] = useState<AppState>('home');
    const [searchParams, setSearchParams] = useState<SearchParams | null>(null);
    const [buses, setBuses] = useState<Bus[]>([]);
    const [selectedBus, setSelectedBus] = useState<Bus | null>(null);
    const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (params: SearchParams) => {
        setIsLoading(true);
        setSearchParams(params);
        setBuses([]);
        setAppState('results');
        const results = await findBuses(params);
        setBuses(results);
        setIsLoading(false);
    };

    const handleSelectBus = (bus: Bus) => {
        setSelectedBus(bus);
        setAppState('seats');
    };

    const handleSeatConfirmation = (seats: string[], totalPrice: number) => {
        if (selectedBus) {
            setBookingDetails({ bus: selectedBus, seats, totalPrice });
            setAppState('confirmation');
        }
    };

    const handleNewSearch = () => {
        setAppState('home');
        setSearchParams(null);
        setBuses([]);
        setSelectedBus(null);
        setBookingDetails(null);
        setPage('home');
    };

    const handleNavigate = (targetPage: Page) => {
        if (targetPage === 'home') {
            handleNewSearch();
        } else {
            setPage(targetPage);
        }
    }
    
    const HeroSection = () => (
        <div className="relative bg-gradient-to-r from-orange-500 to-orange-400 text-white py-20 px-4 text-center rounded-b-3xl shadow-xl overflow-hidden">
             <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-down">Tegura Urugendo Rwawe Neza</h1>
                <p className="text-lg md:text-xl mb-8 animate-fade-in-up">Fata itike byoroshye kandi vuba mu makompanyi yose mu Rwanda.</p>
            </div>
        </div>
    );

    const PartnersSection = () => (
        <div className="py-12 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Amasosiyete Dukorana</h2>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                        {BUS_COMPANIES.map(company => (
                            <div key={company.name} className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center">
                                <img src={company.logoUrl} alt={company.name} className="max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"/>
                            </div>
                        ))}
                         {BUS_COMPANIES.map(company => (
                            <div key={`${company.name}-clone`} className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center">
                                <img src={company.logoUrl} alt={company.name} className="max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
             {/* FIX: Removed 'jsx' prop from style tag to fix TypeScript error. */}
             <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
            `}</style>
        </div>
    );


    const renderMainContent = () => {
        switch (page) {
            case 'companies':
                return <CompaniesPage />;
            case 'history':
                return <BookingHistory />;
            case 'contact':
                return <ContactPage />;
            case 'home':
            default:
                return (
                     <>
                        {appState === 'home' && <HeroSection />}
                        <div className="transform -translate-y-12 z-10 relative px-4">
                           {renderBookingFlow()}
                        </div>
                        {appState === 'home' && <PartnersSection />}
                     </>
                );
        }
    }

    const renderBookingFlow = () => {
        switch (appState) {
            case 'home':
                return <BookingForm onSearch={handleSearch} />;
            case 'results':
                return (
                    <div className="space-y-8">
                        <BookingForm onSearch={handleSearch} />
                        <SearchResults buses={buses} onSelectBus={handleSelectBus} isLoading={isLoading} />
                        {searchParams && !isLoading && buses.length > 0 && <TripAdvisor destination={searchParams.to} />}
                    </div>
                );
            case 'seats':
                return selectedBus && <SeatSelection bus={selectedBus} onConfirm={handleSeatConfirmation} onCancel={() => setAppState('results')} />;
            case 'confirmation':
                return bookingDetails && <BookingConfirmation details={bookingDetails} onNewSearch={handleNewSearch} />;
            default:
                return <div>Habaye ikibazo</div>;
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header onNavigate={handleNavigate} />
            <main className="flex-grow">
                {renderMainContent()}
            </main>
            <Footer />
        </div>
    );
};

export default App;