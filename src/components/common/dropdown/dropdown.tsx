import { Button, Dropdown, message, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

import locales from '@/locales/en/en.json';

const { components: { dropdown } } = locales;

const items: MenuProps['items'] = [
  {
    key: '1',
    label: '1st menu item',
  },
  {
    key: '2',
    label: '2nd menu item',
  },
];

const handleMenuClick: MenuProps['onClick'] = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const DropdownComponent = () => {
  return (
    <Dropdown menu={menuProps}>
      <Button>
        <Space>
          {dropdown.placeholder}
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  )
}

export default DropdownComponent;