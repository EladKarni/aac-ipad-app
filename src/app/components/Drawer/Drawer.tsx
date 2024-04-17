import { ReactNode } from "react";
import SettingsMenu from "@/components/SettingsMenu/SettingsMenu";

type DrawerProps = {
  children: ReactNode;
};

const Drawer = ({ children }: DrawerProps) => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay bg-transparent"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-[#E9E9E9] text-white">
          <SettingsMenu />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
