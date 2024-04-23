import { create } from 'zustand'

export interface TogglesState {
    isWhiteOutline: boolean
    isBoldOutline: boolean
    isDesaturateColors: boolean
    isDarkerColors: boolean
}

export const useTogglesStore = create<TogglesState>()((set) => ({
    isWhiteOutline: false,
    isBoldOutline: false,
    isDesaturateColors: false,
    isDarkerColors: false,
}))