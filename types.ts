export interface SearchParams {
  from: string;
  to: string;
  date: string;
}

export interface Bus {
  id: string;
  company: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  rating: number;
  availableSeats: number;
  busType: string;
  amenities: string[];
}

export interface Seat {
    id: string;
    isBooked: boolean;
}

export interface BookingDetails {
    bus: Bus;
    seats: string[];
    totalPrice: number;
}

export interface Company {
    name: string;
    rating: number;
    description: string;
    logoUrl: string;
    imageUrl: string;
}
