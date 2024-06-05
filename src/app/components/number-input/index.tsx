import { forwardRef, KeyboardEventHandler, useState } from "react";

type NumberInputProps = {
  name: string;
  handleKeyUp: KeyboardEventHandler<HTMLInputElement>;
};

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  ({ name, handleKeyUp }, ref) => {
    const [value] = useState<number | null>(null);

    return (
      <input
        className={`text-9xl text-center text-textColor bg-secondary max-w-44 h-auto max-h-52 py-4 rounded-lg cursor-pointer placeholder:opacity-30 ${
          value ? "border border-1 border-textColor" : ""
        }`}
        type="number"
        name={name}
        placeholder="0"
        onKeyDown={handleKeyUp}
        ref={ref}
        maxLength={1}
      />
    );
  }
);

// Setting the display name for the component
NumberInput.displayName = "NumberInput";

export default NumberInput;
