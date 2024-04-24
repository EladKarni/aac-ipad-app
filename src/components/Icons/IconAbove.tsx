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

const IconAbove = ({
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
          <path d="M186.08,472.28h-15.91l-2.31,7.66h-9.91l15.98-46.23h8.39l15.98,46.23h-9.91l-2.31-7.66ZM183.77,464.69l-5.61-18.49-5.68,18.49h11.29Z" />
          <path d="M214.83,479.21c-1.78-.92-3.18-2.13-4.19-3.63h-.13c0,2.11-.02,3.57-.07,4.36h-7.92c.13-1.28.2-4.2.2-8.78v-40.21h8.39v19.35h.13c1.89-2.68,5.08-4.03,9.57-4.03,4.23,0,7.54,1.48,9.94,4.42,2.4,2.95,3.6,7.02,3.6,12.22,0,5.5-1.24,9.83-3.73,12.98-2.49,3.15-5.89,4.72-10.2,4.72-1.94,0-3.8-.46-5.58-1.39ZM224.11,471.26c1.23-1.92,1.85-4.66,1.85-8.22s-.62-5.99-1.85-7.79c-1.23-1.8-3.02-2.71-5.35-2.71-2.2,0-4.03.7-5.48,2.11-1.45,1.41-2.18,3.19-2.18,5.35v6.8c0,2.2.69,3.98,2.08,5.32,1.39,1.34,3.25,2.02,5.58,2.02s4.12-.96,5.35-2.87Z" />
          <path d="M242.73,476.04c-2.99-3.04-4.49-7.24-4.49-12.61s1.5-9.58,4.49-12.61c2.99-3.04,7.15-4.56,12.48-4.56s9.5,1.52,12.51,4.56,4.52,7.24,4.52,12.61-1.51,9.57-4.52,12.61c-3.01,3.04-7.19,4.56-12.51,4.56s-9.49-1.52-12.48-4.56ZM261.56,471.42c1.54-1.94,2.31-4.6,2.31-7.99s-.77-6.05-2.31-7.99c-1.54-1.94-3.65-2.91-6.34-2.91s-4.79.97-6.31,2.91-2.28,4.6-2.28,7.99.76,6.05,2.28,7.99,3.62,2.91,6.31,2.91,4.8-.97,6.34-2.91Z" />
          <path d="M307.71,446.93l-12.94,33.02h-7.26l-12.94-33.02h8.72l7.86,22.72,7.86-22.72h8.72Z" />
          <path d="M341,466.54h-22.98c.7,4.67,3.41,7,8.12,7,1.94,0,3.62-.33,5.05-.99,1.43-.66,2.83-1.76,4.19-3.3l4.56,4.36c-1.28,2.11-3.2,3.81-5.78,5.08-2.57,1.27-5.4,1.92-8.49,1.92-5.15,0-9.16-1.51-12.02-4.52s-4.29-7.19-4.29-12.51,1.44-9.6,4.33-12.68c2.88-3.08,6.86-4.62,11.92-4.62s8.62,1.52,11.33,4.56c2.71,3.04,4.06,7.26,4.06,12.68v3.04ZM332.74,460.4c0-2.25-.65-4.02-1.95-5.32-1.3-1.3-3.09-1.95-5.38-1.95-2.07,0-3.74.67-5.02,2.02-1.28,1.34-2.09,3.22-2.44,5.65h14.79v-.4Z" />
        </g>

        <g
          className={clsx(
            strokeWidth,
            strokeColor,
            iconColorStyles(iconColor, isDesaturateColors, isDarkerColors)
          )}
        >
          <path d="M289.88,126.7h-87.41v94.17h94.17v-94.17h-6.76ZM289.88,214.11h-80.65v-80.64h80.65v80.64Z" />
          <rect
            className="fill-green"
            x="209.23"
            y="133.47"
            width="80.65"
            height="80.64"
          />
          <line x1="53.41" y1="268.41" x2="445.71" y2="268.41" />
          <path
            className="fill-transparent"
            d="M126.82,240c0-21.9,17.75-39.64,39.64-39.64"
          />
          <polyline
            className="fill-transparent"
            points="155.85 215.13 169.06 199.25 150.82 189.53"
          />
        </g>
      </svg>
    </Panel>
  );
};

export default IconAbove;
