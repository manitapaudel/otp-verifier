import { useState } from "react";

type NumberInput = {
  name: string;
};

const NumberInput = ({ name }: NumberInput) => {
  const [value, setValue] = useState<number>(null);

  return (
    <input
      className="rounded-lg text-9xl text-center h-56 border-textColor bg-secondary text-textColor"
      type="text"
      name={name}
      value={value}
      // maxLength={1}
      size={1}
    />
  );
};

export default NumberInput;
