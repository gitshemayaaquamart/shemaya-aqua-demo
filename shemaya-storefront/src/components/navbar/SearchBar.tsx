import { Input } from "../ui/input";

export default function SearchBar() {
  return (
    <form action="">
      <Input type="text" className="border-2 border-black/80 h-auto bg-[#0E4C92]/24 !ring-0 !outline-0 !focus:border-black" placeholder="Search" />
    </form>
  );
}
