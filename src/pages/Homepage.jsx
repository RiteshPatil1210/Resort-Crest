import React from 'react';

// Import Icons
import { FaSwimmingPool, FaSpa, FaUtensils } from 'react-icons/fa';

// Import your images from the assets folder
import heroBg from '../assets/hero-bg.jpg';
import lobbyImg from '../assets/lobby.jpg';
import suiteViewImg from '../assets/suite-view.jpg';
import diningImg from '../assets/dining.jpg';
import poolImg from '../assets/pool.jpg';
import spaImg from '../assets/spa.jpg';
import exteriorImg from '../assets/exterior.jpg';


// Section 1: Hero Component
const Hero = () => (
  <section 
    className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
    style={{ backgroundImage: `url(${heroBg})` }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10 text-center px-4">
      <h1 className="text-5xl md:text-7xl font-playfair-display mb-4 leading-tight">
        Crest The Grand
      </h1>
      <p className="text-lg md:text-2xl font-light mb-8">
        Experience Five-Star Luxury in the Heart of Nashik
      </p>
      <a 
        href="#booking" 
        className="bg-[#c9a96e] hover:bg-[#b89860] text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105"
      >
        Book Your Stay
      </a>
    </div>
  </section>
);

// Section 2: Welcome Component
const Welcome = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img src={lobbyImg} alt="Grand Lobby" className="rounded-lg shadow-2xl w-full" />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-[#c9a96e] font-semibold tracking-widest uppercase mb-2">Welcome</p>
          <h2 className="text-4xl md:text-5xl font-playfair-display mb-6">
            An Icon of Modern Elegance
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Crest The Grand redefines luxury in Nashik. From our breathtaking architecture to our unwavering commitment to service, every detail is meticulously crafted to ensure an unforgettable experience.
          </p>
          <a 
            href="#experience" 
            className="border-2 border-[#c9a96e] text-[#c9a96e] font-bold py-3 px-8 rounded-lg hover:bg-[#c9a96e] hover:text-white transition duration-300"
          >
            Explore Our World
          </a>
        </div>
      </div>
    </div>
  </section>
);

// Section 3: Parallax Teaser Component
const ParallaxTeaser = () => (
    <div 
        className="h-[60vh] bg-cover bg-fixed bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${suiteViewImg})` }}
    >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
            <h2 className="text-4xl md:text-5xl text-white font-playfair-display">
                Your Sanctuary Awaits
            </h2>
        </div>
    </div>
);


// Section 4: Experience Component
const Experience = () => {
  const experiences = [
    {
      icon: <FaUtensils className="text-5xl text-[#c9a96e]" />,
      title: "Exquisite Dining",
      description: "Embark on a culinary journey at our award-winning restaurants, where world-class chefs create masterpieces from the freshest local ingredients.",
      img: diningImg,
    },
    {
      icon: <FaSwimmingPool className="text-5xl text-[#c9a96e]" />,
      title: "Rooftop Serenity",
      description: "Escape to our stunning rooftop infinity pool. Soak in the panoramic views of the Nashik skyline while enjoying perfect tranquility.",
      img: poolImg,
    },
    {
      icon: <FaSpa className="text-5xl text-[#c9a96e]" />,
      title: "Wellness & Spa",
      description: "Rejuvenate your body and soul at The Sanctuary. Our wellness experts offer a curated menu of treatments designed for ultimate relaxation.",
      img: spaImg,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair-display mb-4">Unforgettable Experiences</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Discover the moments that will define your stay.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src={exp.img} alt={exp.title} className="w-full h-64 object-cover" />
              <div className="p-8 text-center">
                <div className="flex justify-center mb-4">{exp.icon}</div>
                <h3 className="text-2xl font-playfair-display mb-3">{exp.title}</h3>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 5: Booking CTA Component
const BookingCTA = () => (
  <section 
    id="booking" 
    className="py-24 bg-cover bg-center text-white text-center"
    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${exteriorImg})` }}
  >
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-playfair-display mb-4">Begin Your Journey</h2>
      <p className="text-lg md:text-xl font-light mb-8 max-w-3xl mx-auto">
        Your extraordinary escape to Crest The Grand is just a click away. Reserve your stay and prepare to be enchanted.
      </p>
      <a 
        href="#booking-form" // This would typically link to a booking engine or contact page
        className="bg-white text-[#c9a96e] font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-200 transition duration-300"
      >
        Reserve Now
      </a>
    </div>
  </section>
);


// Main HomePage Component - Assembles all sections
const HomePage = () => {
  return (
    <div className="font-poppins bg-gray-50">
      <main>
        <Hero />
        <Welcome />
        <ParallaxTeaser />
        <Experience />
        <BookingCTA />
      </main>
    </div>
  );
};

export default HomePage;