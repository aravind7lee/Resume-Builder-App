import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div>
      <div
        id="cta"
        className="border-y border-dashed border-slate-200 w-full max-w-5xl mx-auto px-4 sm:px-10 md:px-16 mt-20 sm:mt-28"
      >
        <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-6 sm:gap-8 px-3 sm:px-6 md:px-10 border-x border-dashed border-slate-200 py-12 sm:py-16 md:py-20 -mt-10 -mb-10 w-full">
          <p className="text-lg sm:text-xl md:text-2xl font-bold max-w-md text-gray-900 leading-snug px-2">
            Build a Professional Resume That Helps You Stand Out and Get Hired
          </p>
          <Link
            to="/app?state=register"
            className="flex items-center justify-center gap-2 rounded-full py-3 sm:py-4 px-8 sm:px-10 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl text-white font-bold transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <span>Get Started Free</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 sm:size-5"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
