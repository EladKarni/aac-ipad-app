import { colorOptions } from "@/stores/colorStore";

export const iconColorStyles = (
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