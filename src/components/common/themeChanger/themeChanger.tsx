import styles from './themeChanger.module.scss';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import locales from '@/locales/en/en.json';

const { components: { header } } = locales;

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className={styles.darkMode} onClick={handleTheme}>
      <span className={styles.darkMode__title}>{header.darkMode}</span>
    </div>
  )
}

export default ThemeChanger;