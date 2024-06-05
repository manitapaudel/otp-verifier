"use client";

import { useRef } from "react";
import Button from "./components/button";
import NumberInput from "./components/number-input";

export default function Home() {
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const buttonRef = useRef();

  const handleKeyUp = (e, index) => {
    const inputElement = inputRefs[index].current;

    const currentLength = inputElement.value.length;
    const maxLength = inputElement.maxLength;

    if (e.key === "Backspace") {
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

  return (
    <main className="flex text-textColor text-center font-merriweather min-h-screen flex-col items-center justify-between mt-20">
      <div className="bg-primary md:w-4/5 xl:w-2/3 h-screen md:h-auto py-14 px-5 sm:p-14 md:rounded-3xl">
        <h1 className="text-3xl">Verify your email address</h1>
        <p className="text-sm 500:w-2/3 mx-auto mt-3 mb-12">
          A four-digit code has been sent to your email name@frontendpro.dev.
          Please enter the code below to verify your email address.
        </p>
        <div className="grid grid-cols-4 gap-5 mb-16">
          <NumberInput
            ref={inputRefs[0]}
            handleKeyUp={(e) => handleKeyUp(e, 0)}
          />
          <NumberInput
            ref={inputRefs[1]}
            handleKeyUp={(e) => handleKeyUp(e, 1)}
          />
          <NumberInput
            ref={inputRefs[2]}
            handleKeyUp={(e) => handleKeyUp(e, 2)}
          />
          <NumberInput
            ref={inputRefs[3]}
            handleKeyUp={(e) => handleKeyUp(e, 3)}
          />
        </div>
        <Button label="Verify OTP" ref={buttonRef} />
      </div>
    </main>
  );
}
