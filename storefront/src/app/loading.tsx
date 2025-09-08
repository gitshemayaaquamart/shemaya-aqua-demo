"use client";

import { Spinner } from "@/components/ui/shadcn-io/spinner";

export default function Loading() {
  return (
    <section className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[var(--active)]">
      <Spinner variant={"circle"} color="white" />
    </section>
  );
}
