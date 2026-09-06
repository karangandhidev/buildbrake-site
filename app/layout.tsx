import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://buildbrake.karangandhi.dev'),
  title: 'BuildBrake | Guardrails and proof for Codex',
  description: 'Give Codex a clear finish line, a resource budget, and a proof check before it touches your code.',
  openGraph: { title: 'BuildBrake | Put a brake on wasteful agent runs', description: 'Local-first guardrails, resource limits, and proof for Codex coding tasks.', url: 'https://buildbrake.karangandhi.dev', siteName: 'BuildBrake', type: 'website', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'BuildBrake, guardrails and proof for Codex' }] },
  twitter: { card: 'summary_large_image', title: 'BuildBrake | Put a brake on wasteful agent runs', description: 'Local-first guardrails, resource limits, and proof for Codex coding tasks.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
