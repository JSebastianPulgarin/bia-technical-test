import styles from './borderCountries.module.scss';

import locales from '@/locales/en/en.json';

const { components: { borderCountries }} = locales;

const BorderCountries = ({ borders }) => {
  return (
    <div className={styles.borderCountries}>
      <span className={styles.borderCountries__label}>{borderCountries.title}: </span>
      <div className={styles.borderCountries__border}>
        <div className={styles.cardsContainer}>
            {borders?.map((border: string, index: number) => (
              <span key={`BORDER-${index}`}>{border}</span>
            ))}
        </div>
      </div>
    </div>
  )
}

export default BorderCountries;