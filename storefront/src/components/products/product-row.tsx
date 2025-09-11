import ProductCard from "./product-card";

export default function ProductRow() {
  return (
    <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-2 md:gap-x-16 lg:gap-3 xl:gap-14 2xl:gap-22 box-border px-2 sm:px-3 md:px-14 lg:px-0 xl:px-10">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
