import styles from './home.module.scss';

import { getAllCountries } from '@/api/getAllCountries';
import MainLayout from '@/components/layouts/mainLayout/mainLayout';

const Home = () => {
  const url = `${process.env.NEXT_PUBLIC_API_COUNTRIES}/all`;

  return (
    <MainLayout {...{ fetcher: getAllCountries, url }}>      
      {({ data }) => {
        return (
          <>
            <span>Home</span>
          </>
        );
      }}
    </MainLayout>
  );
}

export default Home;