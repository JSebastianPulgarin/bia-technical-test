import { useRouter } from 'next/router';
// components
import MainLayout from '@/components/layouts/mainLayout/mainLayout';
import SelectedCountry from '@/components/common/selectedCountry/selectedCountry';
// consts
import { ENDPOINT_GET_COUNTRY_BY_CODE } from '@/consts/endpoints';

import { axiosCall } from '@/api/axiosCall';

const DetailCountry = ({ serverData }) => {
  const router = useRouter();
  const { code } = router.query;

  return (
    <MainLayout {...{ fetcher: axiosCall, url: `${ENDPOINT_GET_COUNTRY_BY_CODE}/${code}`, serverData }}>      
      {({ data, error, isLoading, isValidating }) => {
        return (
          <SelectedCountry 
            {...{
              data: data[0],
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

export async function getServerSideProps(context: any) {
  const { query: { code } } = context;
  const url = `${ENDPOINT_GET_COUNTRY_BY_CODE}/${code}`;

  const response = await axiosCall(url);
  const data = await response;

  return {
    props: {
      serverData: data,
    },
  };
}

export default DetailCountry;