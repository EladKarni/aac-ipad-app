import Image from "next/image";
import QuestionIcon from "/public/tooltip-questionmark.png";

type IconSettingsSectionProps = {
  title: string;
  children: React.ReactNode;
};

const IconSettingsSection = ({ title, children }: IconSettingsSectionProps) => {
  return (
    <>
      <h5 className="text-2xl text-gray-400 flex gap-2 font-semibold">
        {title}
        <Image
          src={QuestionIcon}
          alt="question mark icon"
          className="cursor-pointer w-6 h-6 my-auto"
        />
      </h5>
      <div className="flex w-full justify-between gap-6 mt-1">{children}</div>
      <div className="divider my-1"></div>
    </>
  );
};

export default IconSettingsSection;
