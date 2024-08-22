import React, { useEffect, useRef, useState } from "react";

import img1 from "../../assets/image/news1.jpg";
import img2 from "../../assets/image/news2.jpg";
import img3 from "../../assets/image/news3.jpg";
import img4 from "../../assets/image/news4.jpg";
import request from "../../util/axios";

const Career = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [file, setFile] = useState(null);
  const applyForm = useRef(null);
  const [data, setData] = useState([]);

  const scrollToForm = () => {
    applyForm.current.scrollIntoView({ behavior: "smooth" });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="w-[83%] py-2 px-3">
              <h4 className="font-semibold text-lg">
                General Health Certificate
              </h4>
              <p className="pl-4 pt-2">
                You go for a medical examination and print out a general health
                certificate, make sure you are a healthy person.
              </p>
            </div>
            <div className="w-[17%]">
              <img src={img4} className="w-full h-full object-cover" />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="w-[83%] py-2 px-3">
              <h4 className="font-semibold text-lg">
                General Health Certificate
              </h4>
              <p className="pl-4 pt-2">
                You go for a medical examination and print out a general health
                certificate, make sure you are a healthy person.
              </p>
            </div>
            <div className="w-[17%]">
              <img src={img2} className="w-full h-full object-cover" />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="w-[83%] py-2 px-3">
              <h4 className="font-semibold text-lg">
                General Health Certificate
              </h4>
              <p className="pl-4 pt-2">
                You go for a medical examination and print out a general health
                certificate, make sure you are a healthy person.
              </p>
            </div>
            <div className="w-[17%]">
              <img src={img1} className="w-full h-full object-cover" />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  useEffect(() => {
    const fetchData = async () => {
      request({
        method: "get",
        serverType: "node",
        apiEndpoint: "careers",
        onSuccess: (data) => {
          setData(data);
          console.log("data:", data);
        },
        onError: (error) => {
          console.log(error);
        },
      });
    };
    fetchData();
  }, []);

  const positions = [
    {
      id: 1,
      title: "Security Manager",
      content: "Protect Donald Trump",
      img_path: img1,
    },
    {
      id: 2,
      title: "Security Team Leader",
      content: "Protect Donald Trump",
      img_path: img2,
    },
    {
      id: 3,
      title: "Security Guard",
      content: "Protect Donald Trump",
      img_path: img3,
    },
    {
      id: 4,
      title: "Security Guard",
      content: "Protect Donald Trump",
      img_path: img4,
    },
  ];

  const slides = [
    {
      image: "./src/assets/image/Bannercareer.png",
      title: "Unlock Your Potential Discover Your Passion Explore the Path to ",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Chuyển slide mỗi 5 giây

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="career-container  ">
      <div
        className="relative w-screen h-screen bg-cover bg-center flex items-center transition-all duration-500 ease-in-out"
        style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 w-full flex justify-end pr-6 h-full">
          <div
            className="flex flex-col justify-center h-full text-white w-1/2"
            style={{ marginRight: "25px" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              {slides[currentSlide].title}
            </h1>
            <div className="mt-8 ms-5 ps-5">
              <p className="ps-5 ms-5 text-white font-semibold rounded inline-block text-7xl">
                Success
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[130px]">
        <h3 className="items-center text-center py-8 text-2xl font-semibold">
          Available Positions
        </h3>
        <div className="grid grid-cols-4 gap-4">
          {data.map((item, index) => {
            return (
              <div className="flex border col-span-2 border-black" key={index}>
                <div className="w-[31%] h-44">
                  <img
                    src={item.image}
                    alt={item.position}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative w-[69%] px-7 py-2">
                  <h4 className="font-semibold text-lg pb-2">
                    {item.position}
                  </h4>
                  <p>{item.description}</p>
                  <div className="absolute bottom-4 left-5">
                    <button className="bottom-5 m-0 border border-green-500 rounded-md text-white py-[7px] px-[16px] text-sm bg-green-500 hover:bg-red-400 items-center">
                      {item.status}
                    </button>
                  </div>
                  <div className="absolute bottom-4 right-5">
                    <button
                      id="apply-form"
                      className="bottom-5 m-0 border border-red-500 rounded-md text-white py-[7px] px-[10px] text-sm bg-red-500 hover:bg-red-400 items-center"
                      onClick={scrollToForm}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-[130px]">
        <h3 className="items-center text-center py-8 text-2xl font-semibold">
          Recruitment Process
        </h3>
        <div className="flex gap-10">
          <div className="flex w-[15%] text-center">
            <div className="grid w-[70%] gap-y-[4px]">
              <div
                className={`cursor-pointer border py-[13px] ${
                  currentStep === 1 ? "bg-[#D6BE9A]" : "bg-[#4E2F1C] text-white"
                }`}
                onClick={() => setCurrentStep(1)}
              >
                Step 1
              </div>
              <div
                className={`cursor-pointer border py-[13px] ${
                  currentStep === 2 ? "bg-[#D6BE9A]" : "bg-[#4E2F1C] text-white"
                }`}
                onClick={() => setCurrentStep(2)}
              >
                Step 2
              </div>
              <div
                className={`cursor-pointer border py-[13px] ${
                  currentStep === 3 ? "bg-[#D6BE9A]" : "bg-[#4E2F1C] text-white"
                }`}
                onClick={() => setCurrentStep(3)}
              >
                Step 3
              </div>
            </div>
          </div>
          <div className="flex w-[85%] border">{renderStepContent()}</div>
        </div>
      </div>
      <div className="pb-7 px-32" ref={applyForm}>
        <h3 className="items-center text-center py-8 text-2xl font-semibold">
          Online application
        </h3>
        <form className="border border-gray-800 rounded-lg px-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-x-48 gap-y-2">
          {/* Name */}
          <div className="flex flex-col gap-y-2">
            <label className="text-gray-600">Your Name</label>
            <input
              type="text"
              placeholder="Type here"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-y-2">
            <label className="text-gray-600">Your Email</label>
            <input
              type="email"
              placeholder="Type here"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Address */}
          <div className="flex flex-col gap-y-2">
            <label className="text-gray-600">Your Address</label>
            <input
              type="text"
              placeholder="Type here"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-y-2">
            <label className="text-gray-600">Your Phone</label>
            <input
              type="tel"
              placeholder="Type here"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Age */}
          <div className="flex flex-col gap-y-2">
            <label className="text-gray-600">Your Age</label>
            <input
              type="number"
              placeholder="Type here"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-y-2">
            <label className="text-gray-600">Your Gender</label>
            <select className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>Gender Options</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* CV Upload */}
          <div className="col-span-1 sm:col-span-2 flex flex-col items-center py-4">
            <label className="border-dashed border-2 border-gray-400 p-6 w-[40%] text-center rounded-lg cursor-pointer">
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <span className="text-gray-500">Upload Your CV</span>
            </label>
            {file && (
              <p className="mt-2 text-gray-600">Selected file: {file.name}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-span-1 sm:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Career;
