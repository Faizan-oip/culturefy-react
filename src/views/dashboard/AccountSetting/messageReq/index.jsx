import { Row, Col, Container } from 'react-bootstrap'
import FriendNotfList from '../../../../components/common/FriendNotfList';
import Heading from '../../../../components/common/heading'
import Search from '../../../../components/common/search';
import Styles from './styles.module.scss'
import img1 from '../../../../assets-qa/images/inst1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/fontawesome-free-solid";



const MessageRequest = () => {
    function SearchQa() {
        console.log('Search');
    }

    return (
        <>
            <Container className={Styles.notificationMain}>
                <Row>
                    <Col md={4}>
                        <Heading label='Activity' color='secondaryText' variant='heading3' />
                        <Search
                            placeholder='Search Friends!'
                            icon={true}
                            variant='seacrh1'
                            buttonFunc={() => SearchQa()}
                        />
             
                    <ul className={Styles.usermsgbox}>
                        <FriendNotfList userImg={img1} username='Lorry Olgaw' subtext='Check this out! Co' time='11:26 am'

                            action={
                                <p className={Styles.chatcount}>1</p>

                            }
                        />
                        <FriendNotfList userImg={img1} username='Kayleigh Bysouth' time='5 min'
                            action={
                                <FontAwesomeIcon icon={faStar} />


                            }

                        />
                        <FriendNotfList userImg={img1} username='Kayleigh Bysouth' time='6 min' />
                        <FriendNotfList userImg={img1} username='Kayleigh Bysouth' time='8 min' />
                        <FriendNotfList userImg={img1} username='Kayleigh Bysouth' time='2 min' />
                        </ul>
                     
                    </Col>
                    <Col md={8}>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MessageRequest;