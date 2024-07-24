import { create } from "zustand";

const useModalStore = create((set) => ({
  isOpen: false,
  openModal: (message) => set({ isOpen: true, message }),
  closeModal: () => set({ isOpen: false, message: "" }),
}));

export default useModalStore;
