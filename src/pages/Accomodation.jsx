import React, { useState } from 'react';

// --- Data for Room Cards ---
// Storing data in an array makes it easy to manage and render dynamically.
const roomsData = [
  {
    id: 1,
    title: 'Deluxe King Room',
    description: 'A perfect blend of comfort and style, our Deluxe King Room offers a serene retreat with elegant furnishings and a stunning city view. Ideal for both business and leisure travelers.',
    size: '35 sqm / 377 sqft',
    view: 'City View',
    occupancy: 'Up to 2 adults',
    imageUrl: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'Elegant Deluxe King Room with a large bed and city view from the window',
    reverseLayout: false,
  },
  {
    id: 2,
    title: 'Executive Suite',
    description: 'Indulge in the spacious elegance of our Executive Suite, featuring a separate living area, a luxurious bathroom, and panoramic views of the ocean. Includes exclusive access to our Club Lounge.',
    size: '70 sqm / 753 sqft',
    view: 'Ocean View',
    occupancy: 'Up to 3 adults',
    imageUrl: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'Spacious and modern Executive Suite with a comfortable seating area',
    reverseLayout: true,
  },
  {
    id: 3,
    title: 'The Presidential Suite',
    description: 'The pinnacle of luxury. Our Presidential Suite offers unparalleled opulence with a private dining room, kitchenette, jacuzzi, and dedicated butler service. The ultimate experience for the discerning guest.',
    size: '250 sqm / 2690 sqft',
    view: 'Panoramic View',
    occupancy: 'Up to 4 adults',
    imageUrl: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'Luxurious Presidential Suite with a large living space and grand piano',
    reverseLayout: false,
  },
];

// --- SVG Icons ---
// Using SVG components makes them easy to style and reuse.
const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
);




const Hero = () => (
    <header className="hero-bg text-white">
        <div className="container mx-auto px-6 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-serif tracking-wide">Our Accommodations</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">Experience unparalleled luxury and comfort in our exquisitely designed rooms and suites.</p>
        </div>
    </header>
);

const RoomCard = ({ room }) => {
    const { title, description, size, view, occupancy, imageUrl, imageAlt, reverseLayout } = room;
    const layoutClass = reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row';

    return (
        <div className={`flex flex-col ${layoutClass} bg-white rounded-lg shadow-xl overflow-hidden mb-12 transform hover:shadow-2xl transition-shadow duration-300`}>
            <div className="md:w-1/2">
                <img src={imageUrl} alt={imageAlt} className="w-full h-64 md:h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">{title}</h2>
                <p className="text-gray-600 mb-6">{description}</p>
                <ul className="text-gray-700 space-y-2 mb-8">
                    <li className="flex items-center"><LocationIcon /> {size} | {view}</li>
                    <li className="flex items-center"><UserIcon /> {occupancy}</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                     <a href="#" className="w-full sm:w-auto text-center bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md">Book Now</a>
                </div>
            </div>
        </div>
    );
};



// --- Main App Component ---
export default function App() {
    return (
        <div className="bg-gray-50 text-gray-800">
            {/* We need to add the custom fonts and hero background style to the page */}
            <style>{`
                body { font-family: 'Inter', sans-serif; }
                .font-serif { font-family: 'Playfair Display', serif; }
                .hero-bg {
                    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
                    background-size: cover;
                    background-position: center;
                }
            `}</style>
            
           
            <Hero />

            <main className="container mx-auto px-6 py-16">
                {roomsData.map(room => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </main>

       
        </div>
    );
}
