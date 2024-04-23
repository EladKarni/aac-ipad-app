"use client";
import Panel from "../Panel/Panel";
import IconGood from "../Icons/IconGood";
import { useTogglesStore } from "@/stores/togglesStore";
import IconBad from "../Icons/IconBad";

const BoardIcon = () => {
  const { isWhiteOutline, isBoldOutline } = useTogglesStore();

  return (
    <Panel>
      {/* <IconBad
        bgColor={"bg-blue-desaturated"}
        strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
        strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[8px]"}
        iconColor={"fill-white"}
      /> */}
    </Panel>
  );
};

export default BoardIcon;
