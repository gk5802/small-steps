// src/app/page.tsx

"use client";

import { useState } from "react";
import { AuthModal } from "@/components/auth/AuthModal";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <Button onClick={() => setOpen(true)}>Open Register</Button>
      <AuthModal open={open} onClose={() => setOpen(false)} />
    </main>
  );
}
