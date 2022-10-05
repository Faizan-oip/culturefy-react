import { Row, Col, Container } from 'react-bootstrap'
import Styles from './styles.module.scss'

import Notification from './notification'

const AccountSetting = () => {
    return (
        <>
            <Container className={Styles.accountSettingMain}>
                <Row>
                    <Col sm={10}>
                        <Notification />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AccountSetting;