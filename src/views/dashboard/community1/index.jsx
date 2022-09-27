import { Row, Col, Container } from 'react-bootstrap'
import coverImg from '../../../assets-qa/images/video5.png'
import CreatePost from '../../../components/Profile/CreatePost'
import Mentorship from '../../../components/Profile/Mentorship'
import Posts from '../../../components/Profile/Posts'
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
                            <Col sm={1}>

                            </Col>
                            <Col sm={8}>
                                <CreatePost variant='primary' />
                                <Posts 
                                    postOwnerImg={coverImg} 
                                    postOwner='You' 
                                    postTime='Just Now' 
                                    postImg={coverImg} 
                                    lessonNumber='1' 
                                    lessonName='Leadership and Organizational Training'
                                    partNumber='1'
                                    partName='Introduction'
                                    lessonNextBtn='Watch Part 2'
                                    lessonNextBtnIcon='fa-solid fa-arrow-right'
                                    reactedUserImg={coverImg}
                                    commentsCount='0'
                                    shareCount='0'
                                    currentUserImg={coverImg}
                                />
                                <Posts 
                                    postOwnerImg={coverImg} 
                                    postOwner='You' 
                                    postTime='32 mins ago' 
                                    reactedUserImg={coverImg}
                                    commentsCount='0'
                                    shareCount='0'
                                    currentUserImg={coverImg}
                                    postText=' I would like to Kudos @Carla, for the #courteousness in every appointment, and deadlines throughout the month of may '
                                />
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