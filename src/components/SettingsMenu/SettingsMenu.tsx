"use client";

import Button from "../Button/Button";
import IconSettingsSection from "../IconSettingsSection/IconSettingsSection";
import ToggleSettingsSection from "../ToggleSettingsSection/ToggleSettingsSection";
import ColorPicker from "../ColorPicker/ColorPicker";
import Panel from "../Panel/Panel";

const MobileNavigation = () => {
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
          <Button activeText="Modern" defaultText="Modern" checked />
          <Button activeText="Energy" defaultText="Energy" disabled />
          <Button activeText="Cartoon" defaultText="Cartoon" disabled />
        </IconSettingsSection>
        <ToggleSettingsSection title="Use White Outlines" />
        <ToggleSettingsSection title="Use Thick Outlines" checked />
        <ToggleSettingsSection title="Destaturate Colors" />
        <ToggleSettingsSection title="Use Darker Colors" />
        <IconSettingsSection title="ICON COLORS">
          <Button activeText="Colorful" defaultText="Modern" checked />
          <Button activeText="Limited" defaultText="Energy" disabled />
          <Button activeText="1 Color" defaultText="Cartoon" disabled />
        </IconSettingsSection>
        <ColorPicker />
        <div className="h-48">
          <h5 className="text-2xl text-gray-600 flex uppercase mb-4">
            ICON PREVIEW
          </h5>
          <div className="flex h-full gap-14">
            <Panel />
            <Panel />
            <Panel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
