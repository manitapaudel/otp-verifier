import { useState } from "react";

type NumberInput = {
  name: string;
};

const NumberInput = ({ name }: NumberInput) => {
  const [value, setValue] = useState<number>(null);

  return (
    <input
      className={`text-9xl text-center text-textColor bg-secondary max-w-44 h-auto max-h-52 py-4 rounded-lg cursor-pointer placeholder:opacity-30 ${
        value ? "border border-1 border-textColor" : ""
      }`}
      type="number"
      name={name}
      value={value}
      placeholder="0"
    />
  );
};

export default NumberInput;
