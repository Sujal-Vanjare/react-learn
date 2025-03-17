import Image from "next/image";
import Link from "next/link";

const pages = [
  { id: 1, name: "nesting components", href: "/nesting-components" },
  { id: 2, name: "displaying data", href: "/displaying-data" },
  { id: 3, name: "conditional rendering", href: "/conditional-rendering" },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {pages.map((page) => (
            <li key={page.id}>
              <Link href={page.href} className="tracking-[-.01em]">
                {page.name}
              </Link>
            </li>
          ))}
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://react.dev/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/file.svg"
              alt="file logo"
              width={20}
              height={20}
            />
            Read React docs
          </a>
        </div>
      </main>
    </div>
  );
}
