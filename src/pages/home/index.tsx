import styles from './home.module.scss';

import { getAllCountries } from '@/api/getAllCountries';
import { ENDPOINT_GET_ALL_COUNTRIES } from '@/consts/endpoints';

import { Row, Col } from 'antd';
import MainLayout from '@/components/layouts/mainLayout/mainLayout';
import CountryCard from '@/components/common/countryCard/countryCard';

const Home = () => {
  return (
    <MainLayout {...{ fetcher: getAllCountries, url: ENDPOINT_GET_ALL_COUNTRIES }}>      
      {({ data }) => {
        return (
          <div className={styles.mainContainer}>
            <Row gutter={[60, 60]}>
              {data.map((country: any, index: number) => {
                return (
                  <Col key={index} xs={24} sm={12} md={12} lg={8} xl={6}>
                    <CountryCard 
                      flag={country?.flags.png}
                      name={country?.name.common}
                      population={country?.population}
                      region={country?.region}
                      capital={country?.capital}
                    />
                  </Col>                    
                )
              })}
            </Row>
          </div>
        );
      }}
    </MainLayout>
  );
}

export default Home;