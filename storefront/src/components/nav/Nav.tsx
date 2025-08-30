import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { NavLinks } from "./NavLinks";

export default function Nav() {
  return (
    <nav className="container mx-auto py-2.5">
      <div className="w-full h-auto flex justify-end items-center gap-3">
        <form action="" className="w-auto max-w-full h-auto flex justify-center items-center gap-2">
          <Input type="text" placeholder="Search" className="w-[450px] max-w-[450px] h-auto" />
          <Button type="submit" className="w-auto h-auto">
            <Search fill="currentColor" />
          </Button>
        </form>
        <NavLinks />
      </div>
    </nav>
  );
}
