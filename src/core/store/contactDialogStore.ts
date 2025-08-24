import { create } from 'zustand';

interface ContactDialogStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useContactDialogStore = create<ContactDialogStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
