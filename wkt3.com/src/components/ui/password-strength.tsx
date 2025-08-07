// src/components/ui/password-strength.tsx

import React from "react";

export function PasswordStrength({ password }: { password: string }) {
  const score =
    (/[A-Z]/.test(password) ? 1 : 0) +
    (/[a-z]/.test(password) ? 1 : 0) +
    (/\d/.test(password) ? 1 : 0) +
    (/[^a-zA-Z0-9]/.test(password) ? 1 : 0) +
    (password.length >= 6 ? 1 : 0);

  const labels = ["Very Weak", "Weak", "Okay", "Good", "Strong"];

  return (
    <div className="text-sm">
      Strength:{" "}
      <span className="font-semibold">{labels[score - 1] || "Too short"}</span>
    </div>
  );
}
