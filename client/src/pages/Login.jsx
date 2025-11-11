import { useState } from "react";
import { Lock, Mail, User2Icon, Eye, EyeOff } from "lucide-react";
import logo from "../assets/logo.png";
import api from "../configs/api";
import { useDispatch } from "react-redux";
import { login } from "../app/features/authSlice";
import toast from "react-hot-toast";

const Login = () => {
  const dispatch = useDispatch();

  const query = new URLSearchParams(window.location.search);
  const urlState = query.get("state");
  const [state, setState] = useState(urlState || "login");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post(`/api/users/${state}`, formData);

      dispatch(login(data));
      localStorage.setItem("token", data.token);

      toast.success(data.message);
    } catch (error) {
      toast(error?.response?.data?.message || error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img 
            src={logo} 
            alt="Resume Builder Logo" 
            className="h-20 sm:h-24 w-auto object-contain"
          />
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 space-y-5"
        >
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {state === "login" ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-gray-500 text-sm">
              {state === "login" ? "Sign in to continue" : "Sign up to get started"}
            </p>
          </div>

          {/* Name Input - Sign Up Only */}
          {state !== "login" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <div className="flex items-center w-full bg-white border border-gray-300 focus-within:border-green-500 h-12 rounded-lg px-4 gap-3 transition-colors">
                <User2Icon size={18} className="text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="border-none outline-none ring-0 bg-transparent flex-1 text-gray-800 placeholder:text-gray-400"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <div className="flex items-center w-full bg-white border border-gray-300 focus-within:border-green-500 h-12 rounded-lg px-4 gap-3 transition-colors">
              <Mail size={18} className="text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="border-none outline-none ring-0 bg-transparent flex-1 text-gray-800 placeholder:text-gray-400"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="flex items-center w-full bg-white border border-gray-300 focus-within:border-green-500 h-12 rounded-lg px-4 gap-3 transition-colors">
              <Lock size={18} className="text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="border-none outline-none ring-0 bg-transparent flex-1 text-gray-800 placeholder:text-gray-400"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="focus:outline-none flex-shrink-0 cursor-pointer p-1 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <EyeOff size={18} className="text-gray-400 hover:text-gray-600" />
                ) : (
                  <Eye size={18} className="text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password - Login Only */}
          {state === "login" && (
            <div className="text-right">
              <button className="text-sm text-green-600 hover:text-green-700 font-medium hover:underline" type="button">
                Forgot password?
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-12 rounded-lg text-white font-semibold bg-green-600 hover:bg-green-700 transition-colors"
          >
            {state === "login" ? "Sign In" : "Create Account"}
          </button>

          {/* Toggle Auth State */}
          <div className="text-center pt-4">
            <p className="text-gray-600 text-sm">
              {state === "login"
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={() =>
                  setState((prev) => (prev === "login" ? "register" : "login"))
                }
                className="text-green-600 hover:text-green-700 font-semibold hover:underline"
              >
                {state === "login" ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </form>

        {/* Footer Text */}
        <p className="text-center text-xs text-gray-500 mt-6">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;
