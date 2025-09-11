import Link from "next/link";
import PageTitle from "../page-title";
import BlogRow from "./blog-row";
import { ArrowRight } from "lucide-react";

export default function WhatsNew() {
  return (
    <section className="container mx-auto my-32 relative">
      <PageTitle title="See what's new" className="mb-16 mx-auto" />
      <BlogRow />
      <div className="mt-14 w-full h-auto flex justify-end items-center">
        <Link
          href="/blogs"
          className="text-sm sm:text-base font-medium text-black flex justify-center items-center hover:text-[var(--active)] 
              transition-all duration-100 ease-in-out"
        >
          See all
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
