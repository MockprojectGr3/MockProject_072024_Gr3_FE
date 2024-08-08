import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => {
    const items = [
        {
            label: <Link to={"/"}>Home Page</Link>,
            // label: 'Home Page',
            key: 'home',
            icon: <MailOutlined />,
        },
        {
            label: 'Sign in',
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                {
                    label: <Link to={"login"}>Login</Link>,
                    key: 'login',
                },
                {
                    label: <Link to={"register"}>Register</Link>,
                    key: 'register'
                },
            ],
        },
    ];
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Header;