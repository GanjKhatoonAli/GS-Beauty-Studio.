import React, { useState } from "react";
import "flowbite";
import './App.css';
import logo from "./assets/logo.png";
import heroVideo from "./assets/salon.mp4";
import about from './assets/about.jpg';
import HairCare from './assets/hair.jpg';
import makeupImg from './assets/makeup.jpg';
import skincare from './assets/skincare.jpg';
import bride from './assets/bride.jpg';
import party from './assets/party.jpg';
import nikkah from './assets/nikkah.jpg';
import model from './assets/model.jpg';
import glamorous from './assets/glamorous.jpg';
import nails from './assets/nails.jpg';
import grooming from './assets/eyebrow.jpg';
import mehndi from './assets/mehndi.jpg';
import hd from './assets/hd.jpg';
import soft from './assets/soft.jpg';
import haircut from './assets/haircut.jpg';
import spa from './assets/spa.jpg';
import haircolor from './assets/haircolor.jpg';
import highlights from './assets/highlights.jpg';
import keratin from './assets/keratin.jpg';
import rebonding from './assets/Hair treatment.jpg';
import facial from './assets/facial.jpg';
import DF from './assets/D Facial.jpg';
import hydra from './assets/Hydra.jpg';
import acne from './assets/acne.jpg';
import nail from './assets/nail art.jpg';
import gel from './assets/gel.jpg';
import acralics from './assets/acralics.jpg';
import thread from './assets/threading.jpg';
import waxing from './assets/waxing.jpg';
import eyebrowthread from './assets/eyebrow thread.jpg';
import manicure from './assets/manicure.jpg';
import pedicure from './assets/pedicure.jpg';
import bmehndi from './assets/bmehndi.jpg';
import arabic from './assets/arabic.jpg';
import simple from './assets/simple.jpg';
import white from './assets/white.jpg';
import b1 from './assets/b1.jpg';
import b2 from './assets/b2.jpg';
import b3 from './assets/b3.jpg';
import b4 from './assets/b4.jpg';
import b5 from './assets/b5.jpg';
import b from './assets/b.jpg';
import t1 from './assets/t2.jpg';
import t2 from './assets/t1.jpg';
import t3 from './assets/t3.jpg';
import sajeeha from './assets/sajeeha.png';
import ganj from './assets/ganj.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [showOnlySearchResults, setShowOnlySearchResults] = useState(false);

  // Define all services data
  const makeupServices = [
    { id: 1, name: "Bridal Makeup", img: bride, price: "70,000", category: "makeup" },
    { id: 2, name: "Nikkah Makeup", img: nikkah, price: "21,000", category: "makeup" },
    { id: 3, name: "Glamorous Makeup", img: glamorous, price: "10,000", category: "makeup" },
    { id: 4, name: "Model Makeup", img: model, price: "8,000", category: "makeup" },
    { id: 5, name: "Party Makeup", img: party, price: "6,000", category: "makeup" },
    { id: 6, name: "HD Airbrush Makeup", img: hd, price: "21,000", category: "makeup" },
    { id: 7, name: "Soft Glam / Natural Look", img: soft, price: "4,000", category: "makeup" },
  ];

  const hairServices = [
    { id: 8, name: "Signature Haircut", img: haircut, price: "2,500 – 4,000", category: "hair" },
    { id: 9, name: "Hair Spa", img: spa, price: "4,000 – 6,500", category: "hair" },
    { id: 10, name: "Haircolor Base", img: haircolor, price: "5,000 – 8,000", category: "hair" },
    { id: 11, name: "Highlights", img: highlights, price: "10,000 – 18,000", category: "hair" },
    { id: 12, name: "Keratin Treatment", img: keratin, price: "6,000", category: "hair" },
    { id: 13, name: "Rebonding/Smoothening", img: rebonding, price: "15,000 – 30,000", category: "hair" },
  ];

  const skinServices = [
    { id: 14, name: "Basic Facial", img: facial, price: "3,000 – 4,500", category: "skin" },
    { id: 15, name: "Deep Cleansing Facial", img: DF, price: "4,500 – 6,000", category: "skin" },
    { id: 16, name: "Hydra Facial", img: hydra, price: "8,000 – 12,000", category: "skin" },
    { id: 17, name: "Acne Treatment", img: acne, price: "5,000 – 8,000", category: "skin" },
  ];

  const nailServices = [
    { id: 18, name: "Nail Art (Per Finger)", img: nail, price: "300 – 700", category: "nails" },
    { id: 19, name: "Gel Nails", img: gel, price: "3,500 – 6,000", category: "nails" },
    { id: 20, name: "Acralic Extensions", img: acralics, price: "6,000 – 10,000", category: "nails" },
  ];

  const groomingServices = [
    { id: 21, name: "Threading", img: thread, price: "300 - 600", category: "grooming" },
    { id: 22, name: "Waxing (Full Arms / Legs)", img: waxing, price: "1,500 – 3,000", category: "grooming" },
    { id: 23, name: "Eyebrow Shaping", img: eyebrowthread, price: "200 - 500", category: "grooming" },
    { id: 24, name: "Manicure", img: manicure, price: "2,000 – 3,000", category: "grooming" },
    { id: 25, name: "Pedicure", img: pedicure, price: "2,500 – 4,000", category: "grooming" },
  ];

  const mehndiServices = [
    { id: 26, name: "Bridal Mehndi (Full)", img: bmehndi, price: "25,000", category: "mehndi" },
    { id: 27, name: "Arabic Mehndi", img: arabic, price: "6,000", category: "mehndi" },
    { id: 28, name: "Simple Mehndi", img: simple, price: "2,500", category: "mehndi" },
    { id: 29, name: "White/Glitter Mehndi", img: white, price: "5,000", category: "mehndi" },
  ];

  // Combine all services
  const allServices = [
    ...makeupServices,
    ...hairServices,
    ...skinServices,
    ...nailServices,
    ...groomingServices,
    ...mehndiServices,
  ];

  // Filter services based on search term
  const filteredServices = allServices.filter(service => {
    const searchLower = search.toLowerCase();
    const nameLower = service.name.toLowerCase();
    
    // Check if search matches service name
    return nameLower.includes(searchLower);
  });

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    
    // If there's search text, show only search results
    if (value.trim() !== "") {
      setShowOnlySearchResults(true);
      // Scroll to services section when searching
      setTimeout(() => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setShowOnlySearchResults(false);
    }
  };

  // Clear search
  const handleClearSearch = () => {
    setSearch("");
    setShowOnlySearchResults(false);
  };

  // Function to handle booking
  const handleBookNow = (serviceName, servicePrice) => {
    alert(`Booking ${serviceName} for ${servicePrice}\nWe'll contact you shortly!`);
  };

  // Function to render service cards with Book Now button
  const renderServiceCards = (services) => {
    return services.map((service) => (
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={service.id}>
        <div className="relative h-72 rounded overflow-hidden">
          <img
            alt={service.name}
            className="object-cover object-center w-full h-full block transform transition duration-500 hover:scale-105"
            src={service.img}
          />
        </div>
        <div className="mt-4">
          <h3 className="text-lg tracking-widest title-font mb-1">{service.name}</h3>
          <p className="mt-1 text-[burlywood] font-semibold">{service.price}</p>
          <button 
            onClick={() => handleBookNow(service.name, service.price)}
            className="mt-3 w-full bg-[burlywood] hover:bg-[#d3a261] text-black font-semibold py-2 px-4 rounded transition duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    ));
  };

  // Handle category click from categories slider
  const handleCategoryClick = (category) => {
    setSearch("");
    setShowOnlySearchResults(false);
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 start-0 bg-linear-to-b from-black to-gray-900 shadow-lg">
        <div className="max-w-8xl flex flex-wrap items-center justify-between mx-auto p-2 text-[burlywood]">
          <a href="#home" className="flex items-center rtl:space-x-reverse">
            <img src={logo} className="Ganj h-11" alt="G&S Logo" />
            <h1 className="sajoo text-white ml-2 text-xl font-bold">
              <span className="text-[burlywood]">B</span>eauty 
              <span className="text-[burlywood]">S</span>tudio
            </h1>
          </a>
          
          <div className="flex items-center md:order-2">
            {/* Search input for desktop */}
            <form onSubmit={(e) => e.preventDefault()} className="hidden md:block">
              <label htmlFor="input-group-1" className="sr-only">Search Services</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-[#d3a261]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <input 
                  type="text" 
                  id="input-group-1" 
                  value={search}
                  onChange={handleSearchChange}
                  className="block w-64 ps-9 pe-10 py-2 rounded-2xl bg-gray-800 border border-[#d3a261]/40 text-white text-sm focus:ring-[#d3a261] focus:border-[#d3a261] px-2.5 shadow-xs placeholder:text-gray-400 transition-all duration-300" 
                  placeholder="Search services..."
                  style={{
                    backgroundColor: '#1f2937',
                    borderColor: search ? '#d3a261' : '#374151'
                  }}
                />
                {search && (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#d3a261] hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                )}
              </div>
            </form>
            
            <button 
              type="button" 
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-base md:hidden hover:bg-gray-800 hover:text-[burlywood] focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
              </svg>
            </button>
          </div>
          
          <div 
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} 
          >
            {/* Search input for mobile */}
            <form onSubmit={(e) => e.preventDefault()} className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-[#d3a261]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input 
                type="text" 
                value={search}
                onChange={handleSearchChange}
                className="block w-full ps-9 pe-10 py-2 bg-gray-800 border border-[#d3a261]/40 text-white text-sm rounded-base focus:ring-[#d3a261] focus:border-[#d3a261] px-2.5 shadow-xs placeholder:text-gray-400 transition-all duration-300" 
                placeholder="Search services..."
                style={{
                  backgroundColor: '#1f2937',
                  borderColor: search ? '#d3a261' : '#374151'
                }}
              />
              {search && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#d3a261] hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              )}
            </form>
            
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-base bg-gray-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <a href="#home" className="block py-2 px-3 text-white bg-[burlywood] md:bg-transparent md:text-[burlywood] md:p-0 transition-colors hover:text-white" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#about" className="block py-2 px-3 text-white hover:text-[burlywood] md:border-0 md:hover:text-[burlywood] md:p-0 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#categories" className="block py-2 px-3 text-white hover:text-[burlywood] md:border-0 md:hover:text-[burlywood] md:p-0 transition-colors">Categories</a>
              </li>
              <li>
                <a href="#services" className="block py-2 px-3 text-white hover:text-[burlywood] md:p-0 transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#gallery" className="block py-2 px-3 text-white hover:text-[burlywood] md:p-0 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="block py-2 px-3 text-white hover:text-[burlywood] md:p-0 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden pt-16" id="home" style={{backgroundColor: '#0a0a0a'}}>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 typing">
            Glow Like Never Before <br /> at G&S Beauty Studio
          </h1>
          <p className="text-lg md:text-2xl text-white mb-8 typing-delay">
            Luxury styling, professional makeup, and beauty treatments tailored just for you.
          </p>
          <div className="flex flex-col md:flex-row gap-4 fade-in-buttons">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex text-white bg-[#d3a261] border-0 py-2 px-6 rounded-lg text-lg hover:bg-[burlywood] transition cursor-pointer shadow-lg hover:shadow-xl"
            >
              Explore Our Services
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex bg-[#d3a261] text-gray-100 border-0 py-2 px-6 rounded-lg text-lg hover:bg-gray-300 transition cursor-pointer shadow-lg hover:shadow-xl"
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 text-[burlywood]" id="about" style={{backgroundColor: '#111111'}}>
        <div className="container mx-auto px-5 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-xl">
            <img 
              src={about} 
              alt="About Us" 
              className="w-full h-96 object-cover transform transition duration-500 hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest">
              About G&S Beauty Studio
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              At G&S Beauty Studio, we believe beauty is not just about looks—it's about confidence and self-expression.  
              With our team of skilled professionals, we provide personalized hair, makeup, skincare, and grooming services tailored to your unique style.  
              Our mission is to make every client feel radiant, empowered, and pampered from the moment they walk in.
            </p>
            <button className="bg-[burlywood] text-black py-2 px-6 rounded-lg font-semibold hover:bg-[#d3a261] transition-all duration-300 shadow-lg hover:shadow-xl">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Categories Slider */}
      <section className="py-20 text-center text-[burlywood] relative" id="categories" style={{backgroundColor: '#1a1a1a'}}>
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">OUR CATEGORIES</h1>
          <h4 className="text-lg text-gray-300">Your Beauty, Our Passion</h4>
        </div>
        <div className="relative px-4 overflow-x-hidden">
          <button
            onClick={() => document.getElementById("category-slider").scrollBy({ left: -300, behavior: 'smooth' })}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[burlywood] text-black p-2 rounded-full shadow-lg hover:bg-[#d3a261] transition-all"
          >
            &#10094;
          </button>
          <button
            onClick={() => document.getElementById("category-slider").scrollBy({ left: 300, behavior: 'smooth' })}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[burlywood] text-black p-2 rounded-full shadow-lg hover:bg-[#d3a261] transition-all"
          >
            &#10095;
          </button>
          <div
            id="category-slider"
            className="flex gap-5 px-1 md:px-20 overflow-x-hidden scrollbar-hide scroll-smooth"
          >
            {[
              { img: HairCare, title: "HairCare", category: "hair" },
              { img: makeupImg, title: "Makeup", category: "makeup" },
              { img: skincare, title: "Skincare", category: "skin" },
              { img: nails, title: "Nails", category: "nails" },
              { img: grooming, title: "Beauty & Grooming", category: "grooming" },
              { img: mehndi, title: "Mehndi", category: "mehndi" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="relative rounded overflow-hidden shadow-xl shrink-0 w-80 cursor-pointer group"
                onClick={() => handleCategoryClick(item.category)}
              >
                <img src={item.img} alt={item.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[burlywood] text-black px-6 py-2 text-xl rounded font-semibold shadow-md italic w-50 block">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="body-font" id="gallery" style={{backgroundColor: '#111111'}}>
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[burlywood] text-center mb-3">
            OUR GALLERY
          </h1>
          <p className="text-center text-gray-300 mb-14">
            Our gallery showcases our finest work, highlighting the beauty, detail, and craftsmanship behind every service we offer.
          </p>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" src={b5} 
                     className="w-full h-full object-cover object-center block 
                                transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl rounded-2xl"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" src={b2} 
                     className="w-full h-full object-cover object-center block 
                                transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl rounded-2xl"/>
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" src={b4} 
                     className="w-full h-full object-cover object-center block 
                                transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl rounded-2xl"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" src={b3} 
                     className="w-full h-full object-cover object-center block 
                                transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl rounded-2xl"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" src={b1} 
                     className="w-full h-full object-cover object-center block 
                                transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl rounded-2xl"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" src={b} 
                     className="w-full h-full object-cover object-center block 
                                transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl rounded-2xl"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="text-white min-h-screen py-10" id="services" style={{backgroundColor: '#1a1a1a'}}>
        {/* When searching - show ONLY matching cards */}
        {showOnlySearchResults ? (
          <div className="container mx-auto px-5" style={{backgroundColor: '#111111', padding: '2rem', borderRadius: '1rem', marginTop: '1rem'}}>
            {/* If there are search results */}
            {filteredServices.length > 0 ? (
              <>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl md:text-3xl font-semibold text-[burlywood]">
                    Showing results for "{search}"
                  </h2>
                  <button
                    onClick={handleClearSearch}
                    className="text-sm text-[burlywood] hover:text-white transition flex items-center"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    Clear search
                  </button>
                </div>
                <div className="flex flex-wrap -m-4">
                  {renderServiceCards(filteredServices)}
                </div>
              </>
            ) : (
              // No results found
              <div className="text-center py-20">
                <h2 className="text-2xl md:text-3xl text-[burlywood] mb-4">No services found for "{search}"</h2>
                <p className="text-gray-400 mb-6">Try searching with different keywords</p>
                <button
                  onClick={handleClearSearch}
                  className="bg-[burlywood] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#d3a261] transition shadow-lg hover:shadow-xl"
                >
                  View All Services
                </button>
              </div>
            )}
          </div>
        ) : (
          // When NOT searching - show ALL services as before
          <>
            <h1 className="text-4xl md:text-5xl font-bold text-[burlywood] text-center mb-3">
              Complete Service Menu
            </h1>
            <p className="text-center text-gray-300 mb-14">
              Every service is delivered with care, precision, and premium products.
            </p>

            {/* Makeup Services */}
            <section className="body-font mb-16" style={{backgroundColor: '#111111', padding: '2rem', borderRadius: '1rem'}}>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="h-px w-16 bg-[burlywood]/40"></span>
                <h2 className="text-2xl md:text-3xl font-semibold text-[burlywood] uppercase tracking-widest">
                  Makeup Services
                </h2>
                <span className="h-px w-16 bg-[burlywood]/40"></span>
              </div>
              <div className="container px-5 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {renderServiceCards(makeupServices)}
                </div>
              </div>
            </section>

            {/* HairCare Services */}
            <section className="body-font mb-16" style={{backgroundColor: '#111111', padding: '2rem', borderRadius: '1rem'}}>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="h-px w-16 bg-[burlywood]/40"></span>
                <h2 className="text-2xl md:text-3xl font-semibold text-[burlywood] uppercase tracking-widest">
                  HairCare Services
                </h2>
                <span className="h-px w-16 bg-[burlywood]/40"></span>
              </div>
              <div className="container px-5 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {renderServiceCards(hairServices)}
                </div>
              </div>
            </section>

            {/* SkinCare Services */}
            <section className="body-font mb-16" style={{backgroundColor: '#111111', padding: '2rem', borderRadius: '1rem'}}>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="h-px w-16 bg-[burlywood]/40"></span>
                <h2 className="text-2xl md:text-3xl font-semibold text-[burlywood] uppercase tracking-widest">
                  SkinCare Services
                </h2>
                <span className="h-px w-16 bg-[burlywood]/40"></span>
              </div>
              <div className="container px-5 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {renderServiceCards(skinServices)}
                </div>
              </div>
            </section>

            {/* Nails */}
            <section className="body-font mb-16" style={{backgroundColor: '#111111', padding: '2rem', borderRadius: '1rem'}}>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="h-px w-16 bg-[burlywood]/40"></span>
                <h2 className="text-2xl md:text-3xl font-semibold text-[burlywood] uppercase tracking-widest">
                  Nails
                </h2>
                <span className="h-px w-16 bg-[burlywood]/40"></span>
              </div>
              <div className="container px-5 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {renderServiceCards(nailServices)}
                </div>
              </div>
            </section>

            {/* Beauty & Grooming */}
            <section className="body-font mb-16" style={{backgroundColor: '#111111', padding: '2rem', borderRadius: '1rem'}}>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="h-px w-16 bg-[burlywood]/40"></span>
                <h2 className="text-2xl md:text-3xl font-semibold text-[burlywood] uppercase tracking-widest">
                  Beauty & Grooming
                </h2>
                <span className="h-px w-16 bg-[burlywood]/40"></span>
              </div>
              <div className="container px-5 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {renderServiceCards(groomingServices)}
                </div>
              </div>
            </section>

            {/* Mehndi */}
            <section className="body-font" style={{backgroundColor: '#111111', padding: '2rem', borderRadius: '1rem'}}>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="h-px w-16 bg-[burlywood]/40"></span>
                <h2 className="text-2xl md:text-3xl font-semibold text-[burlywood] uppercase tracking-widest">
                  Mehndi
                </h2>
                <span className="h-px w-16 bg-[burlywood]/40"></span>
              </div>
              <div className="container px-5 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {renderServiceCards(mehndiServices)}
                </div>
              </div>
            </section>
          </>
        )}
      </div>

      {/* Contact Section */}
      <section className="text-gray-300 body-font relative" id="contact" style={{backgroundColor: '#111111'}}>
        <h1 className="text-4xl md:text-5xl font-bold text-[burlywood] text-center mb-3 pt-20">
          Want To Book An Appointment?
        </h1>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* MAP */}
          <div className="lg:w-2/3 md:w-1/2 rounded-2xl overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative shadow-2xl" style={{backgroundColor: '#1a1a1a', border: '1px solid rgba(211, 162, 97, 0.3)'}}>
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Karachi+(G%26S%20Beauty%20Studio)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "grayscale(1) contrast(1.1) opacity(0.35)" }}
            ></iframe>

            {/* CONTACT INFO */}
            <div className="bg-black/80 backdrop-blur relative flex flex-wrap py-6 rounded-xl shadow-lg" style={{border: '1px solid rgba(211, 162, 97, 0.4)'}}>
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-[burlywood] tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 text-gray-300">
                  G&S Beauty Studio, Main Boulevard, Karachi
                </p>
              </div>

              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-[burlywood] tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="leading-relaxed text-gray-300">
                  gsbeautystudio@gmail.com
                </a>

                <h2 className="title-font font-semibold text-[burlywood] tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed text-gray-300">
                  +92 300 1234567
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-8 rounded-2xl shadow-2xl" style={{backgroundColor: '#1a1a1a', border: '1px solid rgba(211, 162, 97, 0.3)'}}>
            <h2 className="text-[burlywood] text-2xl mb-1 font-semibold title-font">
              Get in Touch
            </h2>
            <p className="leading-relaxed mb-6 text-gray-400">
              Have a question or want to book an appointment? We'd love to hear from you.
            </p>

            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-400">Name</label>
              <input
                type="text"
                className="w-full rounded border text-base outline-none text-gray-200 py-2 px-3 transition"
                style={{backgroundColor: '#111111', borderColor: 'rgba(211, 162, 97, 0.4)'}}
              />
            </div>

            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-400">Email</label>
              <input
                type="email"
                className="w-full rounded border text-base outline-none text-gray-200 py-2 px-3 transition"
                style={{backgroundColor: '#111111', borderColor: 'rgba(211, 162, 97, 0.4)'}}
              />
            </div>

            <div className="relative mb-6">
              <label className="leading-7 text-sm text-gray-400">Message</label>
              <textarea
                className="w-full rounded border h-32 text-base outline-none text-gray-200 py-2 px-3 resize-none transition"
                style={{backgroundColor: '#111111', borderColor: 'rgba(211, 162, 97, 0.4)'}}
              ></textarea>
            </div>

            <button className="text-black bg-[burlywood] border-0 py-3 px-6 focus:outline-none hover:bg-[#d3a261] rounded-lg text-lg font-semibold transition shadow-lg hover:shadow-xl">
              Send Message
            </button>

            <p className="text-xs text-gray-500 mt-4">
              We usually respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="body-font text-gray-300 py-24" id="feedback" style={{backgroundColor: '#1a1a1a'}}>
        <div className="container px-5 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[burlywood]">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 mt-3">
              Hear from our happy clients who experienced the luxury and magic of G&S Beauty Studio.
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 md:w-1/2 p-4">
              <div className="h-full text-center rounded-2xl p-8 shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300" style={{backgroundColor: '#111111'}}>
                <img
                  alt="testimonial"
                  src={t3}
                  className="w-20 h-20 mb-6 object-cover object-center rounded-full inline-block border-2 border-[burlywood] transform transition-transform duration-300 hover:scale-110"
                  style={{backgroundColor: '#1a1a1a'}}
                />
                <p className="leading-relaxed text-gray-300 italic">
                  "Absolutely loved my bridal makeup! The team at G&S Beauty Studio made me feel special and glamorous."
                </p>
                <span className="inline-block h-1 w-12 rounded bg-[burlywood] mt-6 mb-4"></span>
                <h2 className="text-[burlywood] font-semibold title-font tracking-wider text-sm">
                  HOLDEN CAULFIELD
                </h2>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 p-4">
              <div className="h-full text-center rounded-2xl p-8 shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300" style={{backgroundColor: '#111111'}}>
                <img
                  alt="testimonial"
                  src={t2}
                  className="w-20 h-20 mb-6 object-cover object-center rounded-full inline-block border-2 border-[burlywood] transform transition-transform duration-300 hover:scale-110"
                  style={{backgroundColor: '#1a1a1a'}}
                />
                <p className="leading-relaxed text-gray-300 italic">
                  "Their skincare treatments are top-notch! I feel refreshed and glowing every time."
                </p>
                <span className="inline-block h-1 w-12 rounded bg-[burlywood] mt-6 mb-4"></span>
                <h2 className="text-[burlywood] font-semibold title-font tracking-wider text-sm">
                  ALPER KAMU
                </h2>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 p-4">
              <div className="h-full text-center rounded-2xl p-8 shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300" style={{backgroundColor: '#111111'}}>
                <img
                  alt="testimonial"
                  src={t1}
                  className="w-20 h-20 mb-6 object-cover object-center rounded-full inline-block border-2 border-[burlywood] transform transition-transform duration-300 hover:scale-110"
                  style={{backgroundColor: '#1a1a1a'}}
                />
                <p className="leading-relaxed text-gray-300 italic">
                  "G&S Beauty Studio's attention to detail and professionalism is unmatched. Highly recommended!"
                </p>
                <span className="inline-block h-1 w-12 rounded bg-[burlywood] mt-6 mb-4"></span>
                <h2 className="text-[burlywood] font-semibold title-font tracking-wider text-sm">
                  HENRY LETHAM
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owners Section */}
      <section className="py-20 text-center" style={{backgroundColor: '#111111'}}>
        <div className="container mx-auto px-5">
          <p className="text-[burlywood] uppercase text-sm mb-2 tracking-widest">Meet Our Founders</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[burlywood]">
            Specialists With Many Years <br /> Of Experience
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-16">
            <div className="flex flex-col items-center max-w-xs group">
              <img
                src={ganj}
                alt="Owner 1"
                className="w-64 h-80 object-cover rounded-3xl border-4 border-[burlywood] mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-2xl font-semibold text-[burlywood] mt-2">Ms.Ganj Khatoon Ali</h3>
              <p className="text-gray-300">Founder</p>
            </div>

            <div className="flex flex-col items-center max-w-xs group">
              <img
                src={sajeeha}
                alt="Owner 2"
                className="w-64 h-80 object-cover rounded-3xl border-4 border-[burlywood] mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-2xl font-semibold text-[burlywood] mt-2">Ms.Sajeeha Hanif</h3>
              <p className="text-gray-300">Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-[burlywood] mt-20" style={{backgroundColor: '#0a0a0a'}}>
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-2">G&S Beauty Studio</h4>
            <p className="text-sm text-gray-300">
              Luxury styling, professional makeup, and beauty treatments in Karachi.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="hover:text-white transition">Facebook</a>
              <a href="#" className="hover:text-white transition">Instagram</a>
              <a href="#" className="hover:text-white transition">TikTok</a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#categories" className="hover:text-white transition">Categories</a></li>
              <li><a href="#services" className="hover:text-white transition">Our Services</a></li>
              <li><a href="#gallery" className="hover:text-white transition">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Newsletter</h4>
            <p className="text-sm mb-3 text-gray-300">Subscribe for offers & updates</p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed!"); }} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                required
                className="px-3 py-2 rounded-md text-black flex-1"
                style={{backgroundColor: '#f0f0f0'}}
              />
              <button
                type="submit"
                className="bg-[burlywood] text-black px-4 py-2 rounded-md hover:bg-[#d3a261] transition shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} G&S Beauty Studio — All rights reserved
        </div>
      </footer>
    </>
  );
}

export default App;