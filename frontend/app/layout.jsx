import { Navbar } from "@/components"
import style from "./layout.module.scss"

export const metadata = {
  title: "Buscador",
  description: "Pagina del buscador",
  keywords: "buscador, mercadolibre"
}

export default function RootLayout({children}) {
 return (
    <html className={style.bodyReset}>
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
