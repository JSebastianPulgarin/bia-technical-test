import styles from './loader.module.scss';

import { LoadingOutlined } from '@ant-design/icons';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <span>Loading...</span>
    </div>
  )
}

export default Loader;