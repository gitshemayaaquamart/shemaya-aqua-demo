import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function BlogCard({ className }: { className?: string }) {
  return (
    <div
      className={`col-span-1 w-full h-auto box-border p-3 sm:p-5 flex flex-col justify-start items-start bg-[var(--secondary-bg)] rounded-xl border-2 
    border-black relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:border-2 
    after:border-black after:z-[-1] after:rounded-xl after:transition-all after:duration-300 after:ease-in-out xl:hover:after:translate-x-2 
    xl:hover:after:translate-y-2 hover:after:translate-x-1 hover:after:translate-y-1 ${className}`}
    >
      <Link href="/blogs/1" className="w-full h-auto aspect-video bg-white rounded-lg flex justify-center items-center overflow-hidden">
        <Image src="/images/blogs/blog-thumbnail.jpg" alt="product" width={600} height={600} className="min-w-full min-h-full object-cover" />
      </Link>
      <Link href="/blogs/1" className="text-base sm:text-base font-medium text-black mt-3 line-clamp-1">
        <Tooltip>
          <TooltipTrigger className="text-left">A New Shrimp Farm Launches in Chilaw</TooltipTrigger>
          <TooltipContent side="bottom">
            <p>A New Shrimp Farm Launches in Chilaw</p>
          </TooltipContent>
        </Tooltip>
      </Link>
      <Link href="/blogs/1" className="text-xs sm:text-sm text-black/90 mt-2 hidden sm:sm:line-clamp-2">
        We’re thrilled to share some exciting news for our aquaculture community — a brand-new shrimp farm has officially opened in Chilaw! This
        modern facility is designed with the latest technology and sustainable farming practices, ensuring healthy, high-quality shrimp for both local
        and export markets.
      </Link>
      <Link href="/blogs/1">
        <Button type="button" className="mt-2 sm:mt-5 bg-[var(--primary)] text-white border-black border-2 text-sm" variant={"default"}>
          Read more
        </Button>
      </Link>
    </div>
  );
}
