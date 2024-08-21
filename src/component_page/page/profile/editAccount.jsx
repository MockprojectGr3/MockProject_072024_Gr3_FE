import React, { useState } from "react";
import { Link } from "react-router-dom";
function Account() {
  return (
    <div className="max-w-2xl mt-5 mx-auto p-6 bg-white shadow-lg rounded-lg mb-5">
      <div className="mt-3 border-2 border-gray-300 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Account</h2>
        <div>
             {/* Old Email */}
          <div className="flex items-center mb-4">
            <label
              htmlFor="oldEmail"
              className="w-1/6 text-sm font-medium text-gray-700"
            >
              Old Email:
            </label>
            <input
              type="text"
              name="oldEmail"
              id="oldEmail"
              className="w-3/4 ml-1 p-1 rounded-md border-2 border-gray-300"
            />
          </div>
          <div className="flex items-center mb-4">
            <label
              htmlFor="email"
              className="w-1/6 text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
                placeholder="New email..."
              type="text"
              name="email"
              id="email"
              className="w-3/4 ml-1 p-1 rounded-md border-2 border-gray-300"
            />
          </div>
          <div className="flex items-center mb-4 space-x-4">
            <label
              htmlFor="password"
              className="w-20 text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="w-1/4 ml-1 p-1 rounded-md border-2 border-gray-300"
            />
            <button className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400">
              Reset
            </button>
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

export default Account;
