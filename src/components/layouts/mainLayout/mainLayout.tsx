import styles from './mainLayout.module.scss';

import Header from '@/components/common/header/header';

const MainLayout = ({ children }) => {
  return (
    <>      
      <Header />
      <div className={styles.mainContent}>
        {children}
      </div>
    </>
  )
}

export default MainLayout;