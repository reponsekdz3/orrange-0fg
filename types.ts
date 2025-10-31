export interface SearchParams {
    from: string;
    to: string;
    date: string;
    passengers: number;
}

export interface Bus {
    id: string;
    company: string;
    companyLogoUrl: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    price: number;
    availableSeats: number;
    rating: number;
}

export interface BookingDetails {
    bus: Bus;
    seats: string[];
    totalPrice: number;
}

export interface Company {
    name: string;
    logoUrl: string;
    imageUrl: string;
    rating: number;
    description: string;
    popularRoutes: string[];
    contact: {
        phone: string;
        email: string;
    };
}
