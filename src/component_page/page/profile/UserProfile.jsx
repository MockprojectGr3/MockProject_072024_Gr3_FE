import React from "react";
import img from "../../../assets/image/news1.jpg";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="max-w-2xl mt-5 mx-auto p-6 bg-white shadow-lg rounded-lg mb-5">
      <div className="flex flex-col items-center mb-6">
        <img
          src={img}
          alt="Profile"
          className="w-60 h-100 rounded-full mb-2"
        />
        <p className="text-xl font-semibold">Ella Lauda</p>
      </div>

      {/* New Personal Information Section */}
      <div className="border-2 border-gray-300 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
        <div>
          <div className="flex items-center mb-4">
            <label
              htmlFor="fullname"
              className="w-1/4 text-sm font-medium text-gray-700"
            >
              Fullname:
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="w-3/4 ml-1 p-1 rounded-md border-2 border-gray-300"
            />
          </div>

          <div className="flex items-center mb-4">
            <label
              htmlFor="dob"
              className="w-1/4 text-sm font-medium text-gray-700"
            >
              Date of birth:
            </label>
            <input
              type="text"
              name="dob"
              id="dob"
              className="w-3/4 ml-1 p-1 rounded-md border-2 border-gray-300"
            />
          </div>
          <div className="flex items-center mb-4">
            <label
              htmlFor="gender"
              className="w-1/4 text-sm font-medium text-gray-700"
            >
              Gender:
            </label>
            <input
              type="text"
              name="gender"
              id="gender"
              className="w-3/4 ml-1 p-1 rounded-md border-2 border-gray-300"
            />
          </div>
          <div className="flex items-center mb-4">
            <label
              htmlFor="address"
              className="w-1/4 text-sm font-medium text-gray-700"
            >
              Address:
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="w-3/4 ml-1 p-1 rounded-md border-2 border-gray-300"
            />
          </div>
          <div className="flex items-center mb-4">
            <label
              htmlFor="phone"
              className="w-1/4 text-sm font-medium text-gray-700"
            >
              Phone Number:
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="w-3/4 ml-1 p-1 rounded-md border-2 border-gray-300"
            />
          </div>
        </div>
        <div className="text-right">
        <a href="#" className="link-underline-primary">
        {" "}
          <Link
            to="/editPersonal"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "blue",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              textDecoration: "none",
              cursor: "pointer",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            Edit
          </Link>
          </a>
        </div>
      </div>

      {/* New Account Section */}
      <div className="mt-3 border-2 border-gray-300 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Account</h2>
        <div>
          <div className="flex items-center mb-4">
            <label
              htmlFor="email"
              className="w-1/4 text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="w-3/4 ml-1 p-1 rounded-md border-2 border-gray-300"
            />
          </div>
          <div className="flex items-center mb-4">
            <label
              htmlFor="password"
              className="w-1/4 text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="text"
              name="password"
              id="password"
              className="w-3/4 ml-1 p-1 rounded-md border-2 border-gray-300"
            />
          </div>
        </div>
        <div className="text-right">
          <Link
            to="/editAccount"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "blue",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              textDecoration: "none",
              cursor: "pointer",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            Edit
          </Link>
        </div>
      </div>

      {/* New JOB INFORMATION Section */}
      <div className="border-2 border-gray-300 p-6 rounded-lg mt-3">
        <h2 className="text-2xl font-bold mb-4">JOB INFORMATION</h2>
        <div>
          <div className="block items-center mb-4">
            <label
              htmlFor="skills"
              className="text-sm font-medium text-gray-700"
            >
              <b> Skills:</b>
            </label>
            <div className="border-2 border-gray-300 p-6 rounded-lg">
              <p>- Observation and Hazard Identification Skills</p>
              <p>- Self-Defense and Combat Skills</p>
              <p>- Weapons Skills</p>
              <p>- Safe Driving Skills</p>
              <p>- Communication Skills</p>
              <p>- First Aid Skills</p>
              <p>- Teamwork Skills</p>
              <p>- Physical and Endurance Skills</p>
            </div>
          </div>

          <div className="block items-center mb-4">
            <label
              htmlFor="experience"
              className=" text-sm font-medium text-gray-700"
            >
              <b>Experience:</b>
            </label>
            <div className="border-2 border-gray-300 p-6 rounded-lg">
              <p>- 10 years of experience</p>
            </div>
          </div>
          <div className="block items-center mb-4">
            <label
              htmlFor="certification"
              className="text-sm font-medium text-gray-700"
            >
              <b> Certification:</b>
            </label>
            <div className="border-2 border-gray-300 p-6 rounded-lg">
              <p>- Certified Protection Professional - CPP</p>
              <p>- CPR and First Aid Certification</p>
              <p>- Self-Defense and Combat Training Certification</p>
            </div>
            {/* Image for Certification */}
            <div className="mb-4 mt-2">
              <img
                src={img}
                alt="Certification"
                className="w-25 h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="block items-center mb-4">
            <label
              htmlFor="health"
              className="text-sm font-medium text-gray-700"
            >
              <b>Health:</b>
            </label>
            <div className="border-2 border-gray-300 p-6 rounded-lg">
              <p>- Good health no problem</p>
            </div>
            {/* Image for Health */}
            <div className="mb-4 mt-2">
              <img
                src={img}
                alt="Certification"
                className="w-25 h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="block items-center mb-4">
            <label
              htmlFor="license"
              className="text-sm font-medium text-gray-700"
            >
              <b> License:</b>
            </label>
            <div className="border-2 border-gray-300 p-6 rounded-lg">
              <p>- Personal Security License</p>
              <p>- Bodyguard Service License</p>
              <p>- Firearm License</p>
              <p>- International License</p>
            </div>
            {/* Image for License */}
            <div className="mb-4 mt-2">
              <img
                src={img}
                alt="Certification"
                className="w-25 h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="block items-center mb-4">
            <label
              htmlFor="service"
              className="text-sm font-medium text-gray-700"
            >
              <b>Type of service:</b>
            </label>
            <div className="border-2 border-gray-300 p-6 rounded-lg">
              <p>- Personal Protection</p>
              <p>- Event Security</p>
              <p>- Property Security</p>
              <p>- Rescue and Evacuation Services</p>
            </div>
          </div>
        </div>
        <div className="text-right">
          <Link
            to="/editJobProfile"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "blue",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              textDecoration: "none",
              cursor: "pointer",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
