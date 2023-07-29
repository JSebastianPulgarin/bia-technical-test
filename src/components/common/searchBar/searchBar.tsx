import { Input } from 'antd';

import { SearchOutlined } from '@ant-design/icons';
import locales from '@/locales/en/en.json';

const { components: { searchBar } } = locales;

const SearchBar = () => {
  return (
    <Input placeholder={searchBar.placeholder} prefix={<SearchOutlined />} />
  )
}

export default SearchBar;