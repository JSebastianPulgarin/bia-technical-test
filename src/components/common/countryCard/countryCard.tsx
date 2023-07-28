import styles from './countryCard.module.scss';

import Image from 'next/image'

import formatNumberWithCommas from '@/utils/formatNumberWithCommas';

const CountryCard = ({ flag, name, population, region, capital }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <Image
          fill
          src={flag}
          alt={`${name} Flag`}
          sizes="(max-width: 300px) 100vw, 300px"
        />
      </div>
      <div className={styles.info}>
        <span className={styles.info__title}>{name}</span>
        <div className={styles.row}>
          <span className={styles.row__label}>Population: </span>
          <span className={styles.row__value}>{formatNumberWithCommas(population)}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.row__label}>Region: </span>
          <span className={styles.row__value}>{region}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.row__label}>Capital: </span>
          <span className={styles.row__value}>{capital}</span>
        </div>
      </div>
    </div>
  )
}

export default CountryCard;