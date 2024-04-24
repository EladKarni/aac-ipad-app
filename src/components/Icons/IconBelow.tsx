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

const IconUnder = ({
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
        className="bg-[#C4998A] rounded-lg"
      >
        <g>
          <path d="M168.61,475.85c-3.01-3.17-4.52-7.81-4.52-13.93v-28.2h9.51v28.07c0,7.49,2.8,11.23,8.39,11.23s8.45-3.74,8.45-11.23v-28.07h9.51v28.2c0,6.12-1.52,10.76-4.56,13.93-3.04,3.17-7.51,4.76-13.41,4.76s-10.36-1.58-13.37-4.76Z" />
          <path d="M206.94,455.64c0-4.01-.09-6.91-.26-8.72h7.92c.22,1.85.33,3.77.33,5.75h.2c.79-1.94,2.19-3.49,4.19-4.66,2-1.16,4.24-1.75,6.7-1.75,3.79,0,6.65,1.28,8.58,3.83,1.94,2.55,2.91,6.32,2.91,11.29v18.56h-8.39v-18.62c0-2.86-.46-4.95-1.39-6.27-.93-1.32-2.4-1.98-4.43-1.98-2.33,0-4.24.83-5.71,2.48s-2.21,3.78-2.21,6.37v18.03h-8.45v-24.3Z" />
          <path d="M246.53,475.88c-2.49-3.15-3.73-7.47-3.73-12.98,0-3.34.57-6.27,1.72-8.78,1.14-2.51,2.78-4.45,4.92-5.81,2.14-1.36,4.63-2.05,7.5-2.05,1.94,0,3.64.33,5.12.99,1.47.66,2.76,1.67,3.86,3.04h.13v-19.35h8.39v40.21c0,4.58.07,7.51.2,8.78h-7.93c-.04-.75-.07-2.2-.07-4.36h-.13c-1.01,1.5-2.41,2.71-4.19,3.63s-3.64,1.39-5.58,1.39c-4.31,0-7.71-1.57-10.2-4.72ZM263.97,472.12c1.39-1.34,2.08-3.11,2.08-5.31v-6.8c0-2.16-.73-3.94-2.18-5.35-1.45-1.41-3.28-2.11-5.48-2.11-2.33,0-4.12.9-5.35,2.71-1.23,1.81-1.85,4.4-1.85,7.79,0,3.57.62,6.31,1.85,8.22,1.23,1.92,3.01,2.87,5.35,2.87s4.19-.67,5.58-2.02Z" />
          <path d="M311.61,466.54h-22.98c.7,4.67,3.41,7,8.12,7,1.94,0,3.62-.33,5.05-.99,1.43-.66,2.83-1.76,4.19-3.3l4.56,4.36c-1.28,2.12-3.2,3.81-5.78,5.08-2.57,1.28-5.4,1.92-8.49,1.92-5.15,0-9.16-1.51-12.02-4.52-2.86-3.01-4.29-7.19-4.29-12.51s1.44-9.6,4.33-12.68c2.88-3.08,6.86-4.62,11.92-4.62s8.62,1.52,11.33,4.56c2.71,3.04,4.06,7.26,4.06,12.68v3.04ZM303.36,460.4c0-2.24-.65-4.02-1.95-5.31-1.3-1.3-3.09-1.95-5.38-1.95-2.07,0-3.74.67-5.02,2.02-1.28,1.34-2.09,3.22-2.44,5.65h14.79v-.4Z" />
          <path d="M317.22,454.98c0-3.74-.07-6.43-.2-8.06h7.99c.18,1.72.26,3.66.26,5.81v.66h.26c.84-2.16,2.31-3.89,4.42-5.18,2.11-1.3,4.53-1.95,7.26-1.95.53,0,1.19.07,1.98.2v6.67c-.18-.09-.71-.13-1.59-.13-2.11,0-4.08.57-5.91,1.72-1.83,1.14-3.29,2.67-4.39,4.59-1.1,1.92-1.65,3.98-1.65,6.17v14.46h-8.45v-24.96Z" />
        </g>

        <g
          className={clsx(
            strokeWidth,
            strokeColor,
            iconColorStyles(iconColor, isDesaturateColors, isDarkerColors)
          )}
        >
          <path d="M289.88,187.43h-87.41v94.16h94.17v-94.16h-6.76ZM289.88,274.83h-80.65v-80.64h80.65v80.64Z" />
          <rect
            className="fill-green"
            x="209.23"
            y="194.19"
            width="80.65"
            height="80.64"
          />
          <line x1="445.71" y1="139.89" x2="53.41" y2="139.89" />
          <path
            className="fill-transparent"
            d="M372.3,168.3c0,21.9-17.75,39.64-39.64,39.64"
          />
          <polyline
            className="fill-transparent"
            points="343.27 193.17 330.06 209.05 348.29 218.76"
          />
        </g>
      </svg>
    </Panel>
  );
};

export default IconUnder;
