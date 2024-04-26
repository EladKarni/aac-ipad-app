import { colorOptions } from "@/stores/colorStore";
import { StaticImageData } from "next/image";
import ColorSwatch from "../../public/colors/Rectangle 243.png";
import ColorSwatch2 from "../../public/colors/Rectangle 246.png";
import ColorSwatch3 from "../../public/colors/Rectangle 247.png";
import ColorSwatch4 from "../../public/colors/Rectangle 244.png";
import ColorSwatch5 from "../../public/colors/Rectangle 245.png";
import ColorSwatch6 from "../../public/colors/Rectangle 248.png";
import ColorSwatch7 from "../../public/colors/Rectangle 249.png";
import ColorSwatch8 from "../../public/colors/Rectangle 250.png";
import ColorSwatch9 from "../../public/colors/Rectangle 251.png";
import ColorSwatch10 from "../../public/colors/Rectangle 252.png";
import ColorSwatch11 from "../../public/colors/Rectangle 253.png";
import ColorSwatch12 from "../../public/colors/Rectangle 254.png";
import ColorSwatch13 from "../../public/colors/Rectangle 255.png";
import ColorSwatch14 from "../../public/colors/Rectangle 256.png";
import ColorSwatch15 from "../../public/colors/Rectangle 257.png";
import ColorSwatch16 from "../../public/colors/Rectangle 258.png";
import ColorSwatch17 from "../../public/colors/Rectangle 259.png";
import ColorSwatch18 from "../../public/colors/Rectangle 260.png";

type ColorSwatchObject = {
  name: colorOptions;
  image: StaticImageData;
};

export const ColorSwatches: ColorSwatchObject[] = [
  {
    name: "none",
    image: ColorSwatch,
  },
  {
    name: "white",
    image: ColorSwatch2,
  },
  {
    name: "light-gray",
    image: ColorSwatch4,
  },
  {
    name: "gray",
    image: ColorSwatch5,
  },
  {
    name: "dark-gray",
    image: ColorSwatch3,
  },
  {
    name: "black",
    image: ColorSwatch6,
  },
  {
    name: "red",
    image: ColorSwatch7,
  },
  {
    name: "orange",
    image: ColorSwatch8,
  },
  {
    name: "yellow",
    image: ColorSwatch9,
  },
  {
    name: "green",
    image: ColorSwatch10,
  },
  {
    name: "blue",
    image: ColorSwatch11,
  },
  {
    name: "purple",
    image: ColorSwatch12,
  },
  {
    name: "skintone1",
    image: ColorSwatch13,
  },
  {
    name: "skintone2",
    image: ColorSwatch14,
  },
  {
    name: "skintone3",
    image: ColorSwatch15,
  },
  {
    name: "skintone4",
    image: ColorSwatch16,
  },
  {
    name: "skintone5",
    image: ColorSwatch17,
  },
  {
    name: "skintone6",
    image: ColorSwatch18,
  },
];
