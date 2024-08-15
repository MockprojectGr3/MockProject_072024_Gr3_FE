import img from '../../assets/image/image2.jpg';
import React, { useState, useEffect } from 'react';

const slides = [
    {
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTbhC9tPKG69HdL4yhvHhd6J7kGb5YlQ4Y3BV0A5KGD9IqppNk3",
      title: "SECURITY SERVICES FOR YOUR BUSINESS SAFETY"
    },
  ];

const Training = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Chuyển slide mỗi 5 giây

    return () => clearInterval(timer);
  }, []);
    return (
        <div className="bg-gray-100 text-gray-800">
            <section className="relative h-screen bg-cover bg-center flex items-center transition-all duration-500 ease-in-out" 
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
            </section>
            <div className="bg-gray-100 p-8">
                <h1 className="text-2xl font-bold mb-6">Continoun the course</h1>

                <div className="flex space-x-4 mb-4">
                    <div className="bg-white p-4 rounded-lg shadow-md flex items-center flex-grow">
                        <img src={img} alt="Personal security" className="w-16 h-16 object-cover rounded-lg mr-4" />
                        <div className="flex-grow">
                            <h2 className="font-semibold text-lg">Personal security</h2>
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                            </div>
                        </div>
                        <span className="text-gray-600 ml-2">50%</span>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md w-64">
                        <h3 className="font-semibold">Lesson 1</h3>
                        <p className="text-sm">Personal security</p>
                        <p className="text-sm text-gray-600">Time: 30 date</p>
                    </div>

                    <div className="flex justify-end">
                        <div className="bg-white p-3 rounded-lg shadow-md">
                            <p className="text-sm font-semibold">Studying (1)</p>
                            <p className="text-sm font-semibold">Learned (2)</p>
                        </div>
                    </div>
                </div>
            </div>
          
          <h1 className="text-2xl font-bold px-12">List the course</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-12 p-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-black text-white rounded-lg overflow-hidden">
                <img src={img} alt="Course" className="w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">List the course</h3>
                  <p className="text-sm">Description: In crisis moments, our response to attacks is swift .</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default Training;
