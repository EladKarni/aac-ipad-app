import { create } from 'zustand'

export type colorOptions = "none" | "white" | "black" | "gray" | "light-gray" | "dark-gray" | "red" | "blue" | "green" | "yellow" | "purple" | "orange" | "skintone1" | "skintone2" | "skintone3" | "skintone4" | "skintone5" | "skintone6";

export interface ColorState {
    currentColor: colorOptions;
}

export const useColorStore = create<ColorState>()((set) => ({
    currentColor: "white",
}))