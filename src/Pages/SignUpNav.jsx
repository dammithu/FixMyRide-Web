import React from 'react';
import { ArrowRight } from 'lucide-react';

const SignUpNav = () => {
  return (
    <div className="flex w-full">
      <a href="#driver" className="flex-1 bg-indigo-900 hover:bg-indigo-800 transition-colors duration-200 p-6 flex items-center justify-between">
        <span className="text-white text-lg">Sign up to drive</span>
        <ArrowRight className="text-blue-400" size={24} />
      </a>
      <a href="#rider" className="flex-1 bg-indigo-800 hover:bg-indigo-700 transition-colors duration-200 p-6 flex items-center justify-between">
        <span className="text-white text-lg">Sign up to ride</span>
        <ArrowRight className="text-blue-400" size={24} />
      </a>
    </div>
  );
};

export default SignUpNav;