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

const IconNeither = ({
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
        className="bg-[#CECECE] rounded-lg"
      >
        <g>
          <path d="M177.46,433.72v46.23h-7.91l-17.07-30.38v30.38h-8.5v-46.23h8.27l16.71,29.91v-29.91h8.5Z" />
          <path d="M211.9,466.54h-20.7c.63,4.67,3.07,7,7.31,7,1.74,0,3.26-.33,4.55-.99,1.29-.66,2.55-1.76,3.78-3.3l4.1,4.36c-1.15,2.11-2.88,3.81-5.2,5.08-2.32,1.28-4.87,1.92-7.64,1.92-4.64,0-8.25-1.51-10.82-4.52-2.58-3.01-3.87-7.19-3.87-12.51s1.3-9.6,3.9-12.68c2.6-3.08,6.17-4.62,10.73-4.62s7.76,1.52,10.2,4.56c2.44,3.04,3.66,7.26,3.66,12.68v3.04ZM204.46,460.4c0-2.25-.59-4.02-1.75-5.32-1.17-1.3-2.79-1.95-4.85-1.95-1.86,0-3.37.67-4.52,2.02-1.15,1.34-1.88,3.22-2.2,5.65h13.32v-.4Z" />
          <path d="M218.32,441.74c-.87-.9-1.31-2.1-1.31-3.6s.44-2.7,1.31-3.6c.87-.9,2.04-1.35,3.51-1.35s2.65.45,3.54,1.35c.89.9,1.34,2.1,1.34,3.6s-.44,2.7-1.31,3.6-2.06,1.35-3.57,1.35-2.64-.45-3.51-1.35ZM218.08,446.93h7.55v33.02h-7.55v-33.02Z" />
          <path d="M238.66,477.83c-1.71-1.85-2.56-4.44-2.56-7.79v-16.84h-5.41v-6.27h5.41v-8.52l7.38-2.38h.24v10.9h8.62v6.27h-8.62v15.59c0,1.89.4,3.28,1.19,4.16.79.88,2,1.32,3.63,1.32s2.99-.26,4.34-.79l.36,5.74c-1.78.93-4.26,1.39-7.43,1.39s-5.43-.93-7.14-2.77Z" />
          <path d="M257.81,430.95h7.61v19.88c.91-1.41,2.19-2.52,3.84-3.34,1.64-.81,3.44-1.22,5.38-1.22,3.37,0,6.07,1.23,8.12,3.7,2.04,2.47,3.06,5.86,3.06,10.17v19.81h-7.61v-19.22c0-2.55-.5-4.56-1.49-6.01-.99-1.45-2.36-2.18-4.1-2.18-2.18,0-3.93.85-5.23,2.54-1.31,1.69-1.96,4-1.96,6.9v17.96h-7.61v-49Z" />
          <path d="M319.06,466.54h-20.7c.63,4.67,3.07,7,7.31,7,1.74,0,3.26-.33,4.55-.99,1.29-.66,2.55-1.76,3.78-3.3l4.1,4.36c-1.15,2.11-2.88,3.81-5.2,5.08-2.32,1.28-4.87,1.92-7.64,1.92-4.64,0-8.25-1.51-10.82-4.52-2.58-3.01-3.87-7.19-3.87-12.51s1.3-9.6,3.9-12.68c2.6-3.08,6.17-4.62,10.73-4.62s7.76,1.52,10.2,4.56c2.44,3.04,3.66,7.26,3.66,12.68v3.04ZM311.63,460.4c0-2.25-.59-4.02-1.75-5.32-1.17-1.3-2.79-1.95-4.85-1.95-1.86,0-3.37.67-4.52,2.02-1.15,1.34-1.88,3.22-2.2,5.65h13.32v-.4Z" />
          <path d="M324.12,454.98c0-3.74-.06-6.43-.18-8.06h7.2c.16,1.72.24,3.65.24,5.81v.66h.24c.75-2.16,2.08-3.89,3.98-5.18,1.9-1.3,4.08-1.95,6.54-1.95.48,0,1.07.07,1.78.2v6.67c-.16-.09-.64-.13-1.43-.13-1.9,0-3.68.57-5.32,1.72-1.65,1.15-2.96,2.67-3.95,4.59-.99,1.92-1.49,3.97-1.49,6.17v14.46h-7.61v-24.96Z" />
        </g>
        <g
          className={clsx(
            strokeWidth,
            strokeColor,
            iconColorStyles(iconColor, isDesaturateColors, isDarkerColors)
          )}
        >
          <g>
            <path d="M341.51,210.68h-87.41v94.17h94.17v-94.17h-6.76ZM341.51,298.09h-80.64v-80.65h80.64v80.65Z" />
            <path d="M158.48,108.3h-6.76v94.17h94.17v-94.17h-87.41ZM239.13,195.71h-80.65v-80.65h80.65v80.65Z" />
          </g>
          <g>
            <rect
              className="fill-green"
              x="260.87"
              y="217.44"
              width="80.64"
              height="80.65"
            />
            <rect
              className="fill-green"
              x="158.48"
              y="115.06"
              width="80.65"
              height="80.65"
            />
          </g>
          <line x1="355.94" y1="312.52" x2="143.98" y2="100.56" />
        </g>
        <path
          className={clsx(
            strokeColor,
            isBoldOutline ? strokeWidth : "stroke-[10px]"
          )}
          d="M250,56.75c82.74,0,149.82,67.08,149.82,149.82s-67.08,149.82-149.82,149.82-149.82-67.08-149.82-149.82S167.25,56.75,250,56.75M250,46.85c-42.66,0-82.78,16.61-112.94,46.78-30.17,30.17-46.78,70.28-46.78,112.94s16.61,82.78,46.78,112.94c30.17,30.17,70.28,46.78,112.94,46.78s82.78-16.61,112.94-46.78c30.17-30.17,46.78-70.28,46.78-112.94s-16.61-82.78-46.78-112.94c-30.17-30.17-70.28-46.78-112.94-46.78h0Z"
        />
      </svg>
    </Panel>
  );
};

export default IconNeither;
