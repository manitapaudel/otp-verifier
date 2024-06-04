import { useState } from "react";

type NumberInput = {
  name: string;
};

const NumberInput = ({ name }: NumberInput) => {
  const [value, setValue] = useState<number>(null);

  return (
    <input
      className="text-9xl text-center text-textColor bg-secondary h-56 rounded-lg cursor-pointer"
      type="number"
      name={name}
      value={value}
    />
  );
};

export default NumberInput;
