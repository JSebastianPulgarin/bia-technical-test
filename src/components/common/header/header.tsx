import styles from './header.module.scss';

import ThemeChanger from '@/components/common/themeChanger/themeChanger';

const Header = () => {
  return (
    <div className={styles.header}>
      <span className={styles.header__title}>Where in the world?</span>
      <ThemeChanger />
    </div>
  )
}

export default Header;