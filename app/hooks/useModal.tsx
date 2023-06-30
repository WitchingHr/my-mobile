import { create } from "zustand";

// types
interface ModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

// store
const useModal = create<ModalState>((set) => ({
  isOpen: false,
  onOpen: () => set(() => ({ isOpen: true })),
  onClose: () => set(() => ({ isOpen: false })),
}));

export default useModal;
