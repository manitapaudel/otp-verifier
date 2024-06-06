import { forwardRef, KeyboardEventHandler } from "react";

type NumberInputProps = {
  name: string;
  handleKeyUp: KeyboardEventHandler<HTMLInputElement>;
  extraClass: string;
};

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ name, handleKeyUp, extraClass }, ref) => {
    return (
      <input
        className={`text-5xl 500:text-9xl text-center text-textColor bg-secondary max-w-44 h-auto max-h-52 py-4 rounded-lg cursor-pointer placeholder:opacity-30
        ${extraClass}`}
        type="number"
        name={name}
        placeholder="0"
        onKeyUp={handleKeyUp}
        ref={ref}
        maxLength={1}
      />
    );
  }
);

// Setting the display name for the component
NumberInput.displayName = "NumberInput";

export default NumberInput;
