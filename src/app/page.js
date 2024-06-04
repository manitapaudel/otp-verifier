"use client";

import NumberInput from "./components/number-input";

export default function Home() {
  return (
    <main className="flex text-textColor min-h-screen flex-col items-center justify-between">
      <div className="bg-primary w-2/3 h-auto p-12 rounded-3xl">
        <h1>Verify your email address</h1>
        <p>
          A four-digit code has been sent to your email
          name@frontendpro.dev.Please enter the code below to verify your email
          address.
        </p>
        <div className="grid grid-cols-4 gap-5">
          <NumberInput />
          <NumberInput />
          <NumberInput />
          <NumberInput />
        </div>
      </div>
    </main>
  );
}
