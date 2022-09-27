import { Row, Col, Container } from 'react-bootstrap'
import coverImg from '../../../assets-qa/images/video5.png'
import Mentorship from '../../../components/Profile/Mentorship'
import ProfileCover from '../../../components/Profile/profileCover'
import Recognition from '../../../components/Profile/Recognition'
import Styles from './index.module.scss'
const Community1 = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={10}>
                        <ProfileCover userCoverImg={coverImg} />
                        <Row className={Styles.profileFeed}>
                            <Col sm={3}>
                                <Recognition />
                                <Mentorship />
                            </Col>
                            <Col sm={8}>

                            </Col>
                        </Row>
                    </Col>
                    <Col sm={2}>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Community1;