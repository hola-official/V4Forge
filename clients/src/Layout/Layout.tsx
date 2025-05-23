import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { Outlet } from "react-router-dom";
import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="launchpad-theme">
      <div className="min-h-screen bg-gradient-to-br from-background to-background/90 overflow-hidden relative">
        <Navbar />
        <main className="container mx-auto py-6 px-4 relative z-10">
          {children || <Outlet />}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
