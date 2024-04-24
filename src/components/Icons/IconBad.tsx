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

const IconBad = ({
  strokeWidth,
  strokeColor,
  iconColor,
  word,
}: IconGoodProps) => {
  const { isDesaturateColors, isDarkerColors } = useTogglesStore();
  return (
    <Panel word={word}>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        className="bg-[#ABEBFF] rounded-lg"
      >
        <g className={"fill-black"}>
          <path d="M198.44,434.27h15.04c5.34,0,9.4.98,12.19,2.95s4.17,4.85,4.17,8.64c0,2.21-.51,4.11-1.52,5.7s-2.6,2.94-4.77,4.04v.2c2.82,1.06,4.87,2.47,6.13,4.24,1.26,1.77,1.89,4.09,1.89,6.95,0,4.42-1.29,7.79-3.87,10.13-2.58,2.34-6.35,3.51-11.29,3.51h-17.95v-46.36ZM214.33,452.75c1.86,0,3.3-.52,4.34-1.56,1.03-1.04,1.56-2.48,1.56-4.34s-.59-3.13-1.76-3.97-2.97-1.26-5.4-1.26h-5.1v11.13h6.36ZM215.66,473.28c2.07,0,3.67-.6,4.8-1.79,1.13-1.19,1.69-2.89,1.69-5.1,0-2.34-.69-4.04-2.05-5.1-1.37-1.06-3.58-1.59-6.62-1.59h-5.5v13.58h7.68Z" />
          <path d="M241.55,479.94c-1.72-.9-3.07-2.16-4.04-3.78-.97-1.61-1.46-3.41-1.46-5.4,0-3.4,1.35-6,4.04-7.82s6.54-2.72,11.53-2.72h5.16v-1.39c0-1.77-.52-3.12-1.56-4.07-1.04-.95-2.51-1.42-4.4-1.42s-3.88.35-5.7,1.06-3.29,1.68-4.44,2.91l-3.71-4.9c1.81-1.72,3.95-3.08,6.42-4.07,2.47-.99,5.04-1.49,7.68-1.49,4.41,0,7.88,1.04,10.4,3.11,2.52,2.07,3.78,4.94,3.78,8.61v15.1c0,1.02.08,2.21.23,3.58.15,1.37.34,2.5.56,3.38h-7.49c-.27-.57-.46-1.14-.6-1.69-.13-.55-.24-1.31-.33-2.29h-.13c-2.52,3.09-5.9,4.64-10.14,4.64-2.16,0-4.11-.45-5.83-1.36ZM254.7,473.31c1.39-1.08,2.09-2.46,2.09-4.14v-3.31h-5.43c-2.25,0-3.98.42-5.2,1.26-1.21.84-1.82,2.05-1.82,3.64,0,1.32.45,2.35,1.36,3.08.91.73,2.15,1.09,3.74,1.09,2.12,0,3.87-.54,5.27-1.62Z" />
          <path d="M274.64,476.56c-2.5-3.16-3.74-7.49-3.74-13.02,0-3.36.57-6.29,1.72-8.81,1.15-2.52,2.79-4.46,4.94-5.83,2.14-1.37,4.65-2.05,7.52-2.05,1.94,0,3.65.33,5.14.99,1.48.66,2.77,1.68,3.87,3.05h.13v-19.41h8.41v40.34c0,4.59.06,7.53.2,8.81h-7.95c-.04-.75-.06-2.21-.06-4.37h-.13c-1.02,1.5-2.42,2.71-4.2,3.64-1.79.93-3.65,1.39-5.6,1.39-4.33,0-7.74-1.58-10.23-4.74ZM292.13,472.78c1.39-1.35,2.09-3.12,2.09-5.33v-6.82c0-2.16-.73-3.95-2.19-5.37-1.46-1.41-3.29-2.12-5.5-2.12-2.34,0-4.13.91-5.37,2.71-1.24,1.81-1.85,4.42-1.85,7.82,0,3.58.62,6.33,1.85,8.25s3.02,2.88,5.37,2.88,4.2-.67,5.6-2.02Z" />
        </g>
        <g
          className={clsx(
            strokeWidth,
            strokeColor,
            iconColorStyles(iconColor, isDesaturateColors, isDarkerColors)
          )}
        >
          <path
            className="fill-gray"
            d="M378.92,81.67h-24.12c-12.34,0-22.35,10.01-22.35,22.35v20.31c.07,1.29.11,2.6.11,3.9v67.38c0,1.24-.05,2.48-.11,3.71v20.5c0,12.35,10.01,22.35,22.35,22.35h24.12c12.35,0,22.36-10,22.36-22.35v-115.8c0-12.34-10.01-22.35-22.36-22.35Z"
          />
          <path d="M259.14,61.61h-129.47c-6.22,0-11.85,2.52-15.93,6.6s-6.56,9.61-6.6,15.77c-.09,12.48,10.45,22.7,22.93,22.7h12c.93,0,1.78.38,2.4.99.61.61.99,1.46.99,2.4,0,1.87-1.52,3.39-3.39,3.39h-21.44c-6.22,0-11.86,2.52-15.94,6.6-4.07,4.08-6.59,9.71-6.59,15.93,0,12.45,10.08,22.54,22.53,22.54h12.59c.94,0,1.78.38,2.4.99.61.62.99,1.46.99,2.4,0,1.87-1.52,3.39-3.39,3.39h-21.75c-6.23,0-11.86,2.52-15.94,6.6s-6.6,9.72-6.6,15.94c0,12.44,10.09,22.53,22.54,22.53h12.96c1.88,0,3.39,1.52,3.39,3.39s-1.51,3.39-3.39,3.39h-21.2c-6.22,0-11.86,2.53-15.94,6.6-4.03,4.05-6.55,9.62-6.59,15.78-.09,12.48,10.45,22.7,22.93,22.7h114.81c1.88,0,3.4,1.52,3.4,3.4,0,.94-.38,1.79-1,2.41-.61.62-1.46,1-2.4,1h-15.78v47.87c0,26.3,21.31,47.61,47.6,47.61v-49.01c0-14.34,6.11-28,16.79-37.56l36.42-32.61-.3.29c12.81-11.42,21.47-28,22.49-46.24v-74.92c-1.95-35.05-30.98-62.87-66.52-62.87Z" />
          <path d="M378.92,74.89h-24.12c-14.12,0-25.93,10.11-28.58,23.47-11.47-25.74-37.31-43.53-67.08-43.53h-129.47c-7.82,0-15.18,3.04-20.72,8.58-5.49,5.49-8.54,12.78-8.59,20.52-.06,7.73,2.97,15.07,8.52,20.66,1.16,1.17,2.41,2.23,3.74,3.19-4.76,1.34-9.13,3.89-12.72,7.49-5.54,5.54-8.58,12.9-8.58,20.72,0,9.71,4.74,18.33,12.03,23.67-4.72,1.35-9.05,3.89-12.62,7.45-5.53,5.55-8.58,12.92-8.58,20.74,0,9.83,4.86,18.54,12.31,23.86-4.47,1.4-8.55,3.86-11.96,7.26-5.48,5.49-8.53,12.78-8.58,20.52-.06,7.73,2.97,15.07,8.52,20.66,5.6,5.64,13.32,8.87,21.19,8.87h84.92c.14.02.28.03.42.03h6.9v47.87c0,29.99,24.4,54.39,54.39,54.39h6.78v-55.79c0-12.39,5.3-24.24,14.53-32.51l36.1-32.32h.02c7.95-7.09,14.25-15.81,18.5-25.39,2.57,13.46,14.42,23.66,28.61,23.66h24.12c16.07,0,29.14-13.07,29.14-29.14v-115.8c0-16.06-13.07-29.13-29.14-29.13ZM401.28,219.82c0,12.35-10.01,22.35-22.36,22.35h-24.12c-12.34,0-22.35-10-22.35-22.35v-20.5c.06-1.23.11-2.47.11-3.71v-67.38c0-1.3-.04-2.61-.11-3.9v-20.31c0-12.34,10.01-22.35,22.35-22.35h24.12c12.35,0,22.36,10.01,22.36,22.35v115.8ZM267.05,277.96c-10.68,9.56-16.79,23.22-16.79,37.56v49.01c-26.29,0-47.6-21.31-47.6-47.61v-47.87h15.78c.94,0,1.79-.38,2.4-1,.62-.62,1-1.47,1-2.41,0-1.88-1.52-3.4-3.4-3.4h-114.81c-12.48,0-23.02-10.22-22.93-22.7.04-6.16,2.56-11.73,6.59-15.78,4.08-4.07,9.72-6.6,15.94-6.6h21.2c1.88,0,3.39-1.51,3.39-3.39s-1.51-3.39-3.39-3.39h-12.96c-12.45,0-22.54-10.09-22.54-22.53,0-6.22,2.52-11.86,6.6-15.94s9.71-6.6,15.94-6.6h21.75c1.87,0,3.39-1.52,3.39-3.39,0-.94-.38-1.78-.99-2.4-.62-.61-1.46-.99-2.4-.99h-12.59c-12.45,0-22.53-10.09-22.53-22.54,0-6.22,2.52-11.85,6.59-15.93,4.08-4.08,9.72-6.6,15.94-6.6h21.44c1.87,0,3.39-1.52,3.39-3.39,0-.94-.38-1.79-.99-2.4-.62-.61-1.47-.99-2.4-.99h-12c-12.48,0-23.02-10.22-22.93-22.7.04-6.16,2.56-11.73,6.6-15.77s9.71-6.6,15.93-6.6h129.47c35.54,0,64.57,27.82,66.52,62.87v74.92c-1.02,18.24-9.68,34.82-22.49,46.24l.3-.29-36.42,32.61Z" />
        </g>
      </svg>
    </Panel>
  );
};

export default IconBad;
