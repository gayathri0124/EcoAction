import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import PageTransition from "../transitions/page-transition";

interface AnimatedLayoutProps {
  children: ReactNode;
}

export default function AnimatedLayout({ children }: AnimatedLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageTransition>
        <main className="flex-grow">
          {children}
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}