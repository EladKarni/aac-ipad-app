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

const IconGet = ({
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
          <path d="M236.42,453.99v25.36h-7.27l-.87-2.6c-3.03,2.18-6.54,3.27-10.54,3.27-6.18,0-10.99-2.11-14.41-6.34-3.43-4.23-5.14-10.12-5.14-17.68,0-4.85.89-9.09,2.67-12.71,1.78-3.63,4.29-6.42,7.54-8.37,3.25-1.96,7.05-2.94,11.41-2.94,3.78,0,7.08.72,9.91,2.17,2.83,1.45,4.88,3.46,6.17,6.04l-5.47,4.8c-1.11-1.74-2.57-3.06-4.37-3.97-1.8-.91-3.86-1.37-6.17-1.37-3.91,0-6.91,1.4-8.97,4.2-2.07,2.8-3.1,6.85-3.1,12.14,0,5.56.95,9.78,2.87,12.65,1.91,2.87,4.69,4.3,8.34,4.3,2.94,0,5.58-.71,7.94-2.14v-10.01h-10.14v-6.81h19.62Z" />
          <path d="M273.79,465.8h-23.22c.71,4.72,3.45,7.07,8.21,7.07,1.96,0,3.66-.33,5.1-1,1.44-.67,2.86-1.78,4.24-3.34l4.6,4.4c-1.29,2.13-3.24,3.85-5.84,5.14s-5.46,1.94-8.57,1.94c-5.2,0-9.25-1.52-12.14-4.57s-4.34-7.26-4.34-12.65,1.46-9.7,4.37-12.81c2.91-3.11,6.93-4.67,12.04-4.67s8.71,1.53,11.44,4.6c2.74,3.07,4.1,7.34,4.1,12.81v3.07ZM265.45,459.59c0-2.27-.66-4.06-1.97-5.37-1.31-1.31-3.13-1.97-5.44-1.97-2.09,0-3.78.68-5.07,2.03-1.29,1.36-2.11,3.26-2.47,5.71h14.95v-.4Z" />
          <path d="M285.6,477.21c-1.91-1.87-2.87-4.49-2.87-7.87v-17.02h-6.07v-6.34h6.07v-8.61l8.27-2.4h.27v11.01h9.67v6.34h-9.67v15.75c0,1.91.44,3.31,1.33,4.2.89.89,2.25,1.34,4.07,1.34s3.36-.27,4.87-.8l.4,5.81c-2,.93-4.78,1.4-8.34,1.4s-6.09-.93-8.01-2.8Z" />
        </g>
        <g
          className={clsx(
            strokeWidth,
            strokeColor,
            iconColorStyles(iconColor, isDesaturateColors, isDarkerColors)
          )}
        >
          <path d="M311.22,89.33c-10.67-10.68-27.98-10.68-38.65,0-10.68,10.67-10.68,27.98,0,38.65,10.67,10.68,27.98,10.68,38.65,0,10.67-10.67,10.67-27.98,0-38.65Z" />
          <path d="M263.35,132.19c-.37-.79-.8-1.54-1.26-2.23-.5-.7-1.02-1.32-1.6-1.9-5.36-5.34-14.42-5.76-20.21.03l-15.02,15.02-60.3,60.3-2.55,2.88-2.64,2.98.37,6.02,7.48,122.91c0,.49.01.98.09,1.47l.07,1.04h.13c1.05,4.12,4.78,6.91,8.89,6.91.7,0,1.41-.07,2.11-.25l21.11-.74c6.23-1.53,5.61-10.67-.85-11.28l-18.09-5.76,10.95-98.12.04-.45-.1-.1.13-.07,1.32-11.87c.01-.09.01-.18.04-.25.27-1.62,1.42-2.92,2.98-3.41,3-.92,5.95,1.54,5.58,4.64l-.62,5.4,13.31-7.86,18.75-20.95-7.26-44.23-.65-4.08c-.24-1.39.24-2.72,1.17-3.65.62-.62,1.47-1.07,2.43-1.2,1.96-.25,3.8.91,4.47,2.7.01.03.03.06.04.1l.61,4.81,1.36,8.32,4.82,29.39.86,5.19.85,5.16,8.89,54.09c.19,1.34.82,2.51,1.68,3.41,1.38,1.42,3.37,2.21,5.46,1.94,3.44-.45,5.93-3.5,5.62-6.96l-6.16-69.79-.47-5.58-.5-5.58-1.44-16.38-.59-7.03h0s-.25-3.04-.25-3.04c-.01-.24-.03-.47.01-.68.06-.98.49-1.88,1.16-2.55.62-.62,1.44-1.04,2.37-1.16,2.28-.28,4.35,1.39,4.57,3.68l.36,4.26,1.29,14.55,3.2-3.58,2.39-8.34c1.16-4.11.42-8.55-2.06-12.02l-4.36-6.14Z" />
          <g>
            <path d="M317,83.54c-13.84-13.84-36.38-13.84-50.22,0-9.02,9.02-12.15,21.71-9.44,33.28-7.79-2.51-16.68-.68-22.85,5.49l-75.31,75.31-.18.18-.16.19-7.33,8.29h-.1v.1l-.07.09.09.09,8.03,131.84c0,.68.06,1.37.12,2.05l.06.76,1.94,4.55,1.28,2.97c3.2,4.35,8.32,7.06,13.96,7.06,1.02,0,2.08-.09,3.09-.28l20.43-.73.82-.03.8-.21c6.74-1.63,11.07-7.6,10.56-14.51-.47-6.57-5.15-11.65-11.53-12.7l-11.01-3.5,10.27-88.31,18.8-11.08,1.01-.62.79-.88,14.36-16.05,7.82,47.61c.46,2.89,1.8,5.56,3.83,7.7,3.19,3.35,7.83,5,12.42,4.44,7.83-.98,13.43-7.91,12.73-15.79l-6.82-77.43,8.31-9.27,1.26-1.39.52-1.8,2.37-8.35c1.08-3.75,1.16-7.64.25-11.34,12.95,5.55,28.56,3.06,39.12-7.51,13.84-13.84,13.86-36.36,0-50.22ZM269.78,150.35l-2.39,8.34-3.2,3.58-1.29-14.55-.36-4.26c-.22-2.28-2.28-3.96-4.57-3.68-.93.12-1.75.53-2.37,1.16-.67.67-1.1,1.57-1.16,2.55-.04.21-.03.45-.01.68l.25,3.03h0s.59,7.05.59,7.05l1.44,16.38.5,5.58.47,5.58,6.16,69.79c.31,3.46-2.18,6.51-5.62,6.96-2.09.27-4.08-.52-5.46-1.94-.86-.91-1.48-2.08-1.68-3.41l-8.89-54.09-.85-5.16-.86-5.19-4.82-29.39-1.36-8.32-.61-4.81s-.03-.07-.04-.1c-.67-1.8-2.51-2.95-4.47-2.7-.96.13-1.81.58-2.43,1.2-.93.93-1.41,2.26-1.17,3.65l.65,4.08,7.26,44.23-18.75,20.95-13.31,7.86.62-5.4c.37-3.1-2.58-5.56-5.58-4.64-1.56.49-2.72,1.8-2.98,3.41-.03.07-.03.16-.04.25l-1.32,11.87-.13.07.1.1-.04.45-10.95,98.12,18.09,5.76c6.45.61,7.08,9.75.85,11.28l-21.11.74c-.7.18-1.41.25-2.11.25-4.11,0-7.83-2.79-8.89-6.91h-.13l-.07-1.04c-.07-.49-.09-.98-.09-1.47l-7.48-122.91-.37-6.02,2.64-2.98,2.55-2.88,60.3-60.3,15.02-15.02c5.79-5.79,14.85-5.37,20.21-.03.58.58,1.1,1.2,1.6,1.9.46.68.89,1.44,1.26,2.23l4.36,6.14c2.48,3.47,3.22,7.91,2.06,12.02ZM311.22,127.98c-10.67,10.68-27.98,10.68-38.65,0-10.68-10.67-10.68-27.98,0-38.65,10.67-10.68,27.98-10.68,38.65,0,10.67,10.67,10.67,27.98,0,38.65Z" />
            <rect
              className="fill-green"
              x="276.07"
              y="287.64"
              width="61.28"
              height="61.28"
            />
            <path d="M337.34,280.7h-68.2v75.15h75.13v-75.15h-6.93ZM337.34,348.91h-61.28v-61.28h61.28v61.28Z" />
          </g>
        </g>
      </svg>
    </Panel>
  );
};

export default IconGet;
