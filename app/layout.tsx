import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oh My Ink',
  description: 'An AI-powered application that lets you visualize tattoos on your skin in real time',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
