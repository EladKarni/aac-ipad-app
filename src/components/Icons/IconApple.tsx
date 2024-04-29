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

const IconApple = ({
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
        className="bg-[#E8C9AA] rounded-lg"
      >
        <g>
          <path d="M193.22,471.6h-16.08l-2.34,7.74h-10.01l16.15-46.71h8.47l16.15,46.71h-10.01l-2.34-7.74ZM190.88,463.93l-5.67-18.68-5.74,18.68h11.41Z" />
          <path d="M210.1,454.86c0-3.6-.09-6.56-.27-8.87h8.01c.13,1.33.2,2.8.2,4.4h.13c1.11-1.6,2.56-2.85,4.34-3.74,1.78-.89,3.76-1.33,5.94-1.33,4.23,0,7.56,1.56,10.01,4.67,2.45,3.11,3.67,7.36,3.67,12.75s-1.23,9.61-3.7,12.68-5.88,4.6-10.24,4.6c-2.14,0-4.03-.36-5.67-1.07-1.65-.71-2.87-1.71-3.67-3h-.2v19.55h-8.54v-40.64ZM231.72,470.77c1.25-1.94,1.87-4.7,1.87-8.31,0-7.07-2.38-10.61-7.14-10.61-2.31,0-4.19.68-5.64,2.04-1.45,1.36-2.17,3.15-2.17,5.37v6.87c0,2.14.73,3.93,2.2,5.37,1.47,1.45,3.29,2.17,5.47,2.17,2.36,0,4.16-.97,5.4-2.9Z" />
          <path d="M247.8,454.86c0-3.6-.09-6.56-.27-8.87h8.01c.13,1.33.2,2.8.2,4.4h.13c1.11-1.6,2.56-2.85,4.34-3.74,1.78-.89,3.76-1.33,5.94-1.33,4.23,0,7.56,1.56,10.01,4.67,2.45,3.11,3.67,7.36,3.67,12.75s-1.23,9.61-3.7,12.68-5.88,4.6-10.24,4.6c-2.14,0-4.03-.36-5.67-1.07-1.65-.71-2.87-1.71-3.67-3h-.2v19.55h-8.54v-40.64ZM269.42,470.77c1.25-1.94,1.87-4.7,1.87-8.31,0-7.07-2.38-10.61-7.14-10.61-2.31,0-4.19.68-5.64,2.04-1.45,1.36-2.17,3.15-2.17,5.37v6.87c0,2.14.73,3.93,2.2,5.37,1.47,1.45,3.29,2.17,5.47,2.17,2.36,0,4.16-.97,5.4-2.9Z" />
          <path d="M288,477.71c-1.49-1.53-2.24-3.75-2.24-6.64v-41.24h8.47v41.37c0,.98.26,1.7.77,2.17.51.47,1.28.7,2.3.7s2.29-.29,3.8-.87l1.27,4.54c-2,1.51-4.63,2.27-7.87,2.27-2.85,0-5.02-.77-6.51-2.3Z" />
          <path d="M334.14,465.8h-23.22c.71,4.72,3.45,7.07,8.21,7.07,1.96,0,3.66-.33,5.1-1,1.44-.67,2.86-1.78,4.24-3.34l4.6,4.4c-1.29,2.13-3.24,3.85-5.84,5.14s-5.46,1.94-8.57,1.94c-5.2,0-9.25-1.52-12.14-4.57-2.89-3.05-4.34-7.26-4.34-12.65s1.46-9.7,4.37-12.81c2.91-3.11,6.93-4.67,12.04-4.67s8.71,1.53,11.44,4.6c2.74,3.07,4.1,7.34,4.1,12.81v3.07ZM325.8,459.59c0-2.27-.66-4.06-1.97-5.37-1.31-1.31-3.13-1.97-5.44-1.97-2.09,0-3.78.68-5.07,2.03-1.29,1.36-2.11,3.26-2.47,5.71h14.95v-.4Z" />
        </g>
        <g
          className={clsx(
            strokeWidth,
            strokeColor,
            iconColorStyles(iconColor, isDesaturateColors, isDarkerColors)
          )}
        >
          <path
            className="fill-red"
            d="M356.15,139.76c14.01,18.9,16.38,52.14,7.05,98.78-13.31,66.48-36.96,107.05-62.14,107.03-.76,0-1.51-.03-2.27-.1-6.88-.67-14.54-4.12-22.15-10-5.52-4.23-12.74-6.65-20.36-6.78h-.12c-7.61.13-14.84,2.55-20.37,6.8-7.6,5.86-15.25,9.32-22.14,9.99-26.01,2.52-50.7-38.44-64.41-106.93-9.33-46.65-6.96-79.88,7.05-98.78,7.73-10.42,19.11-16.42,33.81-17.85.82-.09,1.72-.12,2.73-.12,8.43,0,22.92,2.82,32.02,8.41,10.13,6.23,20.67,9.53,31.28,9.78h.18c10.61-.25,21.14-3.55,31.28-9.78,10.18-6.25,27.09-9.05,34.75-8.29,14.7,1.42,26.08,7.43,33.81,17.85Z"
          />
          <path
            className="fill-green-dark"
            d="M307.22,59.96c-1.78,27.92-24.18,50.33-52.11,52.09,1.78-27.91,24.18-50.33,52.11-52.09Z"
          />
          <path
            className="fill-red"
            d="M361.72,135.63c-8.95-12.06-21.97-18.99-38.69-20.62-9.76-.96-28.22,2.63-39.05,9.29-8.49,5.21-17.2,8.13-25.93,8.68-.18-3.12-.82-8.04-2.8-13.99,32.88-1.91,59.02-29.26,59.02-62.6v-3.47h-3.46c-31.13,0-57.05,22.8-61.9,52.6-6.97-11.31-19.15-23.83-40.42-34.11-1.72-.83-3.8-.12-4.63,1.6-.83,1.72-.1,3.8,1.62,4.63,26.72,12.92,37.86,29.38,42.48,41.51,2.2,5.74,2.92,10.52,3.15,13.5-7.63-1.01-15.21-3.81-22.61-8.34-10.83-6.68-29.27-10.25-39.05-9.3-16.72,1.63-29.75,8.56-38.69,20.62-15.22,20.53-18.01,55.62-8.28,104.26,14.2,70.96,39.79,112.63,68.89,112.63.99,0,1.99-.06,3-.15,8.18-.8,17.06-4.73,25.68-11.39,4.35-3.34,10.09-5.24,16.2-5.36,6.11.12,11.85,2.02,16.19,5.34,8.63,6.68,17.52,10.61,25.7,11.41,1.01.09,2,.15,3,.15,29.08-.01,54.69-41.66,68.89-112.63,9.73-48.64,6.94-83.72-8.28-104.26ZM298.8,345.47c-6.88-.67-14.54-4.12-22.15-10-5.52-4.23-12.74-6.65-20.36-6.78h-.12c-7.61.13-14.84,2.55-20.37,6.8-7.6,5.86-15.25,9.32-22.14,9.99-26.01,2.52-50.7-38.44-64.41-106.93-9.33-46.65-6.96-79.88,7.05-98.78,7.73-10.42,19.11-16.42,33.81-17.85.82-.09,1.72-.12,2.73-.12,8.43,0,22.92,2.82,32.02,8.41,10.13,6.23,20.67,9.53,31.28,9.78h.18c10.61-.25,21.14-3.55,31.28-9.78,10.18-6.25,27.09-9.05,34.75-8.29,14.7,1.42,26.08,7.43,33.81,17.85,14.01,18.9,16.38,52.14,7.05,98.78-13.31,66.48-36.96,107.05-62.14,107.03-.76,0-1.51-.03-2.27-.1ZM307.22,59.96c-1.78,27.92-24.18,50.33-52.11,52.09,1.78-27.91,24.18-50.33,52.11-52.09Z"
          />
        </g>
      </svg>
    </Panel>
  );
};

export default IconApple;
