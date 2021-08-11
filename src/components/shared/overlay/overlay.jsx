import css from './overlay.module.css'
export const Overlay = ({ message }) => {
  return <div className={css.overlay}>{message}</div>
};