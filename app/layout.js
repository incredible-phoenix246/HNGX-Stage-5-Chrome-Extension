import './globals.css'
import { Inter, Work_Sans, Sora, Sen, Manrope } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter' 
})
const workSans = Work_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
})

const sora = Sora({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: '--sora-font'
})

const sen = Sen({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: '--sen-font'
})

const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: '--font-manrope'
})

export const metadata = {
  title: 'Help Me Out',
  description: 'Record Screen Seamlessly',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${sen.variable} ${manrope.variable}`}>
      <body className={workSans.className}>
        {children}
      </body>
    </html>
  )
}
