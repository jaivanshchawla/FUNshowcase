"use client";

import { Component as KineticNavbar } from "@/components/ui/sterling-gate-kinetic-navigation";

export default function GlobalNavbar() {
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <KineticNavbar />
    </div>
  );
}
