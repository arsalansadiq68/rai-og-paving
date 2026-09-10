import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";

const navItems = [
  ["Home", "/"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Our Work", "/gallery"],
  ["Service Areas", "/areas"],
  ["Contact", "/contact"],
];

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f7f7f3] text-[#17211c]">
      <div className="bg-[#17211c] px-5 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e4c477]">
        Adelaide &amp; surrounding suburbs · Quality paving, done right
      </div>
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f7f7f3]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fd93bdecde0304b4aae247bbf7b3ffd85%2Fea84e4f606e44d1d875a453d57aa3bb5?format=webp&width=800&height=1200" alt="RAI OG PAVING" className="h-14 w-14 object-contain" />
            <span className="hidden border-l border-black/15 pl-3 text-[11px] font-bold uppercase leading-tight tracking-[0.16em] text-[#17211c] sm:block">Paving<br />contractor</span>
          </Link>
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, href]) => <NavLink key={href} to={href} className={({ isActive }) => `relative py-3 text-[11px] font-bold uppercase tracking-[0.16em] transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#b58c3b] after:transition-all ${isActive ? "text-[#b58c3b] after:w-full" : "text-[#26332b] after:w-0 hover:text-[#b58c3b] hover:after:w-full"}`}>{label}</NavLink>)}
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <a href="tel:0423575131" className="flex items-center gap-2 text-xs font-bold tracking-wide text-[#17211c]"><Phone size={15} /> 0423 575 131</a>
            <Link to="/contact" className="flex items-center gap-2 bg-[#b58c3b] px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.13em] text-white transition hover:bg-[#96742f]"><span>Get a free quote</span><ArrowUpRight size={15} /></Link>
          </div>
          <button className="text-[#17211c] lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
        </div>
        {open && <nav className="border-t border-black/10 bg-[#f7f7f3] px-5 pb-5 lg:hidden">{navItems.map(([label, href]) => <NavLink key={href} to={href} onClick={() => setOpen(false)} className="block border-b border-black/10 py-4 text-xs font-bold uppercase tracking-[0.16em]">{label}</NavLink>)}<Link to="/contact" onClick={() => setOpen(false)} className="mt-5 flex justify-center bg-[#b58c3b] px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white">Get a free quote</Link></nav>}
      </header>
      <main>{children}</main>
      <footer className="bg-[#17211c] text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
          <div><img src="https://cdn.builder.io/api/v1/image/assets%2Fd93bdecde0304b4aae247bbf7b3ffd85%2Fea84e4f606e44d1d875a453d57aa3bb5?format=webp&width=800&height=1200" alt="RAI OG PAVING" className="mb-5 h-24 w-24 object-contain" /><p className="max-w-xs text-sm leading-7 text-white/60">Professional paving services for builders, contractors, property projects and residential customers across Adelaide.</p></div>
          <div><p className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#e4c477]">Explore</p><div className="grid gap-3 text-sm text-white/65">{navItems.slice(1).map(([label, href]) => <Link key={href} to={href} className="transition hover:text-white">{label}</Link>)}</div></div>
          <div><p className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#e4c477]">Start a conversation</p><div className="grid gap-3 text-sm text-white/65"><a href="tel:0423575131" className="hover:text-white">0423 575 131</a><a href="mailto:nasrullahrai34@gmail.com" className="hover:text-white">nasrullahrai34@gmail.com</a><span>Adelaide &amp; surrounding suburbs</span></div></div>
        </div>
        <div className="border-t border-white/10 px-5 py-5 text-center text-[10px] uppercase tracking-[0.15em] text-white/35">© 2026 RAI OG PAVING. All Rights Reserved.</div>
      </footer>
      <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-2"><a href="https://wa.me/61423575131" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1d8d57] text-lg font-bold text-white shadow-lg transition hover:scale-105" aria-label="WhatsApp us">W</a><a href="tel:0423575131" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b58c3b] text-white shadow-lg transition hover:scale-105" aria-label="Call us"><Phone size={18} /></a></div>
    </div>
  );
}
