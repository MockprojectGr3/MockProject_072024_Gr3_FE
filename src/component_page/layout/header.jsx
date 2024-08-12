import React, { useState } from "react";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
    const itemsLeft = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: "home",
        },
        {
            label: <Link to={"/about"}>About Us</Link>,
            key: "about",
        },
        {
            label: <Link to={"/service"}>Services</Link>,
            key: "services",
        },
        {
            label: <Link to={"/news"}>News</Link>,
            key: "news",
        },
        {
            label: <Link to={"/career"}>Careers</Link>,
            key: "careers",
        },
        {
            label: <Link to={"/contact"}>Contact Us</Link>,
            key: "contact",
        },
        {
            label: <Link to={"/faq"}>FAQs</Link>,
            key: "faq",
        },
    ];

    const itemsRight = [
        {
            label: <Link to={"/login"}>LOGIN</Link>,
            key: "login",
        },
        {
            label: <Link to={"/register"}>REGISTER</Link>,
            key: "register",
        },
    ];

    const [current, setCurrent] = useState("home");

    const onClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
    };

    return (
        <>
            <header
                className="header flex flex-row justify-between items-center p-4"
                style={{ backgroundColor: 'rgba(15, 32, 48, 1)', height: 80 }}
            >
                <div className="logo basis-1/4">
                    <img
                        src="./src/assets/image/image 1.png"
                        alt="Logo"
                        className="h-10 w-10"
                    />
                </div>
                <div className="contact basis-3/4 flex justify-end items-center" >
                    <div className="text-white flex gap-3 me-10"
                        style={{ alignItems: "baseline" }}
                    >
                        <PhoneOutlined />
                        <p>1-800-492-6185</p>
                    </div>
                    <div className="text-white flex gap-3"
                        style={{ alignItems: "baseline" }}
                    >
                        <MailOutlined />
                        <p>hi@gruardgrid.com</p>
                    </div>
                </div>
            </header>
            <div className="flex flex-row justify-between">
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={itemsLeft}
                    className="flex-1"
                    style={{ height: 60, backgroundColor: "rgba(214, 190, 154, 1)" }}
                />
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={itemsRight}
                    className="flex-none"
                    style={{ height: 60, backgroundColor: "rgba(214, 190, 154, 1)" }}
                />
            </div>
        </>
    );
};

export default Header;
