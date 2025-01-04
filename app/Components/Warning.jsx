import React from "react";

const UnderConstruction = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 max-w-md">
        <img
        width={100} height={100}
          src="./walruslogo.png" // Replace with your client's logo URL
          alt="Company Logo"
          className="md:ml-36 ml-24 mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Website Under Construction
        </h1>
        <p className="text-gray-600 mb-6">
          We’re currently working on something exciting! Please check back soon.
        </p>
        <p className="text-gray-500 text-sm">
          For inquiries, contact us at{" "}
          <a
            href="mailto:info@walrus.ae"
            className="text-blue-600 hover:underline"
          >
            info@walrus.ae
          </a>
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
