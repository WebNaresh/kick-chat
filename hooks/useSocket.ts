import { create } from "zustand";

interface BearState {
  socketId: string;
  setSocketId: (by: string) => void;
}

export const useSocket = create<BearState>()((set) => ({
  socketId: "",
  setSocketId: (by) => set((state) => ({ socketId: by })),
}));
