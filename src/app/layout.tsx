import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";


export const metadata: Metadata = {
  title: "Cocktail Craft",
  description: "Bermuda's emergency cocktail service, delivered to your boat",
};

export default function RootLayout({ children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <div className="min-h-svh bg-gray-100/50 flex-1 flex flex-col mx-auto w-full text-gray-800">
          <main className="flex-1 flex flex-col items-center justify-center max-w-screen-2xl mx-auto w-full p-4 md:p-8">
            {children}
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="flex justify-center items-center text-sm py-4">
      Beam Bermuda Ltd &copy; {new Date().getFullYear()}
    </footer>
  );
}