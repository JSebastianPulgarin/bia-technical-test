import dynamic from 'next/dynamic';
// components
import Loader from '@/components/common/loader/loader';
import CountryCards from '@/components/common/countryCards/countryCards';
// consts
import { ENDPOINT_GET_ALL_COUNTRIES } from '@/consts/endpoints';

import { axiosCall } from '@/api/axiosCall';

const MainLayoutComponent = dynamic(
  () => import('@/components/layouts/mainLayout/mainLayout'), 
  { loading: () => <Loader /> }
);

const Home = () => {
  return (
    <MainLayoutComponent {...{ fetcher: axiosCall, url: ENDPOINT_GET_ALL_COUNTRIES }}>      
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
    </MainLayoutComponent>
  );
}

export default Home;