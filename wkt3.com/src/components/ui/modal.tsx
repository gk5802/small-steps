// src/components/ui/modal.tsx

"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => setIsBrowser(true), []);

  if (!isBrowser || !open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-lg w-full bg-white dark:bg-zinc-900 text-black dark:text-white rounded-2xl shadow-xl p-6"
      >
        {children}
      </div>
    </div>
  );
}
