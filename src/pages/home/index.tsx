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
          <div>
            <Row gutter={[20, 50]} className={styles.containerCards__row}>
              {data.map(country => {
                return (
                  <Col xs={24} sm={12} md={6}>
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