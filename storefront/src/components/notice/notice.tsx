export default function Notice({ notice }: { notice: string }) {
  return (
    <section className="w-full h-auto flex justify-center items-center box-border px-2 py-1 bg-[var(--primary)] sticky top-0 z-50">
      <p className="text-xs sm:text-sm text-white text-center">{notice}</p>
    </section>
  );
}
