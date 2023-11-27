import Link from "next/link";
import { Door } from "@/components/Door";
import { H1 } from "@/components/typography/Headings";

const Page = () => (
  <main className="flex flex-col pt-16 place-items-center">
    <section className="flex flex-col border-4 relative pt-[3vw] pb-[9vw] px-[4vw]">
      <Door direction="up" position="top" />
      <Link href="/about">
        <h1 className="text-[4vw] px-[4vw]">About</h1>
      </Link>
      <div className="h-8" />
      <section className="px-[4vw] flex flex-row relative place-items-center">
        <aside className="-rotate-90 absolute left-[-7vw] pointer-events-none">
          <h2 className="text-[2.8vw] font-light">Portfolio</h2>
        </aside>
        <div className="flex flex-col">
          <Link href="/academic">
            <h1 className="text-[4vw]">Academic</h1>
          </Link>
          <Link href="/professional">
            <h1 className="text-[4vw]">Professional</h1>
          </Link>
          <Link href="/personal">
            <h1 className="text-[4vw]">Personal</h1>
          </Link>
        </div>
      </section>
    </section>
  </main>
);

export default Page;
