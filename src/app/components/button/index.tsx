const Button = ({ label }: { label: string }) => {
  return (
    <button className="text-white text-lg bg-secondary hover:opacity-80 w-1/2 rounded-lg py-4">
      {label}
    </button>
  );
};

export default Button;
