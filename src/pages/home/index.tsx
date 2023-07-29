// components
import MainLayout from '@/components/layouts/mainLayout/mainLayout';
import CountryCards from '@/components/common/countryCards/countryCards';
// consts
import { ENDPOINT_GET_ALL_COUNTRIES } from '@/consts/endpoints';

import { getAllCountries } from '@/api/getAllCountries';

const Home = () => {
  return (
    <MainLayout {...{ fetcher: getAllCountries, url: ENDPOINT_GET_ALL_COUNTRIES }}>      
      {({ data, error, isLoading, isValidating }) => {
        return (
          <CountryCards 
            {...{
              data,
              error,
              isValidating,
              isLoading,
            }}
          />
        );
      }}
    </MainLayout>
  );
}

export default Home;