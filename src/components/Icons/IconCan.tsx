import clsx from "clsx";
import Panel from "../Panel/Panel";
import { colorOptions } from "@/stores/colorStore";
import { useTogglesStore } from "@/stores/togglesStore";

type IconGoodProps = {
  word: string;
  strokeColor: string;
  strokeWidth: string;
  iconColor: colorOptions;
};

const iconColorStyles = (
  iconColor: colorOptions,
  isDesaturateColors: boolean,
  isDarkerColors: boolean
) => {
  switch (iconColor) {
    case "white":
      return "fill-white";
    case "black":
      return "fill-black";
    case "gray":
      return "fill-gray";
    case "red":
      if (isDesaturateColors && isDarkerColors) {
        return "fill-red-darkdesaturated";
      } else if (isDesaturateColors) {
        return "fill-red-desaturated";
      } else if (isDarkerColors) {
        return "fill-red-dark";
      }
      return "fill-red";
    case "blue":
      if (isDesaturateColors && isDarkerColors) {
        return "fill-blue-darkdesaturated";
      } else if (isDesaturateColors) {
        return "fill-blue-desaturated";
      } else if (isDarkerColors) {
        return "fill-blue-dark";
      }
      return "fill-blue";
    case "green":
      if (isDesaturateColors && isDarkerColors) {
        return "fill-green-darkdesaturated";
      } else if (isDesaturateColors) {
        return "fill-green-desaturated";
      } else if (isDarkerColors) {
        return "fill-green-dark";
      }
      return "fill-green";
    case "yellow":
      if (isDesaturateColors && isDarkerColors) {
        return "fill-yellow-darkdesaturated";
      } else if (isDesaturateColors) {
        return "fill-yellow-desaturated";
      } else if (isDarkerColors) {
        return "fill-yellow-dark";
      }
      return "fill-yellow";
    case "purple":
      if (isDesaturateColors && isDarkerColors) {
        return "fill-purple-darkdesaturated";
      } else if (isDesaturateColors) {
        return "fill-purple-desaturated";
      } else if (isDarkerColors) {
        return "fill-purple-dark";
      }
      return "fill-purple";
    case "orange":
      if (isDesaturateColors && isDarkerColors) {
        return "fill-orange-darkdesaturated";
      } else if (isDesaturateColors) {
        return "fill-orange-desaturated";
      } else if (isDarkerColors) {
        return "fill-orange-dark";
      }
      return "fill-orange";
    case "skintone1":
      return "fill-skintone1";
    case "skintone2":
      return "fill-skintone2";
    case "skintone3":
      return "fill-skintone3";
    case "skintone4":
      return "fill-skintone4";
    case "skintone5":
      return "fill-skintone5";
    case "skintone6":
      return "fill-skintone6";
    default:
      return "fill-white";
  }
};

const IconCan = ({
  strokeWidth,
  strokeColor,
  iconColor,
  word,
}: IconGoodProps) => {
  const { isDesaturateColors, isDarkerColors, isBoldOutline } =
    useTogglesStore();
  return (
    <Panel word={word}>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        className="bg-[#BBFFC0] rounded-lg"
      >
        <g>
          <path d="M205.13,477.08c-3.27-1.96-5.78-4.75-7.54-8.37-1.76-3.63-2.64-7.86-2.64-12.71s.88-9.09,2.64-12.71c1.76-3.63,4.27-6.42,7.54-8.37s7.11-2.94,11.51-2.94c3.74,0,7,.71,9.78,2.13,2.78,1.42,4.84,3.45,6.17,6.07l-5.47,4.8c-2.36-3.56-5.81-5.34-10.34-5.34-3.96,0-6.98,1.39-9.07,4.17-2.09,2.78-3.14,6.84-3.14,12.18s1.02,9.34,3.07,12.14c2.05,2.8,5,4.2,8.87,4.2,4.8,0,8.34-1.78,10.61-5.34l5.47,4.8c-1.33,2.63-3.39,4.65-6.17,6.07-2.78,1.42-6.06,2.13-9.84,2.13-4.36,0-8.17-.98-11.44-2.94Z" />
          <path d="M241.79,478.64c-1.73-.91-3.09-2.18-4.07-3.8-.98-1.62-1.47-3.44-1.47-5.44,0-3.43,1.36-6.05,4.07-7.87,2.71-1.82,6.58-2.74,11.61-2.74h5.21v-1.4c0-1.78-.52-3.15-1.57-4.1-1.04-.96-2.53-1.44-4.44-1.44s-3.91.36-5.74,1.07c-1.82.71-3.32,1.69-4.47,2.94l-3.74-4.94c1.82-1.74,3.98-3.1,6.47-4.1,2.49-1,5.07-1.5,7.74-1.5,4.45,0,7.94,1.05,10.48,3.14,2.54,2.09,3.8,4.98,3.8,8.67v15.21c0,1.02.08,2.22.23,3.6.16,1.38.34,2.51.57,3.4h-7.54c-.27-.58-.47-1.14-.6-1.7-.13-.56-.24-1.32-.33-2.3h-.13c-2.54,3.11-5.94,4.67-10.21,4.67-2.18,0-4.14-.46-5.87-1.37ZM255.04,471.97c1.4-1.09,2.1-2.48,2.1-4.17v-3.34h-5.47c-2.27,0-4.01.42-5.24,1.27-1.22.85-1.84,2.07-1.84,3.67,0,1.33.46,2.37,1.37,3.1.91.73,2.17,1.1,3.77,1.1,2.13,0,3.9-.54,5.3-1.64Z" />
          <path d="M272.69,454.79c0-4.05-.09-6.98-.27-8.81h8.01c.22,1.87.33,3.8.33,5.81h.2c.8-1.96,2.21-3.53,4.24-4.7,2.02-1.18,4.28-1.77,6.77-1.77,3.83,0,6.72,1.29,8.67,3.87,1.96,2.58,2.94,6.38,2.94,11.41v18.75h-8.47v-18.82c0-2.89-.47-5-1.4-6.34-.93-1.33-2.43-2-4.47-2-2.36,0-4.28.83-5.77,2.5s-2.23,3.81-2.23,6.44v18.22h-8.54v-24.56Z" />
        </g>
        <g
          className={clsx(
            strokeWidth,
            strokeColor,
            iconColorStyles(iconColor, isDesaturateColors, isDarkerColors)
          )}
        >
          <path
            className="fill-black"
            d="M108.27,301.03c-8.72-5.22-15.42-12.66-20.11-22.33-4.69-9.67-7.03-20.97-7.03-33.9s2.34-24.23,7.03-33.9c4.68-9.67,11.39-17.11,20.11-22.33,8.72-5.22,18.95-7.83,30.69-7.83,9.97,0,18.65,1.9,26.07,5.69,7.41,3.8,12.9,9.19,16.46,16.19l-14.59,12.81c-6.29-9.49-15.48-14.24-27.58-14.24-10.56,0-18.63,3.71-24.2,11.12-5.58,7.42-8.36,18.24-8.36,32.47s2.73,24.91,8.18,32.39c5.46,7.47,13.35,11.21,23.67,11.21,12.81,0,22.24-4.74,28.29-14.24l14.59,12.81c-3.56,7-9.05,12.4-16.46,16.19-7.42,3.8-16.16,5.69-26.25,5.69-11.63,0-21.8-2.61-30.52-7.83Z"
          />
          <path
            className="fill-black"
            d="M264.41,286.44h-42.88l-6.23,20.64h-26.69l43.06-124.56h22.6l43.06,124.56h-26.69l-6.23-20.64ZM258.18,265.97l-15.13-49.82-15.3,49.82h30.43Z"
          />
          <path
            className="fill-black"
            d="M412.28,182.52v124.56h-23.67l-51.07-81.85v81.85h-25.45v-124.56h24.73l50,80.61v-80.61h25.45Z"
          />
        </g>
      </svg>
    </Panel>
  );
};

export default IconCan;
