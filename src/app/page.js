"use client";

import Button from "./components/button";
import NumberInput from "./components/number-input";

export default function Home() {
  return (
    <main className="flex text-textColor text-center font-merriweather min-h-screen flex-col items-center justify-between mt-20">
      <div className="bg-primary w-2/3 h-auto p-14 rounded-3xl">
        <h1 className="text-3xl">Verify your email address</h1>
        <p className="text-sm w-2/3 mx-auto mt-3 mb-12">
          A four-digit code has been sent to your email
          name@frontendpro.dev.Please enter the code below to verify your email
          address.
        </p>
        <div className="grid grid-cols-4 gap-5 mb-16">
          <NumberInput />
          <NumberInput />
          <NumberInput />
          <NumberInput />
        </div>
        <Button label="Verify OTP" />
      </div>
    </main>
  );
}
