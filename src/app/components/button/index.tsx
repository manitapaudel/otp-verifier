import { MouseEventHandler, forwardRef } from "react";

interface ButtonProps {
  label: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, handleClick }, ref) => {
    return (
      <button
        className="text-white text-lg bg-secondary hover:opacity-80 w-1/2 rounded-lg py-4"
        onClick={handleClick}
        ref={ref}
      >
        {label}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
