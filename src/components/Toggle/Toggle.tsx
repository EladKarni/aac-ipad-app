"use client";
import clsx from "clsx";
import { useState } from "react";

const Toggle = () => {
  const [istoggled, setIstoggled] = useState(false);
  return (
    <label className="cursor-pointer label">
      <span className="label-text">Remember me</span>
      <input
        type="checkbox"
        className={clsx(
          "toggle bg-white hover:bg-white border-transparent",
          istoggled ? "[--tglbg:#A2A2A2]" : "[--tglbg:#FFC635]"
        )}
        checked={istoggled}
        onClick={() => setIstoggled(!istoggled)}
      />
    </label>
  );
};

export default Toggle;
