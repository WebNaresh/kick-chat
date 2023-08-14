import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/ui/wrapper/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./(bare)/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className="dark"
      style={{ colorScheme: "dark" }}
    >
      <body className={cn(inter.className, "flex flex-col h-screen")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
