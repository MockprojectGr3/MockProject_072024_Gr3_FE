import React from "react";

function SecurityPage() {
  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="text-center mb-5">
        <h3 className="text-sm font-semibold text-gray-500 mb-2">Our Security</h3>
        <h2 className="font-bold text-3xl">Trusted Work and Projects</h2>
      </div>
      <div className="flex flex-wrap justify-between bg-black p-5">
  <div className="text-white flex-1 min-w-[200px] mx-2 mb-4">
    <div className="border border-white p-5 rounded-md flex flex-col items-center text-center">
      <h4 className="font-bold mt-2 text-xl">450</h4>
      <p>Objects Protected</p>
    </div>
  </div>
  <div className="text-white flex-1 min-w-[200px] mx-2 mb-4">
    <div className="border border-white p-5 rounded-md flex flex-col items-center text-center">
      <h4 className="font-bold mt-2 text-xl">125</h4>
      <p>Cameras Installed</p>
    </div>
  </div>
  <div className="text-white flex-1 min-w-[200px] mx-2 mb-4">
    <div className="border border-white p-5 rounded-md flex flex-col items-center text-center">
      <h4 className="font-bold mt-2 text-xl">235</h4>
      <p>Professionals</p>
    </div>
  </div>
  <div className="text-white flex-1 min-w-[200px] mx-2 mb-4">
    <div className="border border-white p-5 rounded-md flex flex-col items-center text-center">
      <h4 className="font-bold mt-2 text-xl">350</h4>
      <p>Qualified Staff</p>
    </div>
  </div>
</div>

    </div>
  );
}

export default SecurityPage;
