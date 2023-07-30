import {  Select } from '@/components/designSystem/select';

import locales from '@/locales/en/en.json';

const { components: { dropdown } } = locales;

const SelectCompoent = ({ items, value, onSelect }) => {
  return (
    <Select
      value={value}
      options={items}
      onChange={onSelect}
      bordered={false}
      placeholder={dropdown.placeholder}
    />    
  )
}

export default SelectCompoent;