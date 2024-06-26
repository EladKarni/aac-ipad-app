import clsx from "clsx";
import { useState } from "react";

type ButtonProps = {
  disabled?: boolean;
  checked?: boolean;
  text: string;
};

const Button = ({ text, disabled = false, checked = false }: ButtonProps) => {
  const [istoggled, setIstoggled] = useState(checked);
  return (
    <button
      onClick={() => setIstoggled(!istoggled)}
      className={clsx(
        "btn-switch w-52 h-20 flex items-center justify-center text-4xl capitalize disabled:text-gray-500",
        istoggled ? "toggle-active-state bg-[#FFC635]" : "toggle-default-state"
      )}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
