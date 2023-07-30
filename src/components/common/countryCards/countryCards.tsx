import styles from './countryCards.module.scss';
import { useState, useMemo, ChangeEvent } from 'react';

import Fuse from 'fuse.js';
import Image from 'next/image';
import { useRouter } from 'next/router';
// components
import { Col } from '@/components/designSystem/layout/col';
import { Row } from '@/components/designSystem/layout/row';
import SearchBar from '@/components/common/searchBar/searchBar';
import SelectComponent from '@/components/common/select/select';
// consts
import { REGIONS } from '@/consts/dropdown';
import { fuseOptions } from '@/consts/fuseOptions';
import { searchForACountry } from '@/consts/keysToSearchBy';

import useDebounce from '@/hooks/useDebounce';
import formatNumberWithCommas from '@/utils/formatNumberWithCommas';

import locales from '@/locales/en/en.json';

const { home } = locales;

const CountryCards = ({ data, error, isLoading, isValidating }) => {
  const router = useRouter();
  const isLoadingActive = isLoading || isValidating;

  const [selectedRegion, setSelectedRegion] = useState(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [debouncedValue] = useDebounce<string>(
    searchTerm,
    300
  );

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
  };

  const filterData = (data: any, region: string | null, searchTerm: string) => {
    const fuse = new Fuse(data, { ...fuseOptions, keys: searchForACountry });

    let filteredData = data;

    if (searchTerm) {
      filteredData = fuse.search(searchTerm).map((value) => value.item);
    }

    if (region) {
      const regionFilter = region.toLowerCase();
      filteredData = filteredData.filter(
        (country) => country.region && country.region.toLowerCase() === regionFilter
      );
    }

    return filteredData;
  };

  const filteredData = useMemo(() => {
    if (isLoadingActive || error || !data) return null;
    return filterData(data, selectedRegion, debouncedValue);
  }, [data, error, isLoadingActive, debouncedValue, selectedRegion]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCardClick = (country: string, code: string) => {
    router.push(`/${country}/${code}`);
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
          <SelectComponent 
            items={REGIONS} 
            value={selectedRegion} 
            onSelect={handleRegionSelect} 
          />
        </div>
      </div>
      <Row gutter={[60, 60]}>
        {filteredData?.map((country: any, index: number) => {
          return (
            <Col key={index} xs={24} sm={12} md={12} lg={8} xl={6}>
              <div 
                key={index} 
                className={styles.card} 
                onClick={() => handleCardClick(country?.name.common, country?.cca2)}
              >
                <div className={styles.card__img}>
                  <Image
                    fill
                    src={country?.flags.png}
                    alt={`${country?.name.common} Flag`}
                    sizes="(mLinkax-width: 300px) 100vw, 300px"
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