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

const IconThe = ({
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
        className="bg-[#cecece] rounded-lg"
      >
        <g>
          <path d="M208.2,439.71h-13.88v-7.07h37.37v7.07h-13.88v39.64h-9.61v-39.64Z" />
          <path d="M235.89,429.83h8.54v20.09c1.02-1.42,2.46-2.55,4.3-3.37,1.85-.82,3.86-1.23,6.04-1.23,3.78,0,6.82,1.25,9.11,3.74s3.44,5.92,3.44,10.28v20.02h-8.54v-19.42c0-2.58-.56-4.6-1.67-6.07-1.11-1.47-2.65-2.2-4.6-2.2-2.45,0-4.4.86-5.87,2.57-1.47,1.71-2.2,4.04-2.2,6.97v18.15h-8.54v-49.51Z" />
          <path d="M304.62,465.8h-23.22c.71,4.72,3.45,7.07,8.21,7.07,1.96,0,3.66-.33,5.1-1,1.44-.67,2.86-1.78,4.24-3.34l4.6,4.4c-1.29,2.13-3.24,3.85-5.84,5.14s-5.46,1.94-8.57,1.94c-5.2,0-9.25-1.52-12.14-4.57s-4.34-7.26-4.34-12.65,1.46-9.7,4.37-12.81c2.91-3.11,6.93-4.67,12.04-4.67s8.71,1.53,11.44,4.6c2.74,3.07,4.1,7.34,4.1,12.81v3.07ZM296.28,459.59c0-2.27-.66-4.06-1.97-5.37-1.31-1.31-3.13-1.97-5.44-1.97-2.09,0-3.78.68-5.07,2.03-1.29,1.36-2.11,3.26-2.47,5.71h14.95v-.4Z" />
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
            d="M124.82,201.38h-37.01v-18.86h99.65v18.86h-37.01v105.7h-25.62v-105.7Z"
          />
          <path
            className="fill-black"
            d="M202.22,182.52h25.62v50.89h47.87v-50.89h25.45v124.56h-25.45v-53.2h-47.87v53.2h-25.62v-124.56Z"
          />
          <path
            className="fill-black"
            d="M325.35,182.52h82.74v20.46h-57.12v28.47h50.89v20.46h-50.89v34.7h57.12v20.46h-82.74v-124.56Z"
          />
        </g>
      </svg>
    </Panel>
  );
};

export default IconThe;
