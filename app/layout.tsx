import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brayan Oduor | Data Analyst & Dashboard Developer',
  description: 'Professional portfolio of Brayan Oduor — Data Analyst, Dashboard Developer, and Business Intelligence specialist. Building real-time analytics dashboards and data-driven solutions.',
  keywords: ['data analyst', 'dashboard developer', 'business intelligence', 'Python', 'Plotly', 'Google Sheets', 'Vercel', 'Brayan Oduor'],
  authors: [{ name: 'Brayan Oduor' }],
  openGraph: {
    title: 'Brayan Oduor | Data Analyst & Dashboard Developer',
    description: 'Transforming raw data into interactive business intelligence.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-dark text-slate-200 antialiased">{children}</body>
    </html>
  )
}
