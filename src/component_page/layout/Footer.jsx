import { Button, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer w-full">
                <div
                    className="bg-black flex items-center justify-evenly"
                    style={{ height: 195 }}
                >
                    <div className="text-white">
                        <h1 style={{ fontSize: 32 }}>
                            <b>Subscribe Our Newsletter</b>
                        </h1>
                    </div>
                    <div className="flex gap-4 justify-center">
                        <Input placeholder="Enter Your Email" />
                        <Button danger>Subscribe</Button>
                    </div>
                </div>
                <div
                    className="flex flex-row items-center justify-evenly text-white"
                    style={{
                        height: 359,
                        backgroundColor: "rgba(15, 32, 48, 1)",
                    }}
                >
                    <div className="basic-2/6">
                        <img
                            src="./src/assets/image/image 1.png"
                            alt="Logo"
                            className="h-10 w-10 mb-6"
                        />
                        <p className="break-after-all">
                            Amet quis rhoncus turpis phasellus ut dui.<br /> Volutpat turpis tortor
                            blandit eget nibh ac lacus vitae purus.<br /> Sagittis tortor fermentum.
                        </p>
                    </div>
                    <div className="basic-2/6">
                        <b>
                            <h3 className="py-6">Navigation</h3>
                        </b>
                        <Link className="block" to={'/'}>Home</Link>
                        <Link className="block" to={'/about'}>About Us</Link>
                        <Link className="block" to={'/service'}>Services</Link>
                        <Link className="block" to={'/contact'}>Contact Us</Link>
                    </div>
                    <div className="basic-2/6">
                        <b>
                            <h3 className="py-6">Services</h3>
                        </b>
                        <Link to={''} className="block">Security Managment</Link>
                        <Link to={''} className="block">Security Consultation</Link>
                        <Link to={''} className="block">Risk Management </Link>
                        <Link to={''} className="block">Crisis Management</Link>
                    </div>
                    <div className="basic-2/6">
                        <b>
                            <h3 className="py-6">Resources</h3>
                        </b>
                        <Link className="block" to={''}>Customer Stories</Link>
                        <Link className="block" to={''}>Help Center</Link>
                        <Link className="block" to={''}>Documentation</Link>
                        <Link className="block" to={''}>Blog & Guide</Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Footer;
