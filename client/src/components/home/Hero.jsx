import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/features/authSlice";

const Hero = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleLogout = () => {
    dispatch(logout());
    setMenuOpen(false);
    navigate("/");
  };

  const logos = [
    "https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/framer.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg",
  ];

  return (
    <>
      {/* Navbar - Fixed */}
      <nav className="fixed top-[40px] left-0 right-0 z-50 flex items-center justify-between w-full py-4 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 text-sm bg-white/95 backdrop-blur-md border-b border-gray-100">
          <a href="#" className="flex items-center">
            <img src="/logo.png" alt="logo" className="h-9 sm:h-10 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-7 text-gray-600 font-medium">
            <a href="#" className="hover:text-green-600 transition-colors duration-200">
              Home
            </a>
            <a href="#features" className="hover:text-green-600 transition-colors duration-200">
              Features
            </a>
            <a href="#testimonials" className="hover:text-green-600 transition-colors duration-200">
              Testimonials
            </a>
            <a href="#cta" className="hover:text-green-600 transition-colors duration-200">
              Contact
            </a>
          </div>

          <div className="flex gap-3">
            <Link
              to="/app?state=login"
              className="hidden md:block px-5 py-2 border border-gray-300 hover:border-green-600 hover:bg-green-50 transition-all duration-200 rounded-lg text-gray-700 font-medium text-sm"
              hidden={user}
            >
              Login
            </Link>
            <Link
              to="/app?state=register"
              className="hidden md:block px-5 py-2 bg-green-600 hover:bg-green-700 transition-all duration-200 rounded-lg text-white font-medium text-sm"
              hidden={user}
            >
              Get Started
            </Link>

            <Link
              to="/app"
              className="hidden md:block px-6 py-2 bg-green-600 hover:bg-green-700 transition-all duration-200 rounded-lg text-white font-medium text-sm"
              hidden={!user}
            >
              Dashboard
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-700"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm md:hidden transition-opacity"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-emerald-50">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="logo" className="h-10 w-auto" />
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 hover:bg-white rounded-lg transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-600"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Sidebar Menu Items */}
            <div className="py-6 px-4 space-y-2">
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-green-50 transition-colors group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-600 group-hover:text-green-600"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span className="font-semibold text-gray-700 group-hover:text-green-600">Home</span>
              </a>

              <a
                href="#features"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-green-50 transition-colors group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-600 group-hover:text-green-600"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                <span className="font-semibold text-gray-700 group-hover:text-green-600">Features</span>
              </a>

              <a
                href="#testimonials"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-green-50 transition-colors group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-600 group-hover:text-green-600"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className="font-semibold text-gray-700 group-hover:text-green-600">Testimonials</span>
              </a>

              <a
                href="#cta"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-green-50 transition-colors group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-600 group-hover:text-green-600"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span className="font-semibold text-gray-700 group-hover:text-green-600">Contact</span>
              </a>

            </div>

            {/* Action Buttons - Below Menu */}
            <div className="px-4 pb-4 pt-2 border-t border-gray-200 space-y-2">
              {!user && (
                <>
                  <Link
                    to="/app?state=login"
                    onClick={() => setMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 px-6 py-2.5 border-2 border-green-600 text-green-600 rounded-xl font-bold transition-all hover:bg-green-50"
                  >
                    Login
                  </Link>
                  <Link
                    to="/app?state=register"
                    onClick={() => setMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-bold transition-all shadow-md hover:shadow-lg"
                  >
                    Get Started
                  </Link>
                </>
              )}
              {user && (
                <>
                  <Link
                    to="/app"
                    onClick={() => setMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-bold transition-all shadow-md hover:shadow-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                      <line x1="9" y1="3" x2="9" y2="21"></line>
                    </svg>
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all shadow-md hover:shadow-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    Logout
                  </button>
                </>
              )}
            </div>
        </div>
      </div>

      <div className="min-h-screen pb-12 sm:pb-20 bg-white relative overflow-x-hidden">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 sm:pt-44 md:pt-48 pb-8 sm:pb-12">
          <div className="flex flex-col items-center text-center">
          {/* Avatars + Stars */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                alt="user"
                className="w-9 h-9 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="user"
                className="w-9 h-9 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="user"
                className="w-9 h-9 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="user"
                className="w-9 h-9 rounded-full border-2 border-white object-cover"
              />
            </div>

            <div className="flex flex-col items-start">
              <div className="flex gap-0.5">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#16a34a"
                      className="text-green-600"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  ))}
              </div>
              <p className="text-xs text-gray-600 mt-0.5">10,000+ users</p>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 max-w-4xl mt-6 leading-tight">
            Land Your Dream Job with{" "}
            <span className="text-green-600">AI-Powered</span> Resumes
          </h1>

          <p className="max-w-2xl text-gray-600 text-base sm:text-lg mt-6 px-4">
            Create professional, ATS-friendly resumes in minutes with intelligent AI assistance. Stand out from the crowd and get hired faster.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-8 w-full sm:w-auto px-4">
            <Link
              to="/app"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-lg px-8 py-3.5 font-medium transition-colors duration-200"
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
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-300 hover:border-green-600 hover:bg-green-50 transition-all duration-200 rounded-lg px-8 py-3.5 text-gray-700 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                <rect x="2" y="6" width="14" height="12" rx="2"></rect>
              </svg>
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Trusted By Section */}
          <div className="mt-16 sm:mt-20">
            <p className="text-sm text-gray-500 mb-6">
              Trusted by professionals at leading companies
            </p>

            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 max-w-4xl mx-auto">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt="company logo"
                  className="h-6 sm:h-7 w-auto opacity-60 hover:opacity-100 transition-opacity duration-200"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>
        {`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

                    * {
                        font-family: 'Poppins', sans-serif;
                    }
                `}
      </style>
    </>
  );
};

export default Hero;
