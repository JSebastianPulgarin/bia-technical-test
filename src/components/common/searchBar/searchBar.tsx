import { SearchOutlined } from '@ant-design/icons';

// components
import { Input } from '@/components/designSystem/input';

import locales from '@/locales/en/en.json';

const { components: { searchBar } } = locales;

const SearchBar = ({ value, onChange }) => {
  return (
    <Input 
      value={value} 
      onChange={onChange}
      placeholder={searchBar.placeholder} 
      prefix={<SearchOutlined />} 
    />
  )
}

export default SearchBar;