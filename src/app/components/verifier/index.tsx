import { KeyboardEvent, useContext, useRef, useState } from "react";

import NumberInput from "../number-input";
import Button from "../button";
import { ToastContext } from "../../utils/context";

const otpCode = "1212";

const Verifier = () => {
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { handleShowToast, setShowToast, toastType, setToastType }: any =
    useContext(ToastContext);

  const handleKeyUp = (
    event: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputElement = inputRefs[index].current;

    const currentLength = inputElement?.value.length;
    const maxLength = inputElement?.maxLength;

    if (event.key === "Backspace") {
      const prevElement = inputRefs[index - 1]?.current;
      if (currentLength !== maxLength) {
        if (index > 0) {
          prevElement.focus();
        }
      }
    } else {
      if (currentLength === maxLength) {
        const nextElement = inputRefs[index + 1]?.current;
        if (index < 3) {
          nextElement.focus();
        } else {
          buttonRef.current.focus();
        }
      }
    }
  };

  const handleSubmit = () => {
    let enteredCode = "";
    for (let i = 0; i < 4; i++) {
      const inputElement = inputRefs[i].current;
      enteredCode += inputElement.value;
    }
    if (otpCode === enteredCode) {
      setToastType("success");
      handleShowToast();
    } else {
      setToastType("error");
      handleShowToast();
    }
  };

  return (
    <main className="flex text-textColor text-center font-merriweather min-h-screen flex-col items-center justify-between mt-20">
      <div className="bg-primary md:w-4/5 xl:w-2/3 h-screen md:h-auto py-14 px-5 sm:p-14 md:rounded-3xl">
        <h1 className="text-3xl">Verify your email address</h1>
        <p className="text-sm 500:w-2/3 mx-auto mt-3 mb-12">
          A four-digit code has been sent to your email name@frontendpro.dev.
          Please enter the code below to verify your email address.
        </p>
        <div className="grid grid-cols-4 gap-5 mb-16">
          {inputRefs.map((item, index) => (
            <NumberInput
              key={index}
              ref={inputRefs[index]}
              handleKeyUp={(event: KeyboardEvent<HTMLInputElement>) =>
                handleKeyUp(event, index)
              }
              extraClass={`border border-4 ${
                toastType === "success"
                  ? "border-green-600"
                  : toastType === "error"
                  ? "border-rose-600"
                  : "border-none"
              }`}
            />
          ))}
        </div>
        <Button label="Verify OTP" ref={buttonRef} handleClick={handleSubmit} />
      </div>
    </main>
  );
};

export default Verifier;
