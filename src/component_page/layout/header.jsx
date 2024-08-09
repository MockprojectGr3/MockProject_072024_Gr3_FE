import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  PhoneFilled,
  PhoneOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Divider, Menu } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
  const items = [
    {
      label: <Link to={"/"}>Home</Link>,
      // label: 'Home Page',
      key: "home",
    },
    {
      label: "Sign in",
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        {
          label: <Link to={"login"}>Login</Link>,
          key: "login",
        },
        {
          label: <Link to={"register"}>Register</Link>,
          key: "register",
        },
      ],
    },
  ];
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      <header
        className="header flex flex-row justify-between items-center p-10 bg-danger"
        // style={{ backgroundColor: "rgba(15, 32, 48, 1)" }}
      >
        <div className="logo basis-1/4">
          <img
            src="./src/assets/image/image 1.png"
            alt="Logo"
            className="h-10 w-10"
          />
        </div>
        <p className="bg-danger text-blue">ádljádnakl</p>
        <div className="contact basis-3/4 flex justify-end items-center  text-white">
          <PhoneOutlined className="text-lg" />
        </div>
      </header>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </>
  );
};
export default Header;
