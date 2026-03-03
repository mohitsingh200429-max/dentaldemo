import type {Metadata} from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Dr. Aarya Sharma Dental Studio | Best Dentist in South Delhi',
  description: 'Advanced & Painless Dental Care in South Delhi. Trusted by 1,200+ Delhi patients for modern, safe, and comfortable treatments.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="font-sans text-slate-800 bg-slate-50 antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
