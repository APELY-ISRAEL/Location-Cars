import React from "react";
import { cn } from "@/lib/utils";

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variantStyle?: "default" | "danger";
}

const BaseButton = ({ children, className, variantStyle = "default", ...props }: BaseButtonProps) => {
  const variants = {
    default: "bg-primary-50 hover:bg-primary-100",
    danger: "bg-error text-white hover:bg-error/90",
  };

  return (
    <button
      className={cn(
        "w-full text-white py-4 rounded-lg font-poppins-medium text-[1rem] transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variantStyle],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default BaseButton;
