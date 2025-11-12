import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div id="cta" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-green-600 rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 sm:px-10 md:px-16 py-12 sm:py-16">
            <div className="text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Ready to Build Your Professional Resume?
              </h2>
              <p className="text-green-50 text-base sm:text-lg max-w-xl">
                Join thousands of professionals who landed their dream jobs. Start creating your resume today - it's free!
              </p>
            </div>
            <Link
              to="/app?state=register"
              className="flex items-center justify-center gap-2 rounded-lg py-3.5 px-8 bg-white text-green-600 hover:bg-gray-50 transition-all duration-200 font-semibold text-base shadow-lg hover:shadow-xl w-full md:w-auto whitespace-nowrap"
            >
              Get Started Free
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
