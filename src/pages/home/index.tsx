import styles from './home.module.scss';


import Header from '@/components/common/header';

const Home = () => {
  return (
    <>      
      <Header />
      <p className={styles.title}>Home</p>
    </>
  );
}

export default Home;