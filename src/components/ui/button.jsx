import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '' 
}) => {
  const baseStyles = "px-8 py-3 rounded-full font-semibold transition-all duration-300";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "border-2 border-white text-white hover:bg-white hover:text-black",
    gradient: "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-2xl hover:shadow-purple-500/50"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;