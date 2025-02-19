import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agusti Weeding',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black h-screen mx-auto">
        <main className="max-w-[430px] mx-auto bg-white overflow-x-hidden overflow-y-auto h-screen no-scrollbar">
          {children}
        </main>
      </body>
    </html>
  );
}
