import Image from "next/image";
import { ColorSwatches } from "src/util/ColorSwatches";
import CheckMark from "../../../public/icons/checkmark.png";
import clsx from "clsx";
import { useColorStore } from "@/stores/colorStore";

const ColorPicker = () => {
  const { currentColor } = useColorStore();
  return (
    <>
      <div className="grid grid-cols-6 w-full gap-2 gap-y-4">
        {ColorSwatches.map((color) => {
          return (
            <div
              key={color.name}
              className="relative"
              onTouchStart={() => {
                useColorStore.setState({ currentColor: color.name });
                console.log(color.name, currentColor);
              }}
            >
              <Image
                className={`w-20 h-20 cursor-pointer`}
                src={color.image}
                alt={"color swatch"}
              />
              <Image
                src={CheckMark}
                alt="checkmark"
                className={clsx(
                  currentColor === color.name ? "block" : "hidden",
                  "absolute top-1/2 right-1/2 w-[22px] h-[18px] scale-150 -mt-2"
                )}
              />
            </div>
          );
        })}
      </div>
      <div className="divider" />
    </>
  );
};

export default ColorPicker;
