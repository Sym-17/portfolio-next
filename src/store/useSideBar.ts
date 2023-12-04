import { create } from "zustand";

type Store = {
  showSideBar: boolean;
  changeMenu: (value: boolean) => void;
};

const useSideBar = create<Store>()((set) => ({
  showSideBar: false,
  changeMenu: (value) => set((state) => ({ showSideBar: value })),
}));

export default useSideBar;
