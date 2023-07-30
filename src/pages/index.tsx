// components
import MainLayout from '@/components/layouts/mainLayout/mainLayout';
import CountryCards from '@/components/common/countryCards/countryCards';
// consts
import { ENDPOINT_GET_ALL_COUNTRIES } from '@/consts/endpoints';

import { axiosCall } from '@/api/axiosCall';

const Home = ({ serverData }) => {
  return (
    <MainLayout {...{ fetcher: axiosCall, url: ENDPOINT_GET_ALL_COUNTRIES, serverData }}>      
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

export async function getServerSideProps() {
  const url = ENDPOINT_GET_ALL_COUNTRIES;

  const response = await axiosCall(url);
  const data = await response;

  return {
    props: {
      serverData: data,
    },
  };
}

export default Home;