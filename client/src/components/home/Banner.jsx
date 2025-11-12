import { Sparkles, ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[51] w-full py-2.5 sm:py-3 font-medium text-xs sm:text-sm text-center bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 shadow-lg">
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4">
        <div className="flex items-center gap-1 sm:gap-2 animate-pulse flex-shrink-0">
          <Sparkles size={14} className="text-yellow-300 sm:w-4 sm:h-4" />
          <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold text-green-600 bg-white shadow-sm">
            NEW
          </span>
        </div>
        <p className="text-white font-semibold flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm">
          <span className="truncate">AI-Powered Resume Builder Now Live!</span>
          <ArrowRight size={14} className="animate-bounce-x flex-shrink-0 sm:w-4 sm:h-4" />
        </p>
      </div>
      
      <style>{`
        @keyframes bounce-x {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(4px);
          }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default Banner;
