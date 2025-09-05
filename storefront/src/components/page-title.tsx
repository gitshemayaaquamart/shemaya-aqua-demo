import Image from "next/image";

interface PageTitleProps {
  title: string;
  className?: string;
}

export default function PageTitle({ title, className = "" }: PageTitleProps) {
  return (
    <h1 className={`text-3xl font-normal block relative ${className}`}>
      {title}
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-full h-1 flex justify-center items-center z-[-1]">
        <Image src="/images/title-line.svg" alt="Shemaya Aqua (Pvt) Ltd." width={600} height={600} className="w-[85%] h-auto" />
      </div>
    </h1>
  );
}
