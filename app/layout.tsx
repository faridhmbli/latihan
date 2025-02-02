// Import file "gLobals.css"
import './globals.css'
import Link from "@/node_modules/next/link"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      {/* Area Header */}
      <header className='text-menu'>
        <a href={"/"}>Dassboard</a> |
        <Link href={"/profil"}>Profil</Link> |
        Visi |
        kunci
      </header>

        {children}
      
      {/* Area Footer */}
      <footer>
        Copyright &copy; 2024 - farid - IF 22 C
      </footer>
      </body>
    </html>
  )
}
