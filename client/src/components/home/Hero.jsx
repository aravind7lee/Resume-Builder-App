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
      <div className="min-h-screen pb-20 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/30 relative overflow-x-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        {/* Navbar */}
        <nav className="sticky top-0 z-50 flex items-center justify-between w-full py-3 sm:py-4 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-40 text-sm bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
          <a href="#">
            <img src="/logo.png" alt="logo" className="h-10 sm:h-12 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8 transition duration-500 text-gray-700 font-medium">
            <a href="#" className="hover:text-green-600 transition-colors">
              Home
            </a>
            <a href="#features" className="hover:text-green-600 transition-colors">
              Features
            </a>
            <a href="#testimonials" className="hover:text-green-600 transition-colors">
              Testimonials
            </a>
            <a href="#cta" className="hover:text-green-600 transition-colors">
              Contact
            </a>
          </div>

          <div className="flex gap-2 sm:gap-3">
            <Link
              to="/app?state=register"
              className="hidden md:block px-5 sm:px-7 py-2 sm:py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 active:scale-95 transition-all rounded-full text-white font-semibold shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-500/60 text-sm"
              hidden={user}
            >
              Get Started
            </Link>
            <Link
              to="/app?state=login"
              className="hidden md:block px-5 sm:px-7 py-2 sm:py-2.5 border-2 border-gray-200 active:scale-95 hover:border-green-600 hover:bg-green-50 transition-all rounded-full text-gray-700 font-semibold text-sm"
              hidden={user}
            >
              Login
            </Link>

            <Link
              to="/app"
              className="hidden md:block px-6 sm:px-8 py-2 sm:py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 active:scale-95 transition-all rounded-full text-white font-semibold shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-500/60 text-sm"
              hidden={!user}
            >
              Dashboard
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden active:scale-90 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="lucide lucide-menu"
            >
              <path d="M4 5h16M4 12h16M4 19h16" />
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
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out md:hidden ${
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
            <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
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

              {user && (
                <Link
                  to="/app"
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
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="9" y1="3" x2="9" y2="21"></line>
                  </svg>
                  <span className="font-semibold text-gray-700 group-hover:text-green-600">Dashboard</span>
                </Link>
              )}
            </div>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-gray-200 space-y-2">
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

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-sm px-4 sm:px-6 md:px-16 lg:px-24 xl:px-40 text-black pt-8 sm:pt-12 md:pt-16">
          {/* Avatars + Stars */}
          <div className="flex items-center mt-6 sm:mt-8 md:mt-12">
            <div className="flex -space-x-2 sm:-space-x-3 pr-3 sm:pr-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                alt="user3"
                className="size-8 sm:size-10 object-cover rounded-full border-2 sm:border-3 border-white shadow-md hover:-translate-y-1 transition z-[1]"
              />
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="user1"
                className="size-8 sm:size-10 object-cover rounded-full border-2 sm:border-3 border-white shadow-md hover:-translate-y-1 transition z-2"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="user2"
                className="size-8 sm:size-10 object-cover rounded-full border-2 sm:border-3 border-white shadow-md hover:-translate-y-1 transition z-[3]"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
                alt="user3"
                className="size-8 sm:size-10 object-cover rounded-full border-2 sm:border-3 border-white shadow-md hover:-translate-y-1 transition z-[4]"
              />
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="user5"
                className="size-8 sm:size-10 rounded-full border-2 sm:border-3 border-white shadow-md hover:-translate-y-1 transition z-[5]"
              />
            </div>

            <div>
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star text-transparent fill-green-600"
                      aria-hidden="true"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-700 font-semibold">Trusted by 10,000+ professionals</p>
            </div>
          </div>

          {/* Headline + CTA */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold max-w-5xl text-center mt-6 sm:mt-8 leading-tight sm:leading-tight md:leading-[70px] lg:leading-[85px] text-gray-900 px-2 animate-fade-in-up">
            Land Your Dream Job with{" "}
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent animate-gradient">
              AI-Powered
            </span>{" "}
            Resumes
          </h1>

          <p className="max-w-2xl text-center text-base sm:text-lg my-6 sm:my-8 text-gray-700 leading-relaxed font-semibold px-4 animate-fade-in-up animation-delay-200">
            Create stunning, ATS-friendly resumes in minutes with our intelligent AI assistant. Stand out from the crowd and get hired faster.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2 w-full sm:w-auto px-4 sm:px-0">
            <Link
              to="/app"
              className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white rounded-full px-8 sm:px-10 h-12 sm:h-14 flex items-center justify-center gap-2 transition-all shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 font-bold text-sm sm:text-base transform hover:scale-110 w-full sm:w-auto animate-pulse-slow overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative z-10">
              Get Started Free</span>
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
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
            <button className="flex items-center justify-center gap-2 sm:gap-3 border-2 border-gray-300 hover:border-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all rounded-full px-6 sm:px-8 h-12 sm:h-14 text-gray-700 hover:text-green-700 font-bold text-sm sm:text-base w-full sm:w-auto shadow-md hover:shadow-lg transform hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-play-circle"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
              <span>Watch Demo</span>
            </button>
          </div>

          <p className="py-4 sm:py-6 text-gray-500 mt-10 sm:mt-16 font-semibold text-xs sm:text-sm uppercase tracking-wide">
            Trusted by professionals at
          </p>

          <div
            className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-4xl w-full mx-auto py-4 opacity-60 hover:opacity-100 transition-opacity"
            id="logo-container"
          >
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="logo"
                className="h-6 sm:h-8 w-auto grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

                    * {
                        font-family: 'Poppins', sans-serif;
                    }
                    
                    @keyframes blob {
                        0%, 100% { transform: translate(0, 0) scale(1); }
                        25% { transform: translate(20px, -50px) scale(1.1); }
                        50% { transform: translate(-20px, 20px) scale(0.9); }
                        75% { transform: translate(50px, 50px) scale(1.05); }
                    }
                    
                    .animate-blob {
                        animation: blob 20s infinite;
                    }
                    
                    .animation-delay-2000 {
                        animation-delay: 2s;
                    }
                    
                    .animation-delay-4000 {
                        animation-delay: 4s;
                    }
                    
                    @keyframes fade-in-up {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    
                    .animate-fade-in-up {
                        animation: fade-in-up 0.8s ease-out;
                    }
                    
                    .animation-delay-200 {
                        animation-delay: 0.2s;
                        opacity: 0;
                        animation-fill-mode: forwards;
                    }
                    
                    @keyframes gradient {
                        0%, 100% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                    }
                    
                    .animate-gradient {
                        background-size: 200% 200%;
                        animation: gradient 3s ease infinite;
                    }
                    
                    .animate-pulse-slow {
                        animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                    }
                `}
      </style>
    </>
  );
};

export default Hero;
