import { Navbar } from "@/components"
import style from "./layout.module.scss"

export const metadata = {
  title: "Mercado Libre | Envíos Gratis",
  description: "Envíos gratis en el día ¡Encontra miles de marcas y productos a precios increíbles!",
  keywords: "compras en linea, tienda online, ventas onlinbe, envios rapidos, envios gratis, mercadolibre, productos"
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
