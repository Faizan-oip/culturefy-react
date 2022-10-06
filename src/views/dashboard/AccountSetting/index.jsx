import { React } from "react";
import { Row, Col, Container } from 'react-bootstrap'
import AccSidebar from './sidebarAccountSetting';
import Styles from './styles.module.scss'

const AccountSetting = ({ children }) => {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={4}>
                        <AccSidebar />
                    </Col>
                    <Col sm={8}>
                        <div className={Styles.authLayoutChildrens}>{children}</div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AccountSetting;