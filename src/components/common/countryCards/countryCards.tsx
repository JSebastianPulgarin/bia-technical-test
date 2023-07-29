import styles from './countryCards.module.scss';
import { useState, useMemo, ChangeEvent } from 'react';

import Fuse from 'fuse.js';
import Image from 'next/image';
// components
import { Col } from '@/components/designSystem/layout/col';
import { Row } from '@/components/designSystem/layout/row';
import SearchBar from '@/components/common/searchBar/searchBar';
import DropdownComponent from '@/components/common/dropdown/dropdown';
// consts
import { REGIONS } from '@/consts/dropdown';
import { fuseOptions } from '@/consts/fuseOptions';
import { searchForACountry } from '@/consts/keysToSearchBy';

import useDebounce from '@/hooks/useDebounce';
import formatNumberWithCommas from '@/utils/formatNumberWithCommas';

import locales from '@/locales/en/en.json';

const { home } = locales;

const CountryCards = ({ data, error, isLoading, isValidating }) => {
  const isLoadingActive = isLoading || isValidating;
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [debouncedValue] = useDebounce<string>(
    searchTerm,
    300
  );

  const filteredData = useMemo(() => {
    if (isLoadingActive || error || !data) return null;

    const fuse = new Fuse(data, { ...fuseOptions, keys: searchForACountry });
    return fuse.search(debouncedValue).map((value: any) => value.item);
  }, [data, error, isLoadingActive, debouncedValue]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className={styles.toolbar}>
        <div className={styles.toolbar__search}>
          <SearchBar 
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.toolbar__dropdown}>
          <DropdownComponent items={REGIONS} />
        </div>
      </div>
      <Row gutter={[60, 60]}>
        {(debouncedValue === '' ? data : filteredData).map((country: any, index: number) => {
          return (
            <Col key={index} xs={24} sm={12} md={12} lg={8} xl={6}>
              <div key={index} className={styles.card}>
                <div className={styles.card__img}>
                  <Image
                    fill
                    src={country?.flags.png}
                    alt={`${country?.name.common} Flag`}
                    sizes="(max-width: 300px) 100vw, 300px"
                  />
                </div>
                <div className={styles.info}>
                  <span className={styles.info__title}>{country?.name.common}</span>
                  <div className={styles.row}>
                    <span className={styles.row__label}>{home.population}: </span>
                    <span className={styles.row__value}>
                      {formatNumberWithCommas(country?.population)}
                    </span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.row__label}>{home.region}: </span>
                    <span className={styles.row__value}>{country?.region}</span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.row__label}>{home.capital}: </span>
                    <span className={styles.row__value}>{country?.capital}</span>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>    
    </div>    
  )
}

export default CountryCards;