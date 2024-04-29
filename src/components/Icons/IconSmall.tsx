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

const IconSmall = ({
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
        className="bg-[#ABEBFF] rounded-lg"
      >
        <g>
          <path d="M174.43,477.88c-2.83-1.42-5.13-3.47-6.91-6.14l5.54-5.34c1.47,1.74,3.25,3.16,5.34,4.27,2.09,1.11,4.05,1.67,5.87,1.67,2.05,0,3.69-.47,4.94-1.4,1.24-.93,1.87-2.16,1.87-3.67,0-1.11-.2-2.02-.6-2.74-.4-.71-1.16-1.43-2.27-2.17-1.11-.73-2.94-1.72-5.47-2.97-3.34-1.65-5.96-3.18-7.87-4.6-1.91-1.42-3.33-2.97-4.24-4.64-.91-1.67-1.37-3.61-1.37-5.84,0-2.45.64-4.6,1.94-6.47,1.29-1.87,3.11-3.31,5.47-4.34,2.36-1.02,5.07-1.53,8.14-1.53,3.38,0,6.37.65,8.97,1.94,2.6,1.29,4.5,3.07,5.71,5.34l-6.07,4.54c-2.23-2.76-4.96-4.14-8.21-4.14-2.05,0-3.63.4-4.74,1.2-1.11.8-1.67,1.94-1.67,3.4,0,.89.28,1.69.83,2.4.56.71,1.57,1.49,3.04,2.34,1.47.85,3.67,1.96,6.61,3.34,2.85,1.33,5.08,2.67,6.71,4,1.62,1.33,2.79,2.83,3.5,4.47.71,1.65,1.07,3.6,1.07,5.87,0,2.67-.68,5.02-2.03,7.04-1.36,2.02-3.29,3.58-5.81,4.67-2.51,1.09-5.44,1.64-8.77,1.64-3.52,0-6.68-.71-9.51-2.13Z" />
          <path d="M205.63,454.86c0-4.45-.09-7.41-.27-8.87h7.47c.22,1.78.33,3.71.33,5.81h.13c.71-2,2-3.58,3.87-4.74,1.87-1.16,4.05-1.73,6.54-1.73s4.45.52,6.14,1.57c1.69,1.05,2.83,2.48,3.4,4.3.89-1.82,2.25-3.26,4.07-4.3,1.82-1.04,3.87-1.57,6.14-1.57,3.69,0,6.6,1.19,8.71,3.57,2.11,2.38,3.17,5.66,3.17,9.84v20.62h-8.47v-19.68c0-2.36-.51-4.19-1.53-5.51-1.02-1.31-2.43-1.97-4.2-1.97-1.96,0-3.53.68-4.7,2.03-1.18,1.36-1.77,3.19-1.77,5.51v19.62h-8.41v-19.42c0-2.45-.49-4.35-1.47-5.71-.98-1.36-2.36-2.03-4.14-2.03-1.91,0-3.48.72-4.7,2.17-1.22,1.45-1.83,3.3-1.83,5.57v19.42h-8.47v-24.49Z" />
          <path d="M266.42,478.64c-1.73-.91-3.09-2.18-4.07-3.8-.98-1.62-1.47-3.44-1.47-5.44,0-3.43,1.36-6.05,4.07-7.87,2.71-1.82,6.58-2.74,11.61-2.74h5.21v-1.4c0-1.78-.52-3.15-1.57-4.1-1.04-.96-2.53-1.44-4.44-1.44s-3.91.36-5.74,1.07c-1.82.71-3.32,1.69-4.47,2.94l-3.74-4.94c1.82-1.74,3.98-3.1,6.47-4.1,2.49-1,5.07-1.5,7.74-1.5,4.45,0,7.94,1.05,10.48,3.14,2.54,2.09,3.8,4.98,3.8,8.67v15.21c0,1.02.08,2.22.23,3.6.16,1.38.34,2.51.57,3.4h-7.54c-.27-.58-.47-1.14-.6-1.7-.13-.56-.24-1.32-.33-2.3h-.13c-2.54,3.11-5.94,4.67-10.21,4.67-2.18,0-4.14-.46-5.87-1.37ZM279.66,471.97c1.4-1.09,2.1-2.48,2.1-4.17v-3.34h-5.47c-2.27,0-4.01.42-5.24,1.27-1.22.85-1.84,2.07-1.84,3.67,0,1.33.46,2.37,1.37,3.1.91.73,2.17,1.1,3.77,1.1,2.13,0,3.9-.54,5.3-1.64Z" />
          <path d="M300.21,477.71c-1.49-1.53-2.24-3.75-2.24-6.64v-41.24h8.47v41.37c0,.98.26,1.7.77,2.17.51.47,1.28.7,2.3.7s2.29-.29,3.8-.87l1.27,4.54c-2,1.51-4.63,2.27-7.87,2.27-2.85,0-5.02-.77-6.51-2.3Z" />
          <path d="M320.3,477.71c-1.49-1.53-2.24-3.75-2.24-6.64v-41.24h8.47v41.37c0,.98.26,1.7.77,2.17.51.47,1.28.7,2.3.7s2.29-.29,3.8-.87l1.27,4.54c-2,1.51-4.63,2.27-7.87,2.27-2.85,0-5.02-.77-6.51-2.3Z" />
        </g>
        <g
          className={clsx(
            strokeWidth,
            strokeColor,
            iconColorStyles(iconColor, isDesaturateColors, isDarkerColors)
          )}
        >
          <path d="M131.36,298.04v51.92h-51.92v-51.92h51.92M138.29,291.11h-65.78v65.78h65.78v-65.78h0Z" />
          <path d="M443.74,191.4v158.57h-158.57v-158.57h158.57M450.67,184.47h-172.42v172.42h172.42v-172.42h0Z" />
          <g>
            <path d="M253.64,259.23v90.74h-90.74v-90.74h90.74M260.57,252.3h-104.6v104.6h104.6v-104.6h0Z" />
            <g>
              <rect
                className="fill-green"
                x="75.97"
                y="294.58"
                width="58.85"
                height="58.85"
              />
              <rect
                className="fill-green"
                x="281.71"
                y="187.93"
                width="165.49"
                height="165.49"
              />
              <rect
                className="fill-green"
                x="159.43"
                y="255.76"
                width="97.67"
                height="97.67"
              />
              <path d="M102.75,244.97c.1.17.23.33.4.5l2.42,2.98,12.12-14.9c1.19-1.45.96-3.61-.49-4.77-1.46-1.18-3.58-.95-4.77.47l-3.48,4.27v-23.75c0-1.86-1.51-3.38-3.37-3.38s-3.41,1.52-3.41,3.38v23.75l-3.45-4.24c-1.19-1.45-3.34-1.69-4.8-.5-1.45,1.16-1.65,3.32-.46,4.77l9.31,11.42Z" />
            </g>
          </g>
        </g>
      </svg>
    </Panel>
  );
};

export default IconSmall;
