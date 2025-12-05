import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Б. ДалайОчир — CV",
  description: "Personal CV website built with Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body className="page-animate">
        <header className="navbar">
          <div className="nav-left">
            <Link href="/"><a className="nav-logo">Dalaiochir</a></Link>
          </div>
          <nav className="nav-right">
            <Link href="/profile"><a>Profile</a></Link>
            <Link href="/skills"><a>Skills</a></Link>
            <Link href="/projects"><a>Projects</a></Link>
            <Link href="/experience"><a>Experience</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          © {new Date().getFullYear()} Б. ДалайОчир — Built with Next.js
        </footer>
      </body>
    </html>
  );
}
