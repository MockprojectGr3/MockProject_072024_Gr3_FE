import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import axios from 'axios';

const PriceList = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [priceData, setPriceData] = useState([]);
  const totalSlides = priceData.length;

  useEffect(() => {
    const fetchPriceData = async () => {
      try {
        const response = await axios.get('http://116.103.20.59:5000/api/v1/service-price');
        const data = response.data;
        const transformedData = [
          data.slice(0, 7),
          data.slice(7, 14),
          data.slice(14)
        ];

        setPriceData(transformedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPriceData();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const renderPriceTable = (data, showHeader, rowIndexStart, rowIndexEnd) => (
    <table className="w-full border-collapse border border-gray-300">
      {showHeader && (
        <thead>
          <tr className="text-center">
            <th className="font-semibold border border-gray-300 p-2 w-1/3">IMPORTANT</th>
            <th className="font-semibold border border-gray-300 p-2 w-1/3">HIGH</th>
            <th className="font-semibold border border-gray-300 p-2 w-1/3">NORMAL</th>
          </tr>
        </thead>
      )}
      <tbody>
        {data.slice(rowIndexStart, rowIndexEnd).map((price, index) => (
          <tr key={index} className='bg-gray-300'>
            <td className="border border-gray-300 p-2 text-center">{price.se_price}</td>
            <td className="border border-gray-300 p-2 text-center">{price.se_price}</td>
            <td className="border border-gray-300 p-2 text-center">{price.se_price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const renderRentalTable = (data, showHeader, rowIndexStart, rowIndexEnd) => (
    <table className="w-full border-collapse border border-gray-300">
      {showHeader && (
        <thead>
          <tr className="text-center">
            <th className="font-semibold border border-gray-300 p-2" colSpan="3">RENTAL</th>
          </tr>
        </thead>
      )}
      <tbody>
        {data.slice(rowIndexStart, rowIndexEnd).map((price, index) => (
          <tr key={index} className='bg-gray-300'>
            <td className="border border-gray-300 p-2">{price.se_price}</td>
            <td className="border border-gray-300 p-2">{price.se_price}</td>
            <td className="border border-gray-300 p-2 bg-[#F09278]">{price.se_price}</td>
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
                  {renderPriceTable(data, true, 0, 4)}
                  <div className="mt-4">
                    {renderPriceTable(data, false, 4, 7)}
                  </div>
                </div>
                <div>
                  {renderRentalTable(data, true, 0, 4)}
                  <div className="mt-4">
                    {renderRentalTable(data, false, 4, 7)}
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

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mt-12 mb-6 text-center text-[#253F60]">ANY QUESTIONS?</h2>

        <div className="flex flex-col md:flex-row">
          <form className="space-y-4 flex-1">
            <input type="text" placeholder="Your name" className="w-full p-3 border border-[#728BAD] rounded-full" />
            <input type="tel" placeholder="Your telephone number" className="w-full p-3 border border-[#728BAD] rounded-full" />
            <textarea placeholder="Your question" className="w-full p-3 border border-[#728BAD] rounded-lg h-32" />
            <button type="submit" className="bg-[#2e7dea] text-white px-6 py-3 rounded-full font-semibold">Send&nbsp;&nbsp;<i className="fas fa-paper-plane" style={{ fontSize: '20px' }}></i></button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PriceList;

