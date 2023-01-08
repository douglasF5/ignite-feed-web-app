import s from './styles.module.css';

export function Header() {
  return (
    <header className={s.headerContainer}>
      <div className={s.headerContentContainer}>
        <img className={s.logo} src="/logo-ignite-logo.svg" alt="Ignite Feed" />
        <a href="https://github.com/douglasF5" target="_blank" rel="noopener noreferrer">@douglasF5</a>
      </div>
    </header>
  );
}