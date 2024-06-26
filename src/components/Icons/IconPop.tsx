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

const IconPop = ({
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
          <path d="M184.81,477.88c-2.83-1.42-5.13-3.47-6.91-6.14l5.54-5.34c1.47,1.74,3.25,3.16,5.34,4.27,2.09,1.11,4.05,1.67,5.87,1.67,2.05,0,3.69-.47,4.94-1.4,1.24-.93,1.87-2.16,1.87-3.67,0-1.11-.2-2.02-.6-2.74-.4-.71-1.16-1.43-2.27-2.17-1.11-.73-2.94-1.72-5.47-2.97-3.34-1.65-5.96-3.18-7.87-4.6-1.91-1.42-3.33-2.97-4.24-4.64-.91-1.67-1.37-3.61-1.37-5.84,0-2.45.64-4.6,1.94-6.47,1.29-1.87,3.11-3.31,5.47-4.34,2.36-1.02,5.07-1.53,8.14-1.53,3.38,0,6.37.65,8.97,1.94,2.6,1.29,4.5,3.07,5.71,5.34l-6.07,4.54c-2.23-2.76-4.96-4.14-8.21-4.14-2.05,0-3.63.4-4.74,1.2-1.11.8-1.67,1.94-1.67,3.4,0,.89.28,1.69.83,2.4.56.71,1.57,1.49,3.04,2.34,1.47.85,3.67,1.96,6.61,3.34,2.85,1.33,5.08,2.67,6.71,4,1.62,1.33,2.79,2.83,3.5,4.47.71,1.65,1.07,3.6,1.07,5.87,0,2.67-.68,5.02-2.03,7.04-1.36,2.02-3.29,3.58-5.81,4.67-2.51,1.09-5.44,1.64-8.77,1.64-3.52,0-6.68-.71-9.51-2.13Z" />
          <path d="M219.47,475.41c-3.03-3.07-4.54-7.32-4.54-12.75s1.51-9.68,4.54-12.75,7.23-4.6,12.61-4.6,9.6,1.53,12.64,4.6,4.57,7.32,4.57,12.75-1.52,9.68-4.57,12.75-7.26,4.6-12.64,4.6-9.59-1.53-12.61-4.6ZM238.49,470.74c1.56-1.96,2.34-4.65,2.34-8.07s-.78-6.12-2.34-8.07c-1.56-1.96-3.69-2.94-6.41-2.94s-4.84.98-6.37,2.94c-1.54,1.96-2.3,4.65-2.3,8.07s.77,6.12,2.3,8.07c1.53,1.96,3.66,2.94,6.37,2.94s4.85-.98,6.41-2.94Z" />
          <path d="M257.01,475.24c-2.51-3.18-3.77-7.55-3.77-13.11,0-3.38.58-6.34,1.74-8.87,1.16-2.54,2.81-4.49,4.97-5.87,2.16-1.38,4.68-2.07,7.57-2.07,1.96,0,3.68.33,5.17,1s2.79,1.69,3.9,3.07h.13v-19.55h8.47v40.64c0,4.63.07,7.59.2,8.87h-8.01c-.04-.76-.07-2.22-.07-4.4h-.13c-1.02,1.51-2.44,2.74-4.24,3.67-1.8.93-3.68,1.4-5.64,1.4-4.36,0-7.8-1.59-10.31-4.77ZM274.62,471.44c1.4-1.36,2.1-3.15,2.1-5.37v-6.87c0-2.18-.73-3.98-2.2-5.41-1.47-1.42-3.32-2.13-5.54-2.13-2.36,0-4.16.91-5.4,2.74-1.25,1.82-1.87,4.45-1.87,7.87,0,3.6.62,6.37,1.87,8.31,1.24,1.94,3.05,2.9,5.4,2.9s4.24-.68,5.64-2.03Z" />
          <path d="M296.21,478.64c-1.73-.91-3.09-2.18-4.07-3.8-.98-1.62-1.47-3.44-1.47-5.44,0-3.43,1.36-6.05,4.07-7.87,2.71-1.82,6.58-2.74,11.61-2.74h5.21v-1.4c0-1.78-.52-3.15-1.57-4.1-1.04-.96-2.53-1.44-4.44-1.44s-3.91.36-5.74,1.07c-1.82.71-3.32,1.69-4.47,2.94l-3.74-4.94c1.82-1.74,3.98-3.1,6.47-4.1,2.49-1,5.07-1.5,7.74-1.5,4.45,0,7.94,1.05,10.48,3.14,2.54,2.09,3.8,4.98,3.8,8.67v15.21c0,1.02.08,2.22.23,3.6.16,1.38.34,2.51.57,3.4h-7.54c-.27-.58-.47-1.14-.6-1.7-.13-.56-.24-1.32-.33-2.3h-.13c-2.54,3.11-5.94,4.67-10.21,4.67-2.18,0-4.14-.46-5.87-1.37ZM309.45,471.97c1.4-1.09,2.1-2.48,2.1-4.17v-3.34h-5.47c-2.27,0-4.01.42-5.24,1.27-1.22.85-1.84,2.07-1.84,3.67,0,1.33.46,2.37,1.37,3.1.91.73,2.17,1.1,3.77,1.1,2.13,0,3.9-.54,5.3-1.64Z" />
        </g>
        <g
          className={clsx(
            strokeWidth,
            strokeColor,
            iconColorStyles(iconColor, isDesaturateColors, isDarkerColors)
          )}
        >
          <path
            className="fill-gray stroke-1"
            d="M313.74,70.9c-.34.09-.7.18-1.07.25-1.2.27-2.54.52-4.02.76-1.88.31-3.98.62-6.29.89-.22.03-.46.06-.7.09-.55.07-2.46.28-2.46.28-1.84.19-3.74.37-5.73.55-12.43,1.07-27.46,1.63-43.47,1.63s-31.02-.56-43.47-1.63c-1.99-.18-3.89-.36-5.71-.55,0,0-1.93-.21-2.48-.28-.24-.03-.46-.06-.68-.07-2.31-.28-4.41-.58-6.29-.91-1.48-.24-2.83-.49-4.04-.76-.36-.07-.71-.16-1.05-.25-.36-.07-.7-.16-1.04-.25v6.47c.77.27,1.8.53,3.09.82,8.71,1.93,29.23,4.12,61.68,4.12s52.98-2.2,61.69-4.12c1.28-.28,2.3-.55,3.07-.82v-6.47c-.33.09-.67.16-1.02.25Z"
          />
          <path
            className="fill-gray stroke-1"
            d="M186.21,334.09c2.73,4.3,7.14,7.51,12.39,8.59,34.11,7.05,68.69,7.05,102.79,0,5.25-1.08,9.66-4.29,12.39-8.59-20.9,4.78-42.34,7.15-63.78,7.15s-42.88-2.39-63.78-7.15Z"
          />
          <path
            className="fill-gray stroke-1"
            d="M197.99,65.83c2.95.37,6.26.71,9.88,1.02.01-.01.03,0,.04,0,2.18.18,4.48.34,6.88.5,4.38.28,9.12.5,14.08.68,6.83.22,13.93.34,21.11.34s14.29-.12,21.13-.34c4.96-.18,9.7-.4,14.08-.68,2.4-.16,4.72-.33,6.91-.5,3.62-.31,6.93-.65,9.88-1.02.37-.04.73-.09,1.08-.13,2.95-.39,5.55-.8,7.66-1.23-9.21-1.85-29.42-3.92-60.74-3.92s-51.53,2.06-60.74,3.92c2.11.43,4.7.85,7.67,1.23.36.04.71.09,1.07.13Z"
          />
          <path
            className="fill-red"
            d="M317.68,83.41c-3.38,1.29-9.05,2.42-18.5,3.43-13.13,1.41-30.61,2.2-49.18,2.2s-36.05-.79-49.18-2.2c-9.32-.99-15.06-2.11-18.5-3.43-6.42,7.09-10.31,16.48-10.31,26.77v201.2c0,4.09,1.59,7.86,4.23,10.65,1.02,1.08,2.2,2.02,3.5,2.74,1.11.65,2.31,1.16,3.61,1.5.15.06.3.09.46.13,43.31,10.53,89.09,10.53,132.4,0,.16-.04.31-.07.46-.13,1.29-.34,2.49-.85,3.61-1.5,1.31-.73,2.48-1.66,3.5-2.74,2.64-2.79,4.23-6.56,4.23-10.65V110.17c0-10.28-3.89-19.67-10.31-26.77Z"
          />
          <path
            className="fill-black stroke-1"
            d="M322.52,78.38v-14.08l-.09-.82-.03-.16c-.79-3.2-4.94-5.59-23.22-7.55-13.13-1.41-30.61-2.2-49.18-2.2s-36.05.79-49.18,2.2c-19.61,2.11-23.34,4.67-23.34,8.77v13.61c0,.07,0,.16.01.24-7.72,8.38-12.42,19.54-12.42,31.8v201.2c0,8.64,4.88,16.29,12.33,20.01,2.76,8.99,10.25,16.11,19.79,18.09,17.52,3.61,35.16,5.42,52.8,5.42s35.28-1.81,52.8-5.42c9.54-1.97,17.02-9.08,19.79-18.07,7.45-3.72,12.33-11.38,12.33-20.03V110.17c0-12.26-4.7-23.41-12.4-31.8ZM327.99,311.37c0,4.09-1.59,7.86-4.23,10.65-1.02,1.08-2.2,2.02-3.5,2.74-1.11.65-2.31,1.16-3.61,1.5-.15.06-.3.09-.46.13-43.31,10.53-89.1,10.53-132.4,0-.16-.04-.31-.07-.46-.13-1.29-.34-2.49-.85-3.61-1.5-1.31-.73-2.48-1.66-3.5-2.74-2.64-2.79-4.23-6.56-4.23-10.65V110.17c0-10.28,3.89-19.67,10.31-26.77,3.44,1.32,9.18,2.43,18.5,3.43,13.13,1.41,30.61,2.2,49.18,2.2s36.05-.79,49.18-2.2c9.45-1.01,15.12-2.14,18.5-3.43,6.42,7.09,10.31,16.48,10.31,26.77v201.2ZM301.39,342.68c-34.1,7.05-68.68,7.05-102.79,0-5.25-1.08-9.66-4.29-12.39-8.59,20.91,4.76,42.34,7.15,63.78,7.15s42.88-2.37,63.78-7.15c-2.73,4.3-7.14,7.51-12.39,8.59ZM185.24,71.61v-.96c.34.09.68.18,1.04.25.34.09.7.18,1.05.25,1.2.27,2.55.52,4.04.76,1.88.33,3.98.62,6.29.91.22.01.45.04.68.07.55.07,2.48.28,2.48.28,1.82.19,3.72.37,5.71.55,12.45,1.07,27.48,1.63,43.47,1.63s31.04-.56,43.47-1.63c1.99-.18,3.89-.36,5.73-.55,0,0,1.91-.21,2.46-.28.24-.03.47-.06.7-.09,2.31-.27,4.41-.58,6.29-.89,1.48-.24,2.82-.49,4.02-.76.37-.07.73-.16,1.07-.25.36-.09.7-.16,1.02-.25v6.47c-.77.27-1.8.53-3.07.82-8.71,1.93-29.24,4.12-61.69,4.12s-52.97-2.2-61.68-4.12c-1.29-.28-2.31-.55-3.09-.82v-5.5ZM250,60.54c31.32,0,51.53,2.06,60.74,3.92-2.11.43-4.7.85-7.66,1.23-.36.04-.71.09-1.08.13-2.95.37-6.26.71-9.88,1.02-2.2.18-4.51.34-6.91.5-4.38.28-9.12.5-14.08.68-6.84.22-13.93.34-21.13.34s-14.29-.12-21.11-.34c-4.96-.18-9.7-.4-14.08-.68-2.4-.16-4.7-.33-6.88-.5-.01,0-.03-.01-.04,0-3.62-.31-6.93-.65-9.88-1.02-.36-.04-.71-.09-1.07-.13-2.97-.39-5.56-.8-7.67-1.23,9.21-1.85,29.42-3.92,60.74-3.92Z"
          />
        </g>
      </svg>
    </Panel>
  );
};

export default IconPop;
