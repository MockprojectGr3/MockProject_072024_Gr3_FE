import React, { useState } from "react";
import { Link } from "react-router-dom";
function Personal() {
  return (
    <div className="max-w-2xl mt-5 mx-auto p-6 bg-white shadow-lg rounded-lg">
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
              type="date"
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
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="checkbox"
                  value="male"
                  name="gender" 
                />
                 Male
              </label>
              <label>
                <input
                  type="checkbox"
                  value="female"
                  name="gender"
                />
                 Female
              </label>
            </div>
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
        <div className="flex justify-end space-x-4">
          <button className="bg-gray-300 text-back p-4 py-2 rounded-md hover:bg-gray-300">
          <Link
            to="/Profile"
          >
            Cancel
          </Link>
          </button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Personal;
