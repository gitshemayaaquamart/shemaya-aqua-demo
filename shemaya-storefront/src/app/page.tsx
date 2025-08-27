import { Button } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "./navbar/Navbar";

export default function Home() {
  return (
    <>
      <header className="h-screen w-screen">
        <Navbar />
      </header>
    </>
  );
}
