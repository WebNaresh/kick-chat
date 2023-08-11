import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/wrapper/theme-provider";
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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {/* {children} */}
          <div className=" pt-20">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
