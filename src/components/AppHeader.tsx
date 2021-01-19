import {Avatar, Button, Col, Row} from 'antd'
import {Header} from 'antd/lib/layout/layout'
import {LoginOutlined, LogoutOutlined, UserOutlined} from '@ant-design/icons'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const AppHeader = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [disable, setDisable] = useState<boolean>(false)

    return <Header className="site-layout-background" style={{padding: 0}}>
        <Row>
            <Col span={18}>
                some content1
            </Col>
            {isAuth
                ? <>
                    <Col span={2}>
                        User name
                    </Col>
                    <Col span={2}>
                        <Avatar size={45} style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                    </Col>
                    <Col span={2}>
                        <Link to={'/login'}>
                            <Button
                                type="primary"
                                icon={<LogoutOutlined/>}
                                onClick={() => {
                                    setDisable(true)
                                    setIsAuth(false)
                                    setDisable(false)
                                }}
                                title={'Выход'}
                                disabled={disable}
                                loading={disable}
                                shape="round"
                                size={'large'}
                            />
                        </Link>
                    </Col>
                </>
                : <Col span={6}>
                    <Link to={'/login'}>
                        <Button
                            type="primary"
                            icon={<LoginOutlined/>}
                            onClick={() => {
                                setDisable(true)
                                setIsAuth(true)
                                setDisable(false)
                            }}
                            disabled={disable}
                            loading={disable}
                            title={'Авторизация'}
                            shape="round"
                            size={'large'}
                        >
                            Авторизируйтесь!
                        </Button>
                    </Link>
                </Col>
            }

        </Row>
    </Header>
}

export default AppHeader