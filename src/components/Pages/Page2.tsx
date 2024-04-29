import React from "react";
import IconAbove from "../Icons/IconAbove";
import IconBad from "../Icons/IconBad";
import IconUnder from "../Icons/IconBelow";
import IconCome from "../Icons/IconCome";
import IconFast from "../Icons/IconFast";
import IconGo from "../Icons/IconGo";
import IconGood from "../Icons/IconGood";
import IconNeither from "../Icons/IconNeither";
import IconSlow from "../Icons/IconSlow";
import IconThat from "../Icons/IconThat";
import IconThink from "../Icons/IconThink";
import IconThis from "../Icons/IconThis";
import { colorOptions } from "@/stores/colorStore";
import IconX from "../Icons/IconGet";
import IconGet from "../Icons/IconGet";
import IconWant from "../Icons/IconWant";
import IconLike from "../Icons/IconLike";
import IconCan from "../Icons/IconCan";
import IconSelf from "../Icons/IconSelf";
import IconIn from "../Icons/IconIn";
import IconThe from "../Icons/IconThe";
import IconA from "../Icons/IconA";
import IconSmall from "../Icons/IconSmall";
import IconBunny from "../Icons/IconBunny";
import IconApple from "../Icons/IconApple";
import IconPop from "../Icons/IconPop";

type PageProps = {
  isWhiteOutline: boolean;
  isBoldOutline: boolean;
  currentColor: colorOptions;
};

const Page2 = ({ isWhiteOutline, isBoldOutline, currentColor }: PageProps) => {
  return (
    <>
      <div className="flex gap-10">
        <IconWant
          word="Want"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
          iconColor={currentColor}
        />
        <IconGet
          word="Get"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
          iconColor={currentColor}
        />
        <IconLike
          word="Like"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
          iconColor={currentColor}
        />
        <IconCan
          word="Can"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
          iconColor={currentColor}
        />
      </div>

      <div className="flex gap-10">
        <IconSelf
          word="I"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[7px]"}
          iconColor={currentColor}
        />
        <IconIn
          word="In"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[7px]"}
          iconColor={currentColor}
        />
        <IconThe
          word="The"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
          iconColor={currentColor}
        />
        <IconA
          word="A"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
          iconColor={currentColor}
        />
      </div>
      <div className="flex gap-10">
        <IconSmall
          word="Small"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[7px]"}
          iconColor={currentColor}
        />
        <IconBunny
          word="Bunny"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[7px]"}
          iconColor={currentColor}
        />
        <IconApple
          word="Apple"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[7px]"}
          iconColor={currentColor}
        />
        <IconPop
          word="Soda"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[7px]"}
          iconColor={currentColor}
        />
      </div>
    </>
  );
};

export default Page2;
