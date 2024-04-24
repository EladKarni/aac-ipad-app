"use client";

import Button from "../Button/Button";
import IconSettingsSection from "../IconSettingsSection/IconSettingsSection";
import ToggleSettingsSection from "../ToggleSettingsSection/ToggleSettingsSection";
import ColorPicker from "../ColorPicker/ColorPicker";
import IconGood from "../Icons/IconGood";
import IconBad from "../Icons/IconBad";
import { useTogglesStore } from "@/stores/togglesStore";
import { useColorStore } from "@/stores/colorStore";
import IconThis from "../Icons/IconThis";
import { iconColorStyles } from "@/util/getCurrentColor";

const MobileNavigation = () => {
  const { isWhiteOutline, isBoldOutline } = useTogglesStore();
  const { currentColor } = useColorStore();
  return (
    <div className="flex h-full gap-10">
      <div className="flex flex-col justify-between w-96 mt-20 font-semibold">
        <ul className="flex flex-col gap-8">
          <li className="flex gap-2 px-1.5 py-1 text-3xl">
            <span className="scale-[65%]">⬛</span>Account
          </li>
          <li className="flex gap-2 px-1.5 py-1 text-3xl">
            <span className="scale-[65%]">⬛</span>App Settings
          </li>
          <li className="navigation-btn flex gap-2 px-1.5 py-1 text-3xl">
            <span className="scale-[65%]">🟦</span>Icon Settings
          </li>
          <li className="flex gap-2 px-1.5 py-1 text-3xl">
            <span className="scale-[65%]">⬛</span>Voice Settings
          </li>
          <li className="flex gap-2 px-1.5 py-1 text-3xl">
            <span className="scale-[65%]">⬛</span>Accessibility
          </li>
          <li className="flex gap-2 px-1.5 py-1 text-3xl">
            <span className="scale-[65%]">⬛</span>Language
          </li>
          <li className="flex gap-2 px-1.5 py-1 text-3xl">
            <span className="scale-[65%]">⬛</span>Support
          </li>
          <li className="flex gap-2 px-1.5 py-1 text-3xl">
            <span className="scale-[65%]">⬛</span>Advanved
          </li>
        </ul>
        <ul>
          <label
            htmlFor="my-drawer"
            className="flex flex-row items-center gap-4 font-bold text-3xl"
          >
            <span>X</span>Close
          </label>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-6xl font-serif">Icon Settings:</h2>
        <IconSettingsSection title="ICON SIZE">
          <Button text="Modern" checked />
          <Button text="Energy" disabled />
          <Button text="Cartoon" disabled />
        </IconSettingsSection>
        <ToggleSettingsSection
          title="Use White Outlines"
          toggleId={"isWhiteOutline"}
        />
        <ToggleSettingsSection
          title="Use Thick Outlines"
          toggleId={"isBoldOutline"}
        />
        <ToggleSettingsSection
          title="Destaturate Colors"
          toggleId={"isDesaturateColors"}
        />
        <ToggleSettingsSection
          title="Use Darker Colors"
          toggleId={"isDarkerColors"}
        />
        <IconSettingsSection title="ICON COLORS">
          <Button text="Colorful" checked />
          <Button text="Limited" disabled />
          <Button text="1 Color" disabled />
        </IconSettingsSection>
        <ColorPicker />
        <div className="h-48">
          <h5 className="text-2xl text-gray-600 flex uppercase mb-4">
            ICON PREVIEW
          </h5>
          <div className="flex gap-14">
            <IconGood
              word=""
              strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
              strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[6px]"}
              iconColor={currentColor}
            />
            <IconBad
              word=""
              strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
              strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[6px]"}
              iconColor={currentColor}
            />
            <IconThis
              word=""
              strokeColor={isWhiteOutline ? "stroke-white" : "stroke-black"}
              strokeWidth={isBoldOutline ? "stroke-[16px]" : "stroke-[6px]"}
              iconColor={currentColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
