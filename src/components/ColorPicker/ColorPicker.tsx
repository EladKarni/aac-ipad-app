import Image from "next/image";
import React from "react";
import { ColorSwatches } from "src/util/ColorSwatches";

const ColorPicker = () => {
  return (
    <>
      <div className="grid grid-cols-6 w-full gap-2 gap-y-4">
        {ColorSwatches.map((color) => {
          return (
            <Image
              className={`w-20 h-20 cursor-pointer relative`}
              src={color.image}
              alt={"color swatch"}
              key={color.name}
            />
          );
        })}
      </div>
      <div className="divider" />
    </>
  );
};

export default ColorPicker;
