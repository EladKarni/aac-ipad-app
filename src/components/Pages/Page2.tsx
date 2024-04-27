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

type PageProps = {
  isWhiteOutline: boolean;
  isBoldOutline: boolean;
  currentColor: colorOptions;
};

const Page2 = ({ isWhiteOutline, isBoldOutline, currentColor }: PageProps) => {
  return (
    <>
      <div className="flex gap-10">
        <IconGood
          word="Like"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
          iconColor={currentColor}
        />
        <IconBad
          word="Bad"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
          iconColor={currentColor}
        />
        <IconFast
          word="Fast"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
          iconColor={currentColor}
        />
        <IconSlow
          word="Slow"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
          iconColor={currentColor}
        />
      </div>

      <div className="flex gap-10">
        <IconCome
          word="Come"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[7px]"}
          iconColor={currentColor}
        />
        <IconGo
          word="Go"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[7px]"}
          iconColor={currentColor}
        />
        <IconThink
          word="Think"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
          iconColor={currentColor}
        />
        <IconUnder
          word="Under"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
          iconColor={currentColor}
        />
      </div>
      <div className="flex gap-10">
        <IconThis
          word="This"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[7px]"}
          iconColor={currentColor}
        />
        <IconThat
          word="That"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[7px]"}
          iconColor={currentColor}
        />
        <IconNeither
          word="Neither"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[7px]"}
          iconColor={currentColor}
        />
        <IconAbove
          word="Above"
          strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
          strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[7px]"}
          iconColor={currentColor}
        />
      </div>
    </>
  );
};

export default Page2;
