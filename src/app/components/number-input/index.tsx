import { useState } from "react";

type NumberInput = {
  name: string;
};

const NumberInput = ({ name }: NumberInput) => {
  const [value, setValue] = useState<number>(null);

  return (
    <input
      className="rounded-lg text-9xl text-center h-56 border-textColor bg-secondary text-textColor"
      type="number"
      name={name}
      value={value}
    />
  );
};

export default NumberInput;
