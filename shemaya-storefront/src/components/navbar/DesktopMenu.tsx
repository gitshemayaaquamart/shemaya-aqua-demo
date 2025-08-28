import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function DesktopMenu({ content }: { content: { title: string; href: string; subItems?: { title: string; href: string }[] }[] }) {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {content.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.subItems?.length ? (
              <>
                <Link href={item.href} className="font-normal hover:bg-[#61CAFF] hover:text-white">
                  <NavigationMenuTrigger className="font-normal hover:bg-[#61CAFF] hover:text-white">{item.title}</NavigationMenuTrigger>
                  <NavigationMenuIndicator />
                </Link>
                <NavigationMenuContent className="min-w-max !border-2 border-black">
                  {item.subItems.map((subItem) => (
                    <NavigationMenuLink key={subItem.title} href={subItem.href} className="font-normal hover:bg-[#61CAFF] hover:text-white">
                      {subItem.title}
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink href={item.href} className="font-normal hover:bg-[#61CAFF] hover:text-white">
                {item.title}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
