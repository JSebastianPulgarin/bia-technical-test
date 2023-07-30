import styles from './header.module.scss';

// components
import ThemeChanger from '@/components/common/themeChanger/themeChanger';

import locales from '@/locales/en/en.json';

const { components: { header } } = locales;

const Header = () => {
  return (
    <div className={styles.header}>
      <span className={styles.header__title}>{header.title}</span>
      <ThemeChanger />
    </div>
  )
}

export default Header;