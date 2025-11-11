import React from "react";

const Banner = () => {
  return (
    <>
      <div className="w-full py-2.5 sm:py-3 font-medium text-white text-center bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 relative z-10">
          <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold shadow-lg whitespace-nowrap">
            ✨ NEW FEATURE
          </span>
          <span className="font-bold text-xs sm:text-sm">AI-Powered Resume Builder</span>
        </div>
      </div>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </>
  );
};

export default Banner;
