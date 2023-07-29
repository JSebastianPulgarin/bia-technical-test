import styles from './home.module.scss';

import { getAllCountries } from '@/api/getAllCountries';
import { ENDPOINT_GET_ALL_COUNTRIES } from '@/consts/endpoints';

import { Row, Col } from 'antd';
import SearchBar from '@/components/common/searchBar/searchBar';
import MainLayout from '@/components/layouts/mainLayout/mainLayout';
import CountryCard from '@/components/common/countryCard/countryCard';
import DropdownComponent from '@/components/common/dropdown/dropdown';

const Home = () => {
  return (
    <MainLayout {...{ fetcher: getAllCountries, url: ENDPOINT_GET_ALL_COUNTRIES }}>      
      {({ data }) => {
        return (
          <div>
            <div className={styles.toolbar}>
              <div className={styles.toolbar__search}>
                <SearchBar />
              </div>
              <div className={styles.toolbar__dropdown}>
                <DropdownComponent />
              </div>
            </div>
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