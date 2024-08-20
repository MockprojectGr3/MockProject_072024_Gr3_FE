import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const PriceList = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const priceData = [
    [
      { important: 1000, high: 300, normal: 40, rental: 0.012, rentalPrice: 1100, total: 462 },
      { important: 1100, high: 300, normal: 40, rental: 0.0132, rentalPrice: 1100, total: 508.2 },
      { important: 800, high: 300, normal: 40, rental: 0.0096, rentalPrice: 1100, total: 369.6 },
      { important: 900, high: 300, normal: 40, rental: 0.0108, rentalPrice: 1100, total: 415.8 },
      { important: 1000, high: 300, normal: 40, rental: 0.012, rentalPrice: 1100, total: 462 },
      { important: 1100, high: 300, normal: 40, rental: 0.0132, rentalPrice: 1100, total: 508.2 },
      { important: 800, high: 300, normal: 40, rental: 0.0096, rentalPrice: 1100, total: 369.6 },
    ],
    [
      { important: 3000, high: 400, normal: 20, rental: 0.024, rentalPrice: 1000, total: 840 },
      { important: 4000, high: 300, normal: 20, rental: 0.024, rentalPrice: 1000, total: 840 },
      { important: 4000, high: 400, normal: 20, rental: 0.032, rentalPrice: 1000, total: 1120 },
      { important: 900, high: 300, normal: 40, rental: 0.0108, rentalPrice: 1100, total: 415.8 },
      { important: 3000, high: 400, normal: 20, rental: 0.024, rentalPrice: 1000, total: 840 },
      { important: 4000, high: 300, normal: 20, rental: 0.024, rentalPrice: 1000, total: 840 },
      { important: 4000, high: 400, normal: 20, rental: 0.032, rentalPrice: 1000, total: 1120 },
    ],
    [
      { important: 3000, high: 400, normal: 20, rental: 0.024, rentalPrice: 1000, total: 840 },
      { important: 4000, high: 300, normal: 20, rental: 0.024, rentalPrice: 1000, total: 840 },
      { important: 4000, high: 400, normal: 20, rental: 0.032, rentalPrice: 1000, total: 1120 },
      { important: 900, high: 300, normal: 40, rental: 0.0108, rentalPrice: 1100, total: 415.8 },
      { important: 3000, high: 400, normal: 20, rental: 0.024, rentalPrice: 1000, total: 840 },
      { important: 4000, high: 300, normal: 20, rental: 0.024, rentalPrice: 1000, total: 840 },
      { important: 4000, high: 400, normal: 20, rental: 0.032, rentalPrice: 1000, total: 1120 },
    ]
  ];

  const renderPriceTable = (data, showHeader, showUSD, rowIndexStart, rowIndexEnd) => (
    <table className="w-full border-separate" style={{ borderSpacing: '0 8px' }}>
      {showHeader && (
        <thead>
          <tr className="text-left">
            <th className="font-semibold">IMPORTANT</th>
            <th className="font-semibold">HIGH</th>
            <th className="font-semibold">NORMAL</th>
          </tr>
        </thead>
      )}
      <tbody>
        {data.slice(rowIndexStart, rowIndexEnd).map((price, index) => (
          <tr key={index} className='bg-gray-300'>
            <td>{price.important}</td>
            <td>{price.high}</td>
            <td>{price.normal}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderRentalTable = (data, showHeader, rowIndexStart, rowIndexEnd) => (
    <table className="w-full border-separate" style={{ borderSpacing: '0 8px' }}>
      {showHeader && (
        <thead>
          <tr className="text-center">
            <th className="font-semibold" colSpan="3">RENTAL</th>
          </tr>
        </thead>
      )}
      <tbody>
        {data.slice(rowIndexStart, rowIndexEnd).map((price, index) => (
          <tr key={index} className='bg-gray-300'>
            <td>{price.rental.toFixed(4)}</td>
            <td>{price.rentalPrice}</td>
            <td className="bg-[#F09278]">{price.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="p-8 font-sans">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#253F60]">PRICE LIST</h1>
      
      <div className="relative">
        <button onClick={prevSlide} className="ml-12 absolute left-6 top-1/2 transform -translate-y-1/2 z-10 px-12">
          <ChevronLeftIcon className="ml-12 h-6 w-6 text-gray-600" />
        </button>
        
        <div className="max-w-4xl mx-auto overflow-hidden">
          <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {priceData.map((data, index) => (
              <div key={index} className="w-full flex-shrink-0 grid grid-cols-2 gap-4">
                <div>
                  {renderPriceTable(data, true, true, 0, 4)}
                  <div className="mt-4">
                    {renderPriceTable(data, false, false, 1, 4)}
                  </div>
                </div>
                <div>
                  {renderRentalTable(data, true, 0, 4)}
                  <div className="mt-4">
                    {renderRentalTable(data, false, 1, 4)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button onClick={nextSlide} className="mr-12 absolute right-6 top-1/2 transform -translate-y-1/2 z-10 px-12">
          <ChevronRightIcon className="mr-12 h-6 w-6 text-gray-600" />
        </button>
      </div>
      
      <div className="flex justify-center mt-4">
        {priceData.map((_, index) => (
          <div 
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${currentSlide === index ? 'bg-[#253F60]' : 'bg-gray-300'}`}
          />
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto ">
      <h2 className="text-3xl font-bold mt-12 mb-6 text-center text-[#253F60]">ANY QUESTIONS?</h2>
      
      <div className="flex flex-col md:flex-row">
        <form className="space-y-4 flex-1">
          <input type="text" placeholder="Your name" className="w-full p-3 border border-[#728BAD] rounded-full" />
          <input type="tel" placeholder="Your telephone number" className="w-full p-3 border border-[#728BAD] rounded-full" />
          <textarea placeholder="Your question" className="w-full p-3 border border-[#728BAD] rounded-lg h-32" />
          <button type="submit" className="bg-[#728BAD] text-white px-6 py-3 rounded-full font-semibold">Send</button>
        </form>
        
        <div className="flex-1 mt-4 md:mt-0 md:ml-8 flex items-center">
          <p className="text-lg">
            Write to us and we will be sure to answer all your questions and give you a comprehensive consultation.
          </p>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default PriceList;
