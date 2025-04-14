  // app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Chat App',
  description: 'A real-time chat app built with Next.js and Supabase',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

  