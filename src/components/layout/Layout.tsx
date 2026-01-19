import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CursorGlow from "@/components/ui/CursorGlow";
import FloatingCTA from "@/components/ui/FloatingCTA";
import ScrollToTop from "@/components/ui/ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ScrollProgress />
      <CursorGlow />
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <FloatingCTA />
      <ScrollToTop />
    </div>
  );
};

export default Layout;