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

const IconSelf = ({
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
        className="bg-[#FCFFC0] rounded-lg"
      >
        <g>
          <path d="M245.23,432.64h9.54v46.71h-9.54v-46.71Z" />
        </g>
        <g
          className={clsx(
            strokeWidth,
            strokeColor,
            iconColorStyles(iconColor, isDesaturateColors, isDarkerColors)
          )}
        >
          <g>
            <path d="M287.47,113.75h-84.48c-9.76,0-17.48,8.29-16.75,18.04l6.25,83.47c.24,3.28,2.98,5.83,6.28,5.83,3.49,0,6.31-2.82,6.31-6.31v-62.17c0-2.79,2.26-5.04,5.03-5.04s5.04,2.26,5.04,5.04v60.9l9.32,126.93c.3,4.04,3.65,7.17,7.7,7.17,4.27,0,7.73-3.46,7.73-7.73v-121.45c0-2.72,2.2-4.91,4.91-4.91s4.91,2.2,4.91,4.91v121.45c0,4.27,3.46,7.73,7.73,7.73,4.04,0,7.4-3.13,7.7-7.17l9.32-126.93v-60.06c0-3.25,2.63-5.89,5.88-5.89s5.76,2.51,5.88,5.67l2.31,61.78c.06,1.69.79,3.2,1.93,4.3,1.13,1.1,2.69,1.77,4.38,1.77,3.38,0,6.17-2.69,6.29-6.07l3.13-83.86c.36-9.51-7.26-17.42-16.78-17.42Z" />
            <path d="M245.23,106.57c.73,0,1.45-.03,2.17-.1h.12c.98-.27,1.94-.42,2.92-.53h.04c9.87-2.36,17.15-11.2,17.15-21.77,0-12.34-10.01-22.4-22.4-22.4s-22.4,10.06-22.4,22.4,10.03,22.4,22.4,22.4Z" />
          </g>
          <path d="M304.56,114.07c-4.51-4.67-10.58-7.26-17.09-7.26h-23.59c6.62-5.42,10.68-13.62,10.68-22.66,0-16.17-13.16-29.33-29.33-29.33s-29.33,13.16-29.33,29.33c0,9.11,4.18,17.27,10.73,22.66h-23.64c-6.57,0-12.91,2.76-17.39,7.58-4.47,4.82-6.75,11.35-6.26,17.91l6.23,83.47c.5,6.85,6.31,12.24,13.19,12.24,4.07,0,7.72-1.85,10.15-4.75l8.64,117.69c.56,7.63,6.97,13.59,14.61,13.59,5.37,0,10.09-2.91,12.64-7.24,2.55,4.33,7.26,7.24,12.64,7.24,7.63,0,14.05-5.96,14.61-13.59l9.3-126.93.03-.25v-4.3l.21,5.8c.27,7.15,6.08,12.74,13.23,12.74s12.95-5.59,13.22-12.74l3.13-83.86c.24-6.5-2.11-12.66-6.62-17.34ZM294.83,221.09c-1.69,0-3.25-.67-4.38-1.77-1.14-1.1-1.87-2.61-1.93-4.3l-2.31-61.78c-.12-3.16-2.72-5.67-5.88-5.67s-5.88,2.64-5.88,5.89v60.06l-9.32,126.93c-.3,4.04-3.66,7.17-7.7,7.17-4.27,0-7.73-3.46-7.73-7.73v-121.45c0-2.72-2.2-4.91-4.91-4.91s-4.91,2.2-4.91,4.91v121.45c0,4.27-3.46,7.73-7.73,7.73-4.05,0-7.4-3.13-7.7-7.17l-9.32-126.93v-60.9c0-2.79-2.26-5.04-5.04-5.04s-5.03,2.26-5.03,5.04v62.17c0,3.49-2.82,6.31-6.31,6.31-3.29,0-6.04-2.55-6.28-5.83l-6.25-83.47c-.73-9.75,6.99-18.04,16.75-18.04h84.48c9.53,0,17.14,7.91,16.78,17.42l-3.13,83.86c-.12,3.38-2.91,6.07-6.29,6.07ZM222.82,84.16c0-12.34,10.03-22.4,22.4-22.4s22.4,10.06,22.4,22.4c0,10.56-7.28,19.41-17.15,21.77h-.04c-.98.12-1.94.27-2.92.53h-.12c-.71.07-1.44.1-2.17.1-12.37,0-22.4-10.03-22.4-22.4Z" />
        </g>
      </svg>
    </Panel>
  );
};

export default IconSelf;
