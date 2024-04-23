import { useState } from "react";
import Image from "next/image";
import QuestionIcon from "/public/tooltip-questionmark.png";

type IconSettingsSectionProps = {
  title: string;
  checked?: boolean;
};

const ToggleSettingsSection = ({
  title,
  checked = false,
}: IconSettingsSectionProps) => {
  const [isToggled, setisToggled] = useState(checked);
  return (
    <>
      <label
        htmlFor="one"
        className="drop-shadow-xl w-full flex flex-row-reverse justify-between items-center my-1"
        onTouchStart={() => setisToggled(!isToggled)}
      >
        <input
          id="one"
          type="checkbox"
          className="toggle checked:[--tglbg:#FFC635] [--tglbg:#A2A2A2] bg-white hover:bg-white border-gray-300 scale-[2] mr-8"
          checked={isToggled}
          readOnly
        />
        <h5 className="text-3xl flex gap-4 font-semibold">
          {title}
          <Image
            src={QuestionIcon}
            alt="question mark icon"
            className="cursor-pointer w-8 h-8 m-auto"
          />
        </h5>
      </label>
      <div className="divider my-1"></div>
    </>
  );
};

export default ToggleSettingsSection;
