import React, { useState } from 'react';

// --- ICONS ---
const WineGlassIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 22h8" /><path d="M7 10h10" /><path d="M12 10v12" /><path d="M12 4a4 4 0 0 1 4 4c0 2-2 4-4 4s-4-2-4-4a4 4 0 0 1 4-4z" />
  </svg>
);
const ChefHatIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2a5 5 0 0 0-5 5v1.5a1.5 1.5 0 0 0 3 0V7a2 2 0 0 1 4 0v1.5a1.5 1.5 0 0 0 3 0V7a5 5 0 0 0-5-5z" /><path d="M4 14s.79-2.92 3-4.5" /><path d="M20 14s-.79-2.92-3-4.5" /><path d="M4 14h16v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6z" />
  </svg>
);
const ClockIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);
const DownloadIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
);
const XIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

// --- Data & Image URLs ---
const restaurantImageUrl = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop";
const signatureDishImageUrl = "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1965&auto=format&fit=crop";

const fullMenu = {
    appetizers: [
        { name: 'Burrata Caprese', description: 'Fresh burrata, heirloom tomatoes, basil, balsamic glaze.', price: '₹1800' },
        { name: 'Tuna Tartare', description: 'Yellowfin tuna, avocado, soy-lime dressing, taro chips.', price: '₹2100' },
        { name: 'Mushroom Vol-au-Vent', description: 'Puff pastry filled with wild mushroom ragout.', price: '₹1600' },
    ],
    mainCourses: [
        { name: 'Pan-Seared Scallops', description: 'With saffron risotto and a lemon-butter reduction.', price: '₹2400' },
        { name: 'Wagyu Steak', description: 'A5 grade, served with truffle mashed potatoes and asparagus.', price: '₹5500' },
        { name: 'Lobster Thermidor', description: 'A classic preparation with a creamy mustard and brandy sauce.', price: '₹4800' },
        { name: 'Duck Confit', description: 'Slow-cooked duck leg, potato lyonnaise, cherry sauce.', price: '₹2900' },
    ],
    desserts: [
        { name: 'Chocolate Lava Cake', description: 'Molten center, served with vanilla bean ice cream.', price: '₹1200' },
        { name: 'Classic Tiramisu', description: 'Espresso-soaked ladyfingers, mascarpone cream.', price: '₹1100' },
        { name: 'Berry Pavlova', description: 'Crisp meringue, chantilly cream, fresh berries.', price: '₹1300' },
    ],
};

// --- Menu Modal Component ---
const MenuModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-slate-900 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <div className="sticky top-0 bg-slate-900/80 backdrop-blur-sm p-6 flex justify-between items-center border-b border-slate-700">
                    <h2 className="text-3xl font-bold text-white">Full Menu</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition">
                        <XIcon className="h-7 w-7" />
                    </button>
                </div>
                <div className="p-8">
                    {Object.entries(fullMenu).map(([category, items]) => (
                        <div key={category} className="mb-10">
                            <h3 className="text-2xl font-semibold text-amber-400 capitalize border-b-2 border-amber-500/30 pb-2 mb-6">{category}</h3>
                            <div className="space-y-6">
                                {items.map((item, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-baseline">
                                            <h4 className="text-lg font-medium text-gray-200">{item.name}</h4>
                                            <p className="text-lg font-semibold text-gray-300">{item.price}</p>
                                        </div>
                                        <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


// --- Reusable Image Component with Download (FIXED) ---
const DownloadableImage = ({ src, alt, downloadName }) => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async (e) => {
        e.stopPropagation();
        if (isDownloading) return;
        setIsDownloading(true);

        try {
            // Fetch the image data as a blob
            const response = await fetch(src);
            if (!response.ok) throw new Error('Network response was not ok.');
            const blob = await response.blob();

            // Create a temporary URL for the blob
            const url = window.URL.createObjectURL(blob);

            // Create a link element to trigger the download
            const link = document.createElement('a');
            link.href = url;
            link.download = downloadName || 'download.jpg';
            document.body.appendChild(link);
            link.click();

            // Clean up by removing the link and revoking the URL
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download failed:', error);
            // You could add a user-facing error message here
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg">
            <img
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                src={src}
                alt={alt}
                onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/800x600/334155/f59e0b?text=${alt.replace(/\s/g, '+')}`; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
            <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white/80 hover:bg-black/70 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-70 disabled:cursor-not-allowed"
                aria-label="Download image"
            >
                {isDownloading ? (
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                ) : (
                    <DownloadIcon className="h-6 w-6"/>
                )}
            </button>
        </div>
    );
};


// --- Reusable Feature Component ---
const Feature = ({ icon, title, description }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-500 text-white">
        {icon}
      </div>
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-semibold leading-6 text-white">{title}</h3>
      <p className="mt-1 text-base text-gray-400">{description}</p>
    </div>
  </div>
);

// --- Main Restaurant Section Component ---
const RestaurantSection = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <div className="bg-slate-900 font-sans">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:max-w-screen-xl">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-start">
                        
                        <div className="lg:col-span-5 xl:col-span-6">
                            <div className="space-y-4">
                                <DownloadableImage src={restaurantImageUrl} alt="Elegant restaurant dining area" downloadName="Ember-And-Vine-Interior.jpg" />
                                <DownloadableImage src={signatureDishImageUrl} alt="Exquisite plated dessert" downloadName="Ember-And-Vine-Signature-Dish.jpg" />
                            </div>
                        </div>

                        <div className="mt-12 lg:mt-0 lg:col-span-7 xl:col-span-6">
                            <span className="text-sm font-semibold uppercase tracking-wider text-amber-400">An Unforgettable Experience</span>
                            <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                                Ember & Vine
                            </h2>
                            <p className="mt-4 text-lg text-gray-300">
                                Discover a symphony of flavors at Ember & Vine, where culinary artistry meets the finest local ingredients. Our chefs craft exquisite dishes designed to delight your senses in an ambiance of sophisticated elegance.
                            </p>

                            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
                                <Feature
                                icon={<ChefHatIcon className="h-6 w-6" />}
                                title="Michelin-Starred Chefs"
                                description="World-renowned chefs crafting culinary masterpieces."
                                />
                                <Feature
                                icon={<WineGlassIcon className="h-6 w-6" />}
                                title="Curated Wine Selection"
                                description="An extensive list of global wines to complement your meal."
                                />
                            </div>
                            
                            <blockquote className="mt-12 border-l-4 border-amber-500 pl-6">
                                <p className="text-xl italic text-gray-300">"A truly transcendent dining experience. Every dish is a work of art, and the ambiance is second to none. Ember & Vine is the crown jewel of the city's culinary scene."</p>
                                <footer className="mt-4 text-base text-gray-400">- The Gourmet Times</footer>
                            </blockquote>
                            
                            <div className="mt-12 rounded-lg bg-slate-800/50 p-6">
                                <div className="flex items-center">
                                    <ClockIcon className="h-8 w-8 text-amber-400"/>
                                    <div className="ml-4">
                                        <h3 className="text-xl font-semibold text-white">Hours of Operation</h3>
                                        <p className="text-gray-300 mt-1">Dinner: 7:00 PM - 11:00 PM (Tuesday - Sunday)</p>
                                        <p className="text-gray-400 text-sm mt-1">Dress Code: Smart Casual</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 flex items-center gap-4 flex-wrap">
                                <a href="#" className="inline-block rounded-md border border-transparent bg-amber-500 px-8 py-3 text-base font-medium text-slate-900 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900">
                                Make a Reservation
                                </a>
                                <button onClick={() => setIsMenuOpen(true)} className="inline-block rounded-md border border-amber-500 px-8 py-3 text-base font-medium text-amber-400 transition hover:bg-amber-500 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900">
                                View Full Menu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
};

// The App component that renders the restaurant section
export default function App() {
  return (
    <div className="bg-slate-900">
      <RestaurantSection />
    </div>
  );
}
