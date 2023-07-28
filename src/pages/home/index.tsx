import styles from './home.module.scss';

import MainLayout from '@/components/layouts/mainLayout/mainLayout';

const Home = () => {
  return (
    <MainLayout>
      <span className={styles.title}>Home</span>
    </MainLayout>
  );
}

export default Home;