import { forwardRef } from "react";

interface ButtonProps {
  label: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ label }, ref) => {
  return (
    <button
      className="text-white text-lg bg-secondary hover:opacity-80 w-1/2 rounded-lg py-4"
      ref={ref}
    >
      {label}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
