import styles from './backButton.module.scss';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiArrowBack } from "react-icons/bi";
// components
import { Button } from '@/components/designSystem/button';

import locales from '@/locales/en/en.json';

const { components: { backButton } } = locales;

const BackButton = () => {
  const router = useRouter();

  const handleOnBack = () => {
    router.back();
  }

  return (
    <div className={styles.backButton}>
      <Button onClick={handleOnBack}>
        <BiArrowBack className={styles.backButton__icon} />
        <span>{backButton.title}</span>
      </Button>    
    </div>
  )
}

export default BackButton;