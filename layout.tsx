import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata={title:"Rever Store",description:"Produtos, tecnologia e soluções para negócios."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
