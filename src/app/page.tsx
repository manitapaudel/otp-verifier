"use client";

import { useState } from "react";

import { ToastContext } from "./utils/context";
import Toast from "./components/toast";
import Verifier from "./components/verifier";

export default function Home() {
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState("neutral");

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 6000);
  };

  return (
    <div>
      <Toast
        extraClass={`${showToast ? "translate-x-0" : ""}`}
        setShowToast={setShowToast}
        toastType={toastType}
      />
      <ToastContext.Provider
        value={{
          handleShowToast,
          setShowToast,
          toastType,
          setToastType,
        }}
      >
        <Verifier />
      </ToastContext.Provider>
    </div>
  );
}
