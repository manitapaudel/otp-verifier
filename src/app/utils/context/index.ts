import { createContext } from "react";

interface ContextProviderProps {
  handleShowToast: () => void;
  setShowToast: (a: boolean) => void;
  toastType: string;
  setToastType: (a: string) => void;
}

export const ToastContext = createContext<ContextProviderProps>(null);
