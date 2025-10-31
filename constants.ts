import { Company } from './types';

export const RWANDAN_CITIES = [
    "Kigali", "Musanze", "Rubavu", "Huye", "Gisenyi", "Butare", "Gitarama", "Cyangugu", "Byumba", "Kibungo", "Kibuye", "Nyanza", "Rwamagana"
];

export const BUS_COMPANIES: Company[] = [
    {
        name: "Volcano Express",
        logoUrl: "https://www.volcanoexpress.co.rw/wp-content/uploads/2021/05/volcano-logo.png",
        imageUrl: "https://pbs.twimg.com/media/GH83ALbXcAAR2iA.jpg",
        rating: 4.5,
        description: "Volcano Express is a leading transport company in Rwanda, known for its punctuality and excellent customer service. We connect major cities and towns with a modern fleet of buses.",
        popularRoutes: ["Kigali - Musanze", "Kigali - Rubavu", "Kigali - Huye"],
        contact: {
            phone: "+250 788 300 500",
            email: "info@volcanoexpress.co.rw"
        }
    },
    {
        name: "Ritco Ltd",
        logoUrl: "https://www.jobinrwanda.com/sites/default/files/styles/medium/public/employer_logos/RITCO%20LOGO.jpg?itok=Y-5g2S5i",
        imageUrl: "https://flash.rw/wp-content/uploads/2023/12/RITCO-BUS-1536x1024.jpg",
        rating: 4.2,
        description: "RITCO offers reliable and affordable bus services across Rwanda and to neighboring countries. Our priority is your safety and comfort during your journey.",
        popularRoutes: ["Kigali - Rusumo", "Kigali - Nyagatare", "Kigali - Cyangugu"],
        contact: {
            phone: "+250 788 123 456",
            email: "contact@ritco.rw"
        }
    },
    {
        name: "Horizon Express",
        logoUrl: "https://rwandayp.com/img/rw/c/1655208460-71-horizon-express-rwanda.jpg",
        imageUrl: "https://live.staticflickr.com/65535/51253457593_0556157f13_b.jpg",
        rating: 4.0,
        description: "Travel with Horizon Express for a smooth and pleasant experience. We serve a wide range of destinations with a focus on customer satisfaction.",
        popularRoutes: ["Kigali - Gicumbi", "Kigali - Kibuye", "Rubavu - Musanze"],
        contact: {
            phone: "+250 788 987 654",
            email: "bookings@horizon.rw"
        }
    },
    {
        name: "Virunga Express",
        logoUrl: "https://media.licdn.com/dms/image/C560BAQG_vM-1Q2wF5Q/company-logo_200_200/0/1631310659695?e=2147483647&v=beta&t=15W_W7w8-uL6i_9E_yH_s9b9k0uVvJz_h8eZzY9n9Zg",
        imageUrl: "https://inyarwanda.com/app/webroot/img/201910/images/travels-31571212876.jpg",
        rating: 4.3,
        description: "Virunga Express specializes in routes to the Northern and Western provinces, offering comfortable buses and experienced drivers for your travel needs.",
        popularRoutes: ["Kigali - Musanze", "Musanze - Gisenyi", "Kigali - Gisenyi"],
        contact: {
            phone: "+250 788 456 789",
            email: "support@virunga.rw"
        }
    },
     {
        name: "Kigali Bus Services",
        logoUrl: "https://kbs.rw/wp-content/uploads/2021/03/kbs-logo-1.png",
        imageUrl: "https://kbs.rw/wp-content/uploads/2021/03/DSC_0137-scaled.jpg",
        rating: 4.1,
        description: "Kigali Bus Services (KBS) is a key player in Kigali's public transport system, also offering inter-city routes with a focus on efficiency and reliability.",
        popularRoutes: ["Kigali - Rwamagana", "Kigali - Kayonza", "Kigali - Gitarama"],
        contact: {
            phone: "+250 788 350 433",
            email: "info@kbs.rw"
        }
    }
];
