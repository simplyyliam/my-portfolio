import type { HtmlHTMLAttributes } from "react";

export const Wrapper: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div 
      className={`flex h-full items-center 
      sm:w-175 w-full px-3 sm:px-0 ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};