import Link from 'next/link'
import style from "./not-found.module.scss"
 
export default function NotFound() {
  return (
    <div className={style.errorContainer}>
      <h2>404 | Not Found</h2>
      <p>No encontramos el recurso solicitado.</p>
      <Link href="/">
        <span>Volver al Inicio</span>
      </Link>
    </div>
  )
}