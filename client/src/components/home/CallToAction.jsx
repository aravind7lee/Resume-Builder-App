import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div>
      <div
        id="cta"
        className="w-full max-w-6xl mx-auto px-4 sm:px-10 md:px-16 mt-20 sm:mt-28"
      >
        <div className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-3xl shadow-2xl shadow-green-500/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
          <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-6 sm:gap-8 px-6 sm:px-10 md:px-16 py-12 sm:py-16 md:py-20 relative z-10">
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold max-w-md text-white leading-tight px-2 mb-3">
                Build a Professional Resume That Helps You Stand Out
              </p>
              <p className="text-green-100 text-sm sm:text-base max-w-md">Join thousands of professionals who landed their dream jobs</p>
            </div>
            <Link
              to="/app?state=register"
              className="relative flex items-center justify-center gap-2 rounded-full py-4 sm:py-5 px-10 sm:px-12 bg-white text-green-600 hover:bg-gray-50 transition-all shadow-2xl hover:shadow-white/50 font-bold text-base sm:text-lg w-full sm:w-auto max-w-xs sm:max-w-none transform hover:scale-110 group overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-green-100/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative z-10">Get Started Free</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 relative z-10"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
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
    </div>
  );
};

export default CallToAction;
