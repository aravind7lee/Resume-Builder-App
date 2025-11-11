import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../app/features/authSlice";
import { Menu, X, Home, FileText, User, LogOut } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const logoutUser = () => {
    navigate("/");
    dispatch(logout());
    setSidebarOpen(false);
  };

  return (
    <>
      <div className="shadow-md bg-white sticky top-0 z-50">
        <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 py-4 text-slate-800">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="logo" className="h-10 sm:h-11 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <p className="font-medium text-gray-700">Hi, {user?.name}</p>
            </div>
            <button
              onClick={logoutUser}
              className="bg-white hover:bg-red-50 border-2 border-gray-200 hover:border-red-500 px-6 py-2 rounded-full active:scale-95 transition-all font-semibold text-gray-700 hover:text-red-600 flex items-center gap-2"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu size={24} className="text-gray-700" />
          </button>
        </nav>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-emerald-50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-bold text-gray-800 text-lg">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 hover:bg-white rounded-lg transition-colors"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>

          {/* Sidebar Menu Items */}
          <div className="flex-1 py-6 px-4 space-y-2">
            <Link
              to="/"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-green-50 transition-colors group"
            >
              <Home size={22} className="text-gray-600 group-hover:text-green-600" />
              <span className="font-semibold text-gray-700 group-hover:text-green-600">Home</span>
            </Link>

            <Link
              to="/app"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-green-50 transition-colors group"
            >
              <FileText size={22} className="text-gray-600 group-hover:text-green-600" />
              <span className="font-semibold text-gray-700 group-hover:text-green-600">My Resumes</span>
            </Link>

            <Link
              to="/app"
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-green-50 transition-colors group"
            >
              <User size={22} className="text-gray-600 group-hover:text-green-600" />
              <span className="font-semibold text-gray-700 group-hover:text-green-600">Profile</span>
            </Link>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={logoutUser}
              className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
