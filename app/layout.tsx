// app/layout.tsx

import './globals.css';

export const metadata = {
  title: 'My App',
  description: 'A modern Next.js app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
