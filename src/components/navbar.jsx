import { InfoCircleOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const items = [
  {
    label: (
      <Link to="/" style={{ color: 'inherit' }}>
        Ohio River
      </Link>),
    key: 'main',
  },
  {
    label: (
      <Link to="/about" style={{ color: 'inherit' }}>
        About
      </Link>
    ),
    key: 'about',
    icon: <InfoCircleOutlined />,
  }
];
const Navbar = () => {
  const [current, setCurrent] = useState("main");
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Navbar;