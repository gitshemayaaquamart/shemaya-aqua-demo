import DesktopMenu from "./DesktopMenu";
import SearchBar from "./SearchBar";

const content: { title: string; href: string; subItems?: { title: string; href: string }[] }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Categories",
    href: "/products/all",
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
        href: "/services/advisor-services",
      },
      {
        title: "Laboratory Services",
        href: "/services/laboratory-services",
      },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
];

export default function Navbar() {
  return (
    <nav className="container mx-auto h-auto flex justify-between items-center py-1">
      <SearchBar />
      <DesktopMenu content={content} />
    </nav>
  );
}
