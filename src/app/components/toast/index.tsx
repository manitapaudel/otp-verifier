"use client";

import { CheckIcon, CloseIcon, WarningIcon } from "../../icons";

interface ToastProps {
  toastType: string;
  extraClass: string;
  setShowToast: (a: boolean) => void;
}

const Toast = ({ toastType, extraClass, setShowToast }: ToastProps) => {
  return (
    <div
      className={`absolute right-0 top-0 z-10 margin-0 flex items-center w-72 h-16 rounded-md p-2.5 transition ease-in-out delay-150 border border-l-8 ${
        toastType === "success"
          ? "border-green-500 bg-green-100"
          : toastType === "error"
          ? "border-red-600 bg-red-100"
          : ""
      } ${extraClass}`}
    >
      <div className="flex items-center justify-center text-gray-700 text-sm">
        {toastType === "success" ? (
          <CheckIcon className="w-7 h-7 mr-3 text-green-500" />
        ) : (
          <WarningIcon className="w-7 h-7 mr-3 text-red-600" />
        )}
        {toastType === "success"
          ? "OTP verified successfully!"
          : "Invalid OTP!"}
      </div>
      <button
        className="absolute top-2 right-0"
        onClick={() => setShowToast(false)}
      >
        <CloseIcon className="w-4 h-4 mr-3 text-inherit" />
      </button>
    </div>
  );
};

export default Toast;
