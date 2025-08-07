// src/components/auth/RegisterForm.tsx

"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { PasswordStrength } from "../ui/password-strength";
import { Input } from "../ui/input";
import Link from "next/link";
import { Label } from "../ui/label";

export function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isStrong =
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[^a-zA-Z0-9]/.test(password) &&
    password.length >= 6;

  const isFormValid = email.includes("@") && isStrong && termsAccepted;

  return (
    <form className="flex flex-col gap-4 w-full">
      <Input
        type="email"
        placeholder="Email"
        className="border rounded-md p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="border rounded-md p-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-2 top-2 text-sm underline"
        >
          {showPassword ? "Hide" : "Show"}
        </Button>
      </div>

      <PasswordStrength password={password} />

      <Label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
        />
        I agree to{" "}
        <Link href="/terms" className="underline">
          terms & conditions
        </Link>
      </Label>

      <Button className="bg-blue-500 text-white" variant="default" size="lg" type="submit" disabled={!isFormValid}>
        Register
      </Button>
    </form>
  );
}
