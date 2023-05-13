import './globals.css'

export const metadata = {
  title: 'Emersondont',
  description: 'My portifolio',
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
