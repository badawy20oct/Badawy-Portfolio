import React from "react";

interface ButtonProps {
  title: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ title, className, onClick }: ButtonProps) {
  return (
    <button
      className={`${className} mt-6 px-5 py-2 bg-primary cursor-pointer text-white rounded-lg shadow-md hover:bg-secondary transition`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
