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

const content: { title: string; href: string; subItems?: { title: string; href: string }[] }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Categories",
    href: "/",
    subItems: [
      {
        title: "Category 1",
        href: "/",
      },
      {
        title: "Category 2",
        href: "/",
      },
      {
        title: "Category 3",
        href: "/",
      },
    ],
  },
  {
    title: "Services",
    href: "/",
    subItems: [
      {
        title: "Advisor Services",
        href: "/",
      },
      {
        title: "Laboratory Services",
        href: "/",
      },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

export default function Navbar() {
  return (
    <nav className="container mx-auto h-auto flex justify-between items-center py-1">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          {content.map((item) => (
            <NavigationMenuItem key={item.title}>
              {item.subItems?.length ? (
                <>
                  <Link href={item.href} className="font-normal hover:bg-[#61CAFF] hover:text-white">
                    <NavigationMenuTrigger className="font-normal hover:bg-[#61CAFF] hover:text-white">{item.title}</NavigationMenuTrigger>
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
          {/* <NavigationMenuItem>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-normal">Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-normal">Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="min-w-[100px] w-max h-auto flex flex-column justify-start items-start gap-1">
                <ul className="w-max">
                  <li className="w-max">
                    <NavigationMenuLink href="/">Advisor services</NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/">Labrotary services</NavigationMenuLink>
                  </li>
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
