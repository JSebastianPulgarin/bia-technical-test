import { Button, Dropdown, message, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

import locales from '@/locales/en/en.json';

const { components: { dropdown } } = locales;

const handleMenuClick: MenuProps['onClick'] = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const DropdownComponent = ({ items }) => {
  return (
    <Dropdown menu={{ items, onClick: handleMenuClick }}>
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