import SecurityPage from "../page/SecurityPage";
import SecurityService from "../SecurityService";
import Banner from "../page/banner";
import { fetchData } from "../../util/api";
import { useEffect } from "react";
import request from "../../util/axios";
const HomePage = () => {
  const fetchData = async () => {
    await request({
      method: "get",
      serverType: "node",
      apiEndpoint: "services",
      onSuccess: (data) => {
        console.log("ađa", data);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  fetchData();

  return (
    <div className="bg-gray-100 text-gray-800">
      <Banner />
      {/* Who We Are Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-sm font-semibold text-gray-500 mb-2">
            WHO WE ARE
          </h2>
          <h5 className="text-3xl md:text-4xl font-bold mb-4">
            WHEN YOU NEED BETTER SECURITY INSTALLATION
          </h5>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            At Guardgrid Security, we are more than security providers; we are
            your dedicated partners in safety. Trust us to elevate your
            security, ensuring a fortress of protection when you need it most.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-12">
            {[
              {
                icon: "🕵️‍♂️",
                number: "01",
                subtitle: "RESPONDING TO ATTACK",
                title: "TRUSTWORTHY EXERT",
                description:
                  "In crisis moments, our response to attacks is swift and strategic, leveraging the expertise of our trustworthy professionals. We stand as a reliable force, committed to neutralizing threats and safeguarding your security with integrity.",
              },
              {
                icon: "🛡️",
                number: "02",
                subtitle: "EXPLORE THE TECHNIQUE",
                title: "MANNED GUARDING",
                description:
                  "Manned guarding employs human security personnel to actively protect and monitor designated areas. This hands-on approach enhances security by providing a responsive and vigilant presence. It is a proactive measure to prevent and address potential security threats.",
              },
              {
                icon: "🚒",
                number: "03",
                subtitle: "EXPLORE THE FEATURES",
                title: "SELF MOTIVATED GUARD",
                description:
                  "Uncover the distinctive traits of our Self-Motivated Guards – a dedicated force propelled by passion. Beyond conventional security, they embody key features such as responsibility, dedication, and a genuine commitment to ensuring your well-being.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg text-left relative"
              >
                <span className="absolute top-4 right-6 text-5xl font-normal text-gray-200">
                  {item.number}
                </span>
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{item.icon}</span>
                </div>
                <p className="text-xs text-gray-400 uppercase mb-1">
                  {item.subtitle}
                </p>
                <h4 className="text-lg font-semibold mb-2 uppercase">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SecurityService />

      {/* Latest News & Blog */}
      <section className="py-16 bg-gray-100 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-base font-semibold text-gray-500 mb-2">
            SECURITY ADVICES
          </h2>
          <h5 className="text-3xl md:text-4xl font-bold mb-12">
            LATEST NEWS & BLOG
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-shrink-0 w-full md:w-1/2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVu8ahpDPZfClyIaGhW3VvL1sRhpEodPWtjQ&s"
                  alt="Firefighter"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="bg-white p-6 text-left md:w-1/2">
                <div className="inline-block bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded">
                  JUN 02, 2020
                </div>
                <h4 className="text-xl font-semibold">
                  GET THE OUR BEST SECURITY OUT OF SECURITY LIST
                </h4>
                <p className="text-blue-600 text-base font-semibold">
                  READ MORE +
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-shrink-0 w-full md:w-1/2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDXd5ztQME-5rmKIcd1BvaVS_GSHEUYvopTg&s"
                  alt="Firefighter"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="bg-white p-6 text-left md:w-1/2">
                <div className="inline-block bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded">
                  JUN 02, 2020
                </div>
                <h4 className="text-xl font-semibold">
                  GET THE OUR BEST SECURITY OUT OF SECURITY LIST
                </h4>
                <p className="text-blue-600 text-base font-semibold">
                  READ MORE +
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="bg-white p-6 text-left md:w-1/2">
                <div className="inline-block bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded">
                  JULY 10, 2020
                </div>
                <h4 className="text-xl font-semibold">
                  LATEST SECURITY TECHNOLOGY FOR THE OBSERVATION
                </h4>
                <p className="text-blue-600 text-base font-semibold">
                  READ MORE +
                </p>
              </div>
              <div className="flex-shrink-0 w-full md:w-1/2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7zFgl2EWp44sda15Fb1OZg8tqD3y0nBfIw&s"
                  alt="Man in car"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="bg-white p-6 text-left md:w-1/2">
                <div className="inline-block bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded">
                  JULY 10, 2020
                </div>
                <h4 className="text-xl font-semibold">
                  LATEST SECURITY TECHNOLOGY FOR THE OBSERVATION
                </h4>
                <p className="text-blue-600 text-base font-semibold">
                  READ MORE +
                </p>
              </div>
              <div className="flex-shrink-0 w-full md:w-1/2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgdIyBEQnO11uvOyIXYQuvWGb6FjvGAXncA&s"
                  alt="Man in car"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="bg-gray-100 px-12">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0 mr-8">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR71tcXo2nxpfEEfPIW4EpMy5dzqhM2ogyoiw&s"
                alt="Security Advices"
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700 mb-8">
                At Guardgrid Security, we are more than security providers; we
                are your dedicated partners in safety. Trust us to elevate your
                security, ensuring a fortress of protection when you need it
                most.
              </p>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    The Experts offer & maintain security system at my office
                    and their security staff work great. They giving my answer &
                    security when I need Thanks for a great service.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Striven Smith"
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">STRIVEN SMITH</h4>
                      <p className="text-sm text-gray-500">CEO OF DIGICOP</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    It has been Comfort working with this guys creating the
                    strategy for my company and These guys are always solved my
                    problem in a moment. This guys are real Expert and Amazing.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Elena Rusconi"
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">ELENA RUSCONI</h4>
                      <p className="text-sm text-gray-500">ADVISER</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SecurityPage />
    </div>
  );
};

export default HomePage;
