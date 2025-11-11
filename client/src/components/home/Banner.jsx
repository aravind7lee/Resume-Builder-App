import React from "react";

const Banner = () => {
  return (
    
      <div className="w-full py-2.5 sm:py-3 font-medium text-xs sm:text-sm text-gray-800 text-center bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border-b border-green-100">
        <p className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-4">
          <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-white bg-gradient-to-r from-green-600 to-emerald-600 text-xs font-bold shadow-md">
            ✨ NEW
          </span>
          <span className="font-semibold text-green-800">AI-Powered Resume Builder - Create Professional Resumes</span>
        </p>
      </div>
    
  );
};

export default Banner;
