import React from 'react';
import { Button, Form, Grid, Input, InputNumber } from 'antd';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
    console.log(values);
};
const ContactPage = () => (
    <>
        <h1
            style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '32px' }}
        >QUOTE REQUEST FORM</h1>

        <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{
                maxWidth: 600,
                margin: '20px auto',
                textAlign: 'justify'
            }}
            align="baseline"
            validateMessages={validateMessages}
        >
            <Form.Item
                name={['user', 'Firstname']}
                label="First name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />

            </Form.Item>
            <Form.Item
                name={['user', 'lastname']}
                label="Last name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />

            </Form.Item>

            <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[
                    {
                        type: 'email',
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'message']} label="Message">
                <Input.TextArea />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    ...layout.wrapperCol,
                    offset: 8,
                }}
            >

                <Button type="primary" htmlType="submit"
                    style={{ backgroundColor: '#FFE818', color: '#333333', fontWeight: 'bold' }}
                >
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </>

);



export default ContactPage;