import "./global.css";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { SiteLayout } from "./components/SiteLayout";

const queryClient = new QueryClient();
const placeholders: Record<string, string> = { services: "Our Paving Services", about: "About RAI OG PAVING", gallery: "Our Work", areas: "Paving Services Across Adelaide", admin: "Private Admin Area" };
function Placeholder({ name }: { name: string }) { return <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 py-20 text-center"><p className="eyebrow animate-[fadeup_.6s_ease-out_both]">RAI OG PAVING</p><h1 className="display-title mt-5 animate-[fadeup_.7s_.12s_ease-out_both]">{name}</h1><p className="mt-5 max-w-md animate-[fadeup_.7s_.24s_ease-out_both] leading-7 text-[#59655e]">This page is ready for the next build pass. Get in touch now for a free quote.</p></div>; }
const Public = ({ children }: { children: React.ReactNode }) => <SiteLayout>{children}</SiteLayout>;
const App = () => <QueryClientProvider client={queryClient}><TooltipProvider><Toaster /><Sonner /><BrowserRouter><Routes><Route path="/" element={<Public><Index /></Public>} /><Route path="/contact" element={<Public><Contact /></Public>} /><Route path="/services" element={<Public><Placeholder name={placeholders.services} /></Public>} /><Route path="/about" element={<Public><Placeholder name={placeholders.about} /></Public>} /><Route path="/gallery" element={<Public><Placeholder name={placeholders.gallery} /></Public>} /><Route path="/areas" element={<Public><Placeholder name={placeholders.areas} /></Public>} /><Route path="/admin" element={<Placeholder name={placeholders.admin} />} /><Route path="*" element={<NotFound />} /></Routes></BrowserRouter></TooltipProvider></QueryClientProvider>;
createRoot(document.getElementById("root")!).render(<App />);
