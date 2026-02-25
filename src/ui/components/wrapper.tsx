import type { HtmlHTMLAttributes } from "react";

export const Wrapper: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
    children,
    className,
    ...props
}) => {
  return (
    <div className={`flex w-175 h-full items-center ${className}`} {...props}>
      {children}
    </div>
  );
};
