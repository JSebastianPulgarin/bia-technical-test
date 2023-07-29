import styles from './selectedCountry.module.scss';

import Image from 'next/image';
// components
import BackButton from "@/components/common/backButton/backButton";
import { Col } from '@/components/designSystem/layout/col';
import { Row } from '@/components/designSystem/layout/row';

import locales from '@/locales/en/en.json';
import formatNumberWithCommas from '@/utils/formatNumberWithCommas';

const { selectedCountry } = locales;

const SelectedCountry = ({ data, error, isLoading, isValidating }) => {
  console.log("data: ", data)
  return (
    <>
      <BackButton />   
      <div className={styles.card_selected_country}>
        <Row gutter={[60, 60]}>
          <Col xs={24} sm={12} md={12}>
            <div className={styles.card__img}>
              <Image
                fill
                src={data?.flags.png}
                alt={`${data?.name.common} Flag`}
                sizes="(max-width: 300px) 100vw, 300px"
              />
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <div className={styles.info}>
              <div className={styles.title}>
                <span>{data?.name.common}</span>
              </div>
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
              <br />
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
                <span className={styles.row__value}>{data?.tld[0]}</span>
              </div>
              <br />
              <div className={styles.borderCountries}>
                <span className={styles.borderCountries__label}>{selectedCountry.borderCountries}: </span>
                <div className={styles.borderCountries__border}>
                  {data?.borders?.map((border: string, index: number) => (
                    <span key={`BORDER-${index}`}>{border}</span>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>    
  )
}

export default SelectedCountry;