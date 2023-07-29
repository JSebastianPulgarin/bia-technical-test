import { useState, useEffect } from 'react';

import styles from './themeChanger.module.scss'
import { useTheme } from 'next-themes'

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
      <span className={styles.darkMode__title}>Dark Mode</span>
    </div>
  )
}

export default ThemeChanger;