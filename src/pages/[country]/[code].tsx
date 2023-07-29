import { useRouter } from 'next/router';
// components
import MainLayout from '@/components/layouts/mainLayout/mainLayout';
import SelectedCountry from '@/components/common/selectedCountry/selectedCountry';
// consts
import { ENDPOINT_GET_COUNTRY_BY_CODE } from '@/consts/endpoints';

import { getCountryByCode } from '@/api/ getCountryByCode';

const DetailCountry = () => {
  const router = useRouter();
  const { code } = router.query;

  return (
    <MainLayout {...{ fetcher: getCountryByCode, url: `${ENDPOINT_GET_COUNTRY_BY_CODE}/${code}` }}>      
      {({ data, error, isLoading, isValidating }) => {
        return (
          <SelectedCountry 
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

export default DetailCountry;