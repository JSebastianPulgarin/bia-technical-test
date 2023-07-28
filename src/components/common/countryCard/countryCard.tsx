import styles from './countryCard.module.scss';

import Image from 'next/image'

const CountryCard = ({ flag, name, population, region, capital }) => {
  return (
    <div className={styles.card}>
      <Image
        width={300}
        height={150}
        src={flag}
        alt={`${name} Flag`}
      />
      <div className={styles.info}>
        <span className={styles.info__title}>{name}</span>
        <div className={styles.row}>
          <span className={styles.row__label}>Population: </span>
          <span className={styles.row__value}>{population}</span>
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