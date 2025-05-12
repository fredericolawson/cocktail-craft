import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Beam",
  description: "Digital Services for Bermuda",
};

export default function RootLayout({ children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <div className="min-h-screen bg-gray-100/50 flex-1 flex flex-col mx-auto w-full">
          <main className="flex-1 flex flex-col items-center justify-center max-w-screen-2xl mx-auto w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
