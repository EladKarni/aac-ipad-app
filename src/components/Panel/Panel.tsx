"use client";

import { useState } from "react";
import { clsx } from "clsx";

type PanelProps = {
  children?: React.ReactNode;
};

const Panel = ({ children }: PanelProps) => {
  const [pressed, setpressed] = useState(false);
  return (
    <button
      type="button"
      className={clsx(
        "card w-full h-full text-primary-content",
        !pressed ? "card-shadow-off" : "card-shadow-on"
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
