import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Nav() {
  return (
    <nav className="container mx-auto py-2.5">
      <div className="w-full h-auto flex justify-end items-center">
        <form action="" className="w-auto h-auto flex justify-center items-center gap-2">
          <Input type="text" placeholder="Search" className="w-auto h-auto" />
          <Button type="submit" className="w-auto h-auto">
            <Search fill="currentColor" />
          </Button>
        </form>
      </div>
    </nav>
  );
}
