import { create } from "zustand";

type Store = {
  nightTheme: boolean;
  changeTheme: (value: boolean) => void;
};

const useNightTheme = create<Store>()((set) => ({
  nightTheme: false,
  changeTheme: (value) => set((state) => ({ nightTheme: value })),
}));
export default useNightTheme;
