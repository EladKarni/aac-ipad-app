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

const IconWant = ({
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
          <path d="M227.71,432.63l-9.81,46.71h-9.14l-8.54-34.77-8.54,34.77h-9.14l-9.81-46.71h10.21l5.07,30.9,7.67-30.9h9.07l7.67,30.9,5.07-30.9h10.21Z" />
          <path d="M235.59,478.64c-1.73-.91-3.09-2.18-4.07-3.8-.98-1.62-1.47-3.44-1.47-5.44,0-3.43,1.36-6.05,4.07-7.87,2.71-1.82,6.58-2.74,11.61-2.74h5.21v-1.4c0-1.78-.52-3.15-1.57-4.1-1.04-.96-2.53-1.44-4.44-1.44s-3.91.36-5.74,1.07c-1.82.71-3.32,1.69-4.47,2.94l-3.74-4.94c1.82-1.74,3.98-3.1,6.47-4.1,2.49-1,5.07-1.5,7.74-1.5,4.45,0,7.94,1.05,10.48,3.14,2.54,2.09,3.8,4.98,3.8,8.67v15.21c0,1.02.08,2.22.23,3.6.16,1.38.34,2.51.57,3.4h-7.54c-.27-.58-.47-1.14-.6-1.7-.13-.56-.24-1.32-.33-2.3h-.13c-2.54,3.11-5.94,4.67-10.21,4.67-2.18,0-4.14-.46-5.87-1.37ZM248.83,471.97c1.4-1.09,2.1-2.48,2.1-4.17v-3.34h-5.47c-2.27,0-4.01.42-5.24,1.27-1.22.85-1.84,2.07-1.84,3.67,0,1.33.46,2.37,1.37,3.1.91.73,2.17,1.1,3.77,1.1,2.13,0,3.9-.54,5.3-1.64Z" />
          <path d="M266.48,454.79c0-4.05-.09-6.98-.27-8.81h8.01c.22,1.87.33,3.8.33,5.81h.2c.8-1.96,2.21-3.53,4.24-4.7,2.02-1.18,4.28-1.77,6.77-1.77,3.83,0,6.72,1.29,8.67,3.87,1.96,2.58,2.94,6.38,2.94,11.41v18.75h-8.47v-18.82c0-2.89-.47-5-1.4-6.34-.93-1.33-2.43-2-4.47-2-2.36,0-4.28.83-5.77,2.5s-2.23,3.81-2.23,6.44v18.22h-8.54v-24.56Z" />
          <path d="M310.66,477.21c-1.91-1.87-2.87-4.49-2.87-7.87v-17.02h-6.07v-6.34h6.07v-8.61l8.27-2.4h.27v11.01h9.67v6.34h-9.67v15.75c0,1.91.44,3.31,1.33,4.2.89.89,2.25,1.34,4.07,1.34s3.36-.27,4.87-.8l.4,5.81c-2,.93-4.78,1.4-8.34,1.4s-6.09-.93-8.01-2.8Z" />
        </g>
        <g
          className={clsx(
            strokeWidth,
            strokeColor,
            iconColorStyles(iconColor, isDesaturateColors, isDarkerColors)
          )}
        >
          <g>
            <path d="M207.9,187.67l-45.5-38.13-3.64-3.06-3.64-3.04-10.68-8.96-4.58-3.86h0s-1.96-1.66-1.96-1.66c-.15-.13-.3-.27-.4-.42-.55-.64-.83-1.42-.83-2.23,0-.74.24-1.48.73-2.12,1.2-1.54,3.44-1.78,4.94-.52l2.77,2.31,9.5,7.95-.22-4.05-3.58-6.42c-1.75-3.17-4.85-5.37-8.43-5.98l-6.29-1.07c-.7-.25-1.39-.45-2.09-.58-.71-.12-1.39-.18-2.09-.18-6.42,0-12.09,5.19-12.09,12.12v90.25l7.42,121.8c-.01.4.01.82.07,1.23l.06.88h.12c.89,3.52,4.04,5.86,7.52,5.86.59,0,1.19-.06,1.8-.21l17.86-.64c5.28-1.29,4.76-9.04-.71-9.54l-15.31-4.88,11.41-102.12,8.01-33.75-1.31-23.78-30.85-22.15-2.85-2.03c-.96-.7-1.48-1.8-1.48-2.91,0-.76.24-1.53.74-2.18,1.02-1.32,2.82-1.72,4.29-1.05.03.01.06.03.1.04l3.23,2.51,5.8,4.17,20.52,14.72,3.61,2.6,3.61,2.6,37.74,27.09c.92.67,1.97.99,3.04,1.02,1.68.04,3.34-.7,4.45-2.11,1.8-2.33,1.44-5.64-.82-7.52Z" />
            <path d="M212.35,182.34l-50.47-42.3-.58-10.53-.09-1.59-.77-1.39-3.56-6.42c-1.62-2.91-3.9-5.28-6.65-6.94,11.1-4.42,18.95-15.28,18.95-27.94,0-16.59-13.5-30.09-30.09-30.09s-30.09,13.5-30.09,30.09c0,10.8,5.73,20.28,14.29,25.59-6.17,3.16-10.4,9.58-10.4,16.97v90.67l7.42,121.54c0,.58.03,1.16.1,1.75l.03.62,1.66,3.86,1.08,2.54c2.7,3.66,7.05,5.96,11.82,5.96.88,0,1.75-.07,2.61-.22l17.3-.64h.7s.7-.18.7-.18c5.68-1.39,9.36-6.45,8.95-12.31-.42-5.55-4.38-9.87-9.78-10.76l-9.33-2.97,10.74-96.05,7.92-33.34.22-.98-.06-1.01-1.01-18.22,33.2,23.84c2.03,1.45,4.42,2.26,6.93,2.33,3.9.09,7.69-1.69,10.09-4.78,4.11-5.3,3.29-12.8-1.84-17.11ZM139.08,62.06c12.79,0,23.16,10.37,23.16,23.16s-10.37,23.16-23.16,23.16-23.16-10.37-23.16-23.16,10.37-23.16,23.16-23.16ZM208.71,195.19c-1.11,1.41-2.77,2.15-4.45,2.11-1.07-.03-2.12-.36-3.04-1.02l-37.74-27.09-3.61-2.6-3.61-2.6-20.52-14.72-5.8-4.17-3.23-2.51s-.07-.03-.1-.04c-1.47-.67-3.26-.27-4.29,1.05-.5.65-.74,1.42-.74,2.18,0,1.11.52,2.21,1.48,2.91l2.85,2.03,30.85,22.15,1.31,23.78-8.01,33.75-11.41,102.12,15.31,4.88c5.47.5,5.99,8.25.71,9.54l-17.86.64c-.61.15-1.2.21-1.8.21-3.49,0-6.63-2.34-7.52-5.86h-.12l-.06-.88c-.06-.42-.09-.83-.07-1.23l-7.42-121.8v-90.25c0-6.93,5.67-12.12,12.09-12.12.7,0,1.38.06,2.09.18.7.13,1.39.33,2.09.58l6.29,1.07c3.58.61,6.68,2.8,8.43,5.98l3.58,6.42.22,4.05-9.5-7.95-2.77-2.31c-1.5-1.26-3.74-1.02-4.94.52-.49.64-.73,1.38-.73,2.12,0,.8.28,1.59.83,2.23.1.15.25.28.4.42l1.96,1.65h0s4.58,3.87,4.58,3.87l10.68,8.96,3.64,3.04,3.64,3.06,45.5,38.13c2.26,1.88,2.61,5.19.82,7.52Z" />
          </g>
          <g>
            <path d="M409.38,291.11h-58.86v65.79h65.79v-65.79h-6.93ZM409.38,349.97h-51.93v-51.93h51.93v51.93Z" />
            <rect
              className="fill-green"
              x="357.45"
              y="298.04"
              width="51.93"
              height="51.93"
            />
          </g>
          <path d="M139.08,108.38c12.79,0,23.16-10.37,23.16-23.16s-10.37-23.16-23.16-23.16-23.16,10.37-23.16,23.16,10.37,23.16,23.16,23.16Z" />
        </g>
      </svg>
    </Panel>
  );
};

export default IconWant;
