import Link from "next/link";
import { Door } from "@/components/Door";
import { H1 } from "@/components/typography/Headings";

const Page = () => (
  <main className="flex flex-col pt-16 justify-center items-center">
    <section className="flex flex-col border-4 relative w-96 py-6 px-12 h-96">
      <Door direction="up" position="top" />
      <Link href="/about">
        <H1>About</H1>
      </Link>
      <div className="h-8" />
      <section className="flex flex-row relative items-center">
        <aside className="-rotate-90 absolute left-0 pointer-events-none">
          <h2 className="h-36 ">Portfolio</h2>
        </aside>
        <div className="flex flex-col">
          <Link href="/academic">
            <H1>Academic</H1>
          </Link>
          <Link href="/professional">
            <H1>Professional</H1>
          </Link>
          <Link href="/personal">
            <H1>Personal</H1>
          </Link>
        </div>
      </section>
    </section>
  </main>
);

export default Page;
