// src/components/auth/AuthModal.tsx

"use client";

import { useEffect, useState } from "react";
import { Modal } from "../ui/modal";
import { quotes } from "@/lib/quotes";
import Image from "next/image";
import { RegisterForm } from "./RegisterForm";

export function AuthModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000); // every 5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col gap-4 items-center text-center">
        <Image
          src="/bowler.jpg"
          alt="trade"
          width={150}
          height={150}
          className="h-20 w-20 rounded-full"
        />
        <p className="text-lg font-semibold italic">{quotes[quoteIndex]}</p>
        <RegisterForm/>
      </div>
    </Modal>
  );
}
