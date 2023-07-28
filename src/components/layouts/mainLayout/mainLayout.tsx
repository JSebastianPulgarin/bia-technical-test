import styles from './mainLayout.module.scss';

import useSWR from 'swr';

import Header from '@/components/common/header/header';

const MainLayout = ({ children, fetcher, url }) => {  
  const { data, error, isLoading } = useSWR(url, fetcher, { revalidateOnFocus: false });

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <>      
      <Header />
      <div className={styles.mainContent}>
        {children({ data })}
      </div>
    </>
  )
}

export default MainLayout;