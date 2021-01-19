import {Form, Input, Button, Checkbox, Col, Row} from 'antd'

const layout = {
    labelCol: {span: 4},
    wrapperCol: {span: 20},
};
const tailLayout = {
    wrapperCol: {offset: 4, span: 20},
};

const Login = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row>
            <Col span={8}>

            </Col>
            <Col span={8}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Логин"
                        name="username"
                        rules={[{required: true, message: 'Введите ваш логин!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Пароль"
                        name="password"
                        rules={[{required: true, message: 'Введите ваш пароль!'}]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Войти
                        </Button>
                        <Button type="link" htmlType="button">
                            Регистрация
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
            <Col span={8}>

            </Col>
        </Row>
    );
};

export default Login;