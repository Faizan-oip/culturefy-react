import { Row, Col, Container } from 'react-bootstrap'

import Styles from './styles.module.scss'


const MessageRequest = () => {
    return (
        <>
            <Container className={Styles.notificationMain}>
                <Row>
                    <Col md={12}>
                        <h1>Message Request</h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MessageRequest;