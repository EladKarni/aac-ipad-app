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

const IconIn = ({
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
        className="bg-[#FFB6EC] rounded-lg"
      >
        <g>
          <path d="M226.45,432.64h9.54v46.71h-9.54v-46.71Z" />
          <path d="M245.13,454.79c0-4.05-.09-6.98-.27-8.81h8.01c.22,1.87.33,3.8.33,5.81h.2c.8-1.96,2.21-3.53,4.24-4.7,2.02-1.18,4.28-1.77,6.77-1.77,3.83,0,6.72,1.29,8.67,3.87,1.96,2.58,2.94,6.38,2.94,11.41v18.75h-8.47v-18.82c0-2.89-.47-5-1.4-6.34-.93-1.33-2.43-2-4.47-2-2.36,0-4.28.83-5.77,2.5s-2.23,3.81-2.23,6.44v18.22h-8.54v-24.56Z" />
        </g>
        <g
          className={clsx(
            strokeWidth,
            strokeColor,
            iconColorStyles(iconColor, isDesaturateColors, isDarkerColors)
          )}
        >
          <path
            className="bg-blue"
            d="M323.62,161.88v158.57h-158.57v-158.57h158.57M330.55,154.95h-172.42v172.42h172.42v-172.42h0Z"
          />
          <rect
            className="fill-green"
            x="161.59"
            y="158.41"
            width="165.49"
            height="165.49"
          />
          <polygon points="349.18 349.47 139.49 349.47 136.03 346 136.03 144.68 98.51 182.21 93.61 177.31 137.04 133.87 142.96 136.32 142.96 342.54 345.71 342.54 345.71 136.32 351.63 133.87 395.07 177.31 390.16 182.21 352.64 144.68 352.64 346 349.18 349.47" />
          <path
            className="fill-black"
            d="M179.49,117.47c-1.51,0-3.01-.68-3.99-1.98-13.03-17.1-31.94-28.1-53.25-30.97-21.31-2.88-42.45,2.72-59.55,15.75-2.21,1.68-5.35,1.25-7.03-.95-1.68-2.2-1.25-5.35.95-7.03,39.69-30.26,96.6-22.58,126.86,17.11,1.68,2.2,1.25,5.35-.95,7.03-.91.69-1.98,1.03-3.04,1.03Z"
          />
          <path
            className="fill-black"
            d="M190.94,121.73l-26.8-2.17c-2.76-.22-4.82-2.64-4.59-5.4.22-2.76,2.63-4.82,5.4-4.6l14.52,1.17-1.8-14.45c-.34-2.75,1.61-5.25,4.36-5.6,2.76-.34,5.25,1.61,5.6,4.36l3.32,26.68Z"
          />
        </g>
      </svg>
    </Panel>
  );
};

export default IconIn;
