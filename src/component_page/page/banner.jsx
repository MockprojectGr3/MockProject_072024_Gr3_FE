import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTbhC9tPKG69HdL4yhvHhd6J7kGb5YlQ4Y3BV0A5KGD9IqppNk3",
    title: "SECURITY SERVICES FOR YOUR BUSINESS SAFETY"
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Chuyển slide mỗi 5 giây

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen bg-cover bg-center flex items-center transition-all duration-500 ease-in-out" 
             style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 w-full flex justify-end pr-6 h-full">
          <div className="flex flex-col justify-center h-full text-white w-1/2" style={{ marginRight: '25px' }}>
            <h1 className="text-4xl md:text-6xl font-bold">{slides[currentSlide].title}</h1>
            <div className="mt-8">
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded inline-block">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Banner;