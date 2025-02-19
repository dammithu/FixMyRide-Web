import React from "react";
import { ArrowRight } from "lucide-react";

const SignUpNav = () => {
  return (
    <div className="flex w-full">
      <a
        href="#driver"
        className="flex-1 hover:bg-indigo-800 transition-colors duration-200 py-8 px-6 flex flex-col items-center justify-center relative"
        style={{ backgroundColor: "#26215b" }}
      >
        <span className="text-white text-xl font-light mb-2 ">
          Sign up to drive
        </span>
        <div className="border-2 border-blue-400 rounded-full p-2 absolute right-28">
          <ArrowRight className="text-blue-400" size={16} />
        </div>
      </a>
      <a
        href="#rider"
        className="flex-1 hover:bg-purple-800 transition-colors duration-200 py-8 px-6 flex flex-col items-center justify-center relative"
        style={{ backgroundColor: "#443c81" }}
      >
        <span className="text-white text-xl font-light mb-2">
          Sign up to ride
        </span>
        <div className="border-2 border-blue-400 rounded-full p-2 absolute right-28">
          <ArrowRight className="text-blue-400" size={16} />
        </div>
      </a>
    </div>
  );
};

export default SignUpNav;
