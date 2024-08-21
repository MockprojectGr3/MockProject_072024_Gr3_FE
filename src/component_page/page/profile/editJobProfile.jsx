import React, { useState } from "react";
import { Link } from "react-router-dom";
function Information() {
  return (
    <div className="max-w-2xl mt-5 mx-auto p-6 bg-white shadow-lg rounded-lg mb-5">
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
            <div>
              <input
                className="w-100 border-2 border-gray-300 p-6"
                type="text"
              />
            </div>
          </div>

          <div className="block items-center mb-4">
            <label
              htmlFor="experience"
              className=" text-sm font-medium text-gray-700"
            >
              <b>Experience:</b>
            </label>
            <div>
              <input
                className="w-100 border-2 border-gray-300 p-6"
                type="text"
              />
            </div>
          </div>
          <div className="block items-center mb-4">
            <label
              htmlFor="certification"
              className="text-sm font-medium text-gray-700"
            >
              <b> Certification:</b>
            </label>
            <div>
              <input
                className="w-100 border-2 border-gray-300 p-6"
                type="text"
              />
            </div>

            <div>
              <input className="mt-2" name="Add image" type="file" />
            </div>

            {/* Image for Certification */}
            <div className="mb-4 mt-2 border-2 border-gray-300 p-6">
              <img
                src=""
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
            <div>
              <input
                className="w-100 border-2 border-gray-300 p-6"
                type="text"
              />
            </div>

            <div>
              <input className="mt-2" name="Add image" type="file" />
            </div>
            {/* Image for Health */}
            <div className="mb-4 mt-2 border-2 border-gray-300 p-6">
              <img src="" alt="Health" className="w-25 h-auto rounded-lg" />
            </div>
          </div>

          <div className="block items-center mb-4">
            <label
              htmlFor="license"
              className="text-sm font-medium text-gray-700"
            >
              <b> License:</b>
            </label>
            <div>
              <input
                className="w-100 border-2 border-gray-300 p-6"
                type="text"
              />
            </div>

            <div>
              <input className="mt-2" name="Add image" type="file" />
            </div>
            {/* Image for License */}
            <div className="mb-4 mt-2 border-2 border-gray-300 p-6">
              <img src="" alt="License" className="w-25 h-auto rounded-lg" />
            </div>
          </div>

          <div className="block mb-4">
            <label
              htmlFor="service"
              className="text-sm font-medium text-gray-700"
            >
              <b>Type of service:</b>
            </label>
            <div className="space-x-4">
              <select
                id="service"
                name="service"
                className="mt-2 p-2 border-2 border-gray-300 rounded-md"
              >
                <option value="">Choose the type of service</option>
                <option value="personal-protection">Personal Protection</option>
                <option value="event-security">Event Security</option>
                <option value="property-security">Property Security</option>
                <option value="rescue-evacuation">
                  Rescue and Evacuation Services
                </option>
              </select>
              <button className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400">
          <Link
            to="/Profile"
          >
            Cancel
          </Link>
          </button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Information;
