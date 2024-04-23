"use client";

import { useState } from "react";
import { clsx } from "clsx";

type PanelProps = {
  className?: string;
  children?: React.ReactNode;
};

const Panel = ({ children, className }: PanelProps) => {
  const [pressed, setpressed] = useState(false);
  return (
    <button
      type="button"
      className={clsx(
        "rounded-lg w-full h-full bg-gray-100",
        !pressed ? "card-shadow-off" : "card-shadow-on",
        className
      )}
      onMouseDown={() => setpressed(true)}
      onMouseUp={() => setpressed(false)}
      onTouchStart={() => setpressed(true)}
      onTouchEnd={() => setpressed(false)}
    >
      {children}
    </button>
  );
};

export default Panel;
