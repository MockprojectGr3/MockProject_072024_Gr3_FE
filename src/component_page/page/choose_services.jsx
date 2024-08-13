import React, { useState } from 'react';

const ChooseServices= () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [levelRating, setLevelRating] = useState([]);

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const toggleLevelRating = (rating) => {
    if (levelRating.includes(rating)) {
      setLevelRating(levelRating.filter(r => r !== rating));
    } else {
      setLevelRating([...levelRating, rating]);
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">CHOOSE SERVICES</h1>
      <div className="w-full max-w-md bg-gray-900 text-white p-6 rounded-lg">
        {[
          { title: "Personal Protection", options: ["Senior leaders", "Influencers", "Successful businessmen"] },
          { title: "Ensuring event security", options: ["Major events", "Medium events", "Small events"] },
          { title: "Protection from surveillance and threats", options: ["Customers under threat", "Attacks", "Identify hazards"] }
        ].map((section, index) => (
          <div key={index} className="mb-4">
            <label className="flex items-center justify-between">
              <span className="text-lg font-semibold">{section.title}</span>
              <input 
                type="checkbox" 
                className="mr-8" 
                onChange={() => toggleService(section.title)} 
                checked={selectedServices.includes(section.title)}
              />
            </label>
            <div className="ml-4">
              {section.options.map((option, optionIndex) => (
                <label key={optionIndex} className="flex items-center justify-between">
                  <span>{option}</span>
                  <input 
                    type="radio" 
                    className="mr-8" 
                    name={section.title}
                    onChange={() => toggleService(option)} 
                    checked={selectedServices.includes(option)}
                  />
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-end">
          <a href="#" className="text-white hover:underline flex items-center">
            More Detail 
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">LEVEL RATING</h2>
      <div className="flex items-center mb-4">
        {["Normal", "High", "Important"].map((rating, index) => (
          <label key={index} className="flex items-center mr-4">
            <span className="mr-2">{rating}</span>
            <input 
              type="checkbox" 
              className="mr-1" 
              checked={levelRating.includes(rating)}
              onChange={() => toggleLevelRating(rating)}
            />
          </label>
        ))}
      </div>

      <textarea 
        className="border border-[#728BAD] rounded-lg p-2 w-full max-w-md mb-4 h-32" 
        placeholder="Note request..."
      />
      <div className="w-full max-w-md flex justify-end">
        <button className="bg-[#728BAD] text-white px-6 py-2 rounded-lg">Send</button>
      </div>
    </div>
  );
}

export default ChooseServices;