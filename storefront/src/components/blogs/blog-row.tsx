import BlogCard from "./blog-card";

export default function BlogRow() {
  return (
    <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-8 sm:gap-y-0 gap-x-5 lg:gap-x-12 xl:gap-x-18 2xl:gap-x-28 box-border px-2 sm:px-3 md:px-14 lg:px-0 xl:px-10">
      <BlogCard />
      <BlogCard />
      <BlogCard className="hidden xl:flex" />
    </div>
  );
}
