import style from './loading.module.scss'

export default function NamePage() {
  return (
    <div className={style.loadingContainer}>
      <h2>Cargando...</h2>
    </div>
  );
}