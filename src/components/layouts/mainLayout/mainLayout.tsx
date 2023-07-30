import styles from './mainLayout.module.scss';

import useSWR from 'swr';

// components
import Header from '@/components/common/header/header';

import type { IMainLayout } from './IMainLayout';

const MainLayout = ({ children, fetcher, url, serverData, revalidateOnFocus = false }: IMainLayout.IProps) => {  
  const { data, error, mutate, isLoading, isValidating } = useSWR(
    url, fetcher, { initialData: serverData, revalidateOnFocus: revalidateOnFocus }
  );

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return (
    <>      
      <Header />
      <div className={styles.mainContent}>
        {children({ data, error, mutate, isLoading, isValidating })}
      </div>
    </>
  )
}

export default MainLayout;