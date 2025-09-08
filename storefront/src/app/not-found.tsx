import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-screen h-screen bg-white flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl sm:text-6xl md:text-7xl text-[var(--primary)] mb-10 md:mb-20">404 Not Found</h1>
      <h3 className="text-center text-base sm:text-xl lg:text-2xl mb-5">The page you are looking for does not exist</h3>
      <h2 className="text-center text-sm sm:text-lg md:text-xl">
        Please visit the home page from{" "}
        <Link href="/" className="text-[var(--primary)] underline">
          here
        </Link>
      </h2>
    </section>
  );
}
