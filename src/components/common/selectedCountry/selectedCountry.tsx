import styles from './selectedCountry.module.scss';

import Image from 'next/image';
// components
import { Col } from '@/components/designSystem/layout/col';
import { Row } from '@/components/designSystem/layout/row';
import BackButton from "@/components/common/backButton/backButton";
import BorderCountries from '@/components/common/borderCountries/borderCountries';

import locales from '@/locales/en/en.json';
import formatNumberWithCommas from '@/utils/formatNumberWithCommas';

const { selectedCountry } = locales;

const SelectedCountry = ({ data }) => {
  return (
    <>
      <BackButton />   
      <div className={styles.cardSelectedCountry}>
        <Row gutter={[60, 60]}>
          <Col xs={24} sm={24} md={12}>
            <div className={styles.colImg}>
              <div className={styles.imgCountry}>
                <Image
                  fill
                  src={data?.flags.png}
                  alt={`${data?.name.common} Flag`}
                />
              </div>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className={styles.colInfo}>
              <div className={styles.title}>
                <span>{data?.name.common}</span>
              </div>
              <br />
              <div className={styles.info}>
                <div className={styles.principalInfo}>                
                  <div className={styles.row}>
                    <span className={styles.row__label}>{selectedCountry.nativeName}: </span>
                    <span className={styles.row__value}>
                      {data?.name.nativeName[Object.keys(data?.languages)[0]].common}
                    </span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.row__label}>{selectedCountry.population}: </span>
                    <span className={styles.row__value}>{formatNumberWithCommas(data?.population)}</span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.row__label}>{selectedCountry.region}: </span>
                    <span className={styles.row__value}>{data?.region}</span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.row__label}>{selectedCountry.subRegion}: </span>
                    <span className={styles.row__value}>{data?.subregion}</span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.row__label}>{selectedCountry.capital}: </span>
                    <span className={styles.row__value}>{data?.capital[0]}</span>
                  </div>
                </div>                
                <div className={styles.secondInfo}>
                  <div className={styles.row}>
                    <span className={styles.row__label}>{selectedCountry.topLevelDomain}: </span>
                    <span className={styles.row__value}>{data?.tld[0]}</span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.row__label}>{selectedCountry.currencies}: </span>
                    <span className={styles.row__value}>
                      {data?.currencies[Object.keys(data?.currencies)[0]]?.name}
                    </span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.row__label}>{selectedCountry.languages}: </span>
                    <span className={styles.row__value}>
                      {Object.values(data?.languages).join(', ')}
                    </span>
                  </div>
                </div>              
              </div>
              <br />
              <BorderCountries borders={data?.borders}/>
            </div>
          </Col>
        </Row>
      </div>
    </>    
  )
}

export default SelectedCountry;