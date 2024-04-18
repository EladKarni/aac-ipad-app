import { ReactNode } from "react";
import SettingsMenu from "@/components/SettingsMenu/SettingsMenu";

type DrawerProps = {
  children: ReactNode;
};

const Drawer = ({ children }: DrawerProps) => {
  return (
    <div className="drawer w-[100vw]">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          className="absolute bg-red h-full flex items-center justify-center px-2 z10 w-12 "
        >
          ⚙
        </label>
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay bg-transparent"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-[#EFEFEF] text-black shadow-[4px_3px_8px_2px_rgba(118,117,117,0.74)] relative">
          <SettingsMenu />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
