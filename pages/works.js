import React from "react";

const works = () => {
  return (
    <div className="w-screen h-full p-5">
      <h1 className="text-4xl font-bold mb-5">Our Works</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Replace this with your actual data */}
        {Array(9).fill().map((_, i) => (
          <div key={i} className="border rounded-lg p-3">
            <h2 className="font-semibold text-xl mb-2">Work {i + 1}</h2>
            <p className="text-gray-500">Description of work {i + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default works;