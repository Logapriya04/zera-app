// components/HolographicButton.js
"use client"
const HolographicButton = () => {
  return (
    <button className="relative w-72 h-16 bg-gray-900 rounded-lg overflow-hidden flex justify-center items-center transition-transform duration-500 hover:scale-105 hover:shadow-xl/20 hover:shadow-yellow-400 group">
      <span className="text-gray-50 font-medium text-2xl z-10 ">
        Get in Touch
      </span>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-transparent/30 via-yellow-500/30 rotate-[-45deg] transition-opacity duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-[100%] before:content-[''] before:absolute before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-t before:from-transparent before:to-transparent/30 before:via-yellow-500/30 before:rotate-[-45deg] before:transition-opacity before:duration-500 before:opacity-0 group-hover:before:opacity-100 group-hover:before:translate-y-[100%]" />
    </button>
  );
};
export default HolographicButton;
