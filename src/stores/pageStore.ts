import { create } from 'zustand'

export interface pageState {
    page: number;
}

export const usePageStore = create<pageState>()(() => ({
    page: 1,
}))