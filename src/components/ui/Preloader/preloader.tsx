import s from './preloader.module.scss'
export const Preloader = () => {
  return (
    <div className={s.preloaderWrapper}>
      <span style={{ color: '#fff', fontSize: '20px' }}>Loading...</span>
    </div>
  )
}
