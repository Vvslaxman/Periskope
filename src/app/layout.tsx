import './globals.css'

export const metadata = {
  title: 'Periskope',
  description: 'Built with Next.js, Tailwind, and Supabase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
