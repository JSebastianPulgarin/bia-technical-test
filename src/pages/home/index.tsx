import styles from './home.module.scss';

import ThemeChanger from '@/hooks/ThemeChanger';

const Home = () => {
  return (
    <>
      <ThemeChanger />
      <p className={styles.title}>Home</p>
    </>
  )
  
}

export default Home;