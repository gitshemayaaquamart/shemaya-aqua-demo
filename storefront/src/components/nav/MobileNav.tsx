import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={32} renderingIntent={"Mobile menu trigger"} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-2" className="py-2">
                <Link href="#" className="text-base text-black/90 hover:text-black font-light">
                  Home
                </Link>
              </AccordionItem>
              <AccordionItem value="item-1">
                <AccordionTrigger>Categories</AccordionTrigger>
                <AccordionContent>
                  <div className="w-full box-border pl-3">
                    <Accordion type="single" collapsible className="border-l pl-10 box-border">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-sm">Home</AccordionTrigger>
                        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <Link href="#" className="text-sm text-black/90 hover:text-black font-light">
                          Is it accessible?
                        </Link>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Services</AccordionTrigger>
                <AccordionContent>
                  <div className="w-full box-border pl-3">
                    <Accordion type="single" collapsible className="border-l pl-10 box-border">
                      <AccordionItem value="item-2" className="py-3">
                        <Link href="#" className="text-sm text-black/90 hover:text-black font-light">
                          Labrotary Services
                        </Link>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <Link href="#" className="text-sm text-black/90 hover:text-black font-light">
                          Advisor Services
                        </Link>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="py-2">
                <Link href="#" className="text-base text-black/90 hover:text-black font-light">
                  Blog
                </Link>
              </AccordionItem>
              <AccordionItem value="item-5" className="py-2">
                <Link href="#" className="text-base text-black/90 hover:text-black font-light">
                  Gallery
                </Link>
              </AccordionItem>
            </Accordion>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
