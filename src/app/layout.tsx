import "@/app/globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Link from "next/link";
import { SamaLogo } from "@/components/icons/SamaLogo";
import { InstagramIcon, LinkedInIcon } from "@/components/icons/social";

const figtreeFont = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Sama Shodjai",
    default: "Sama Shodjai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="lofi">
      <body className={`max-w-5xl mx-auto ${figtreeFont.className}`}>
        <header className="navbar sticky top-0 bg-base-100 z-30 px-6">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn glass btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16M4 4"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/academic">Academic</Link>
                </li>
                <li>
                  <Link href="/professional">Professional</Link>
                </li>
                <li>
                  <Link href="/personal">Personal</Link>
                </li>
              </ul>
            </div>
            <div className="navbar-center">
              <Link href="/">
                <SamaLogo />
              </Link>
            </div>
          </div>
          <div className="navbar-end">
            <a href="https://www.instagram.com/sama.shodjai" target="_blank">
              <button className="btn glass btn-circle">
                <InstagramIcon />
              </button>
            </a>
            <a href="https://ca.linkedin.com/in/SamaShodjai" target="_blank">
              <button className="btn glass btn-circle">
                <LinkedInIcon />
              </button>
            </a>
            <div className="w-[3px]"></div>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
