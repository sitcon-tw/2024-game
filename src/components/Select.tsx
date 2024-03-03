import { twMerge } from "tailwind-merge";
import { ChevronDown } from "lucide-react";
export default function Select({
  children,
  className,
  containerClassName = "",
  ...props
}: {
  containerClassName?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className={twMerge("relative", containerClassName)}>
      <select {...props} className={className}>
        {children}
      </select>
      <ChevronDown
        strokeWidth={1}
        size={24}
        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 transform"
      />
    </div>
  );
}