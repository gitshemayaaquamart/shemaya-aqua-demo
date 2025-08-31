"use client";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DesktopNav } from "./DesktopNav";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export default function Nav() {
  const isLgUp = useMediaQuery("(min-width: 1024px)");
  return (
    <nav className="w-full lg:container mx-auto py-2.5 flex justify-between items-center gap-2">
      <div className="w-full h-auto flex justify-end items-center gap-3">
        <form action="" className="w-auto max-w-full h-auto flex justify-center items-center gap-2">
          <Input type="text" placeholder="Search" className="w-[300px] md:w-[550px] lg:w-[450px] max-w-full h-auto" />
          <Button type="submit" className="w-auto h-auto">
            <Search fill="currentColor" />
          </Button>
        </form>
      </div>
      {isLgUp ? <DesktopNav /> : <MobileNav />}
    </nav>
  );
}
