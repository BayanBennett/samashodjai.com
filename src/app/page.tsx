import Link from "next/link";
import { Door } from "@/components/Door";

const Page = () => (
  <main className="flex flex-col pt-16 place-items-center">
    <section className="flex flex-col border-4 relative py-[9vw] px-[4vw] justify-center">
      <Door direction="up" position="top" />
      {/*<Link href="/about">*/}
      {/*  <h1 className="text-[calc(2vw+24px)] px-[calc(6vw+24px)]">About</h1>*/}
      {/*</Link>*/}
      <section className="px-[4vw] flex flex-row relative place-items-center">
        <aside className="pointer-events-none">
          <h2
            style={{
              writingMode: "vertical-lr",
              transform: "rotate(180deg)",
            }}
            className="text-[calc(1.6vw+16px)] font-light"
          >
            &nbsp;
          </h2>
        </aside>
        <div className="flex flex-col">
          <Link href="/about">
            <h1 className="text-[calc(2vw+24px)]">About</h1>
          </Link>
        </div>
      </section>
      <div className="h-8" />
      <section className="px-[4vw] flex flex-row relative place-items-center">
        <aside className="pointer-events-none">
          <h2
            style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
            className="text-[calc(1.6vw+16px)] font-light"
          >
            Portfolio
          </h2>
        </aside>
        <div className="flex flex-col">
          <Link href="/academic">
            <h1 className="text-[calc(2vw+24px)]">Academic</h1>
          </Link>
          <Link href="/professional">
            <h1 className="text-[calc(2vw+24px)]">Professional</h1>
          </Link>
          <Link href="/personal">
            <h1 className="text-[calc(2vw+24px)]">Personal</h1>
          </Link>
        </div>
      </section>
    </section>
  </main>
);

export default Page;
