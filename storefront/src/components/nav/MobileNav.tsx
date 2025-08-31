import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={32} renderingIntent={"Mobile menu trigger"} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shemaya Aqua Mart</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
