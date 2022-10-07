import { Row, Col, Container } from 'react-bootstrap'
import FriendNotfList from '../../../../components/common/FriendNotfList';
import Heading from '../../../../components/common/heading'
import Search from '../../../../components/common/search';
import Styles from './styles.module.scss'
import img1 from '../../../../assets-qa/images/inst1.png'
import img2 from '../../../../assets-qa/images/inst2.png'
import img3 from '../../../../assets-qa/images/inst3.png'
import img4 from '../../../../assets-qa/images/inst4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/fontawesome-free-solid";
import Chatting from '../../../../components/common/Chatting';
import ChatHead from '../../../../components/common/Chatting/ChatHead';



const MessageRequest = () => {
    function SearchQa() {
        console.log('Search');
    }

    return (
        <>
            <Container className={Styles.notificationMain}>
                <Row>
                    <Col md={12}>
                        <Heading label='Activity' color='secondaryText' variant='heading3' />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>

                        <div className={Styles.searchWithIcon}>

                            <div className={Styles.searchMain}>
                                <Search
                                    placeholder='Search Friends!'
                                    icon={true}
                                    variant='seacrh1'
                                    buttonFunc={() => SearchQa()}
                                />
                            </div>

                            <div className={`${Styles.chatstar}  ${Styles.active}`} >
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>


                        <ul className={Styles.usermsgbox}>
                            <FriendNotfList userImg={img1} username='Lorry Olgaw' subtext='Check this out! Co' time='11:26 am'
                                status="online"
                                action={
                                    <p className={Styles.chatcount}>1</p>
                                }
                            />
                            <FriendNotfList userImg={img4} username='Kayleigh Bysouth' subtext='Bro, can you give' time='5 min'
                                action={
                                    <div className={Styles.chatstar} >
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                }
                            />
                            <FriendNotfList userImg={img2} username='Mark Thimyklanj' subtext='Check this out! Co' time='5 min' status='online'
                                action={
                                    <div className={Styles.chatstar} >
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                }
                            />


                            <FriendNotfList userImg={img3} username='Lorry Olgaw' subtext='Check this out! Co' time='5 min' status='online'
                                action={
                                    <div className={`${Styles.chatstar}  ${Styles.active}`} >
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                }
                            />


                            <FriendNotfList userImg={img1} username='Kayleigh Bysouth' subtext='Bro, can you give' time='5 min'
                                action={
                                    <div className={`${Styles.chatstar}  ${Styles.active}`} >
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                }
                            />

                            <FriendNotfList userImg={img1} username='Lorry Olgaw' subtext='Check this out! Co' time='11:26 am'

                                action={
                                    <p className={Styles.chatcount}>1</p>
                                }
                            />
                            <FriendNotfList userImg={img4} username='Kayleigh Bysouth' subtext='Bro, can you give' time='5 min'
                                action={
                                    <div className={`${Styles.chatstar}  ${Styles.active}`} >
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                }
                            />
                            <FriendNotfList userImg={img2} username='Mark Thimyklanj' subtext='Check this out! Co' time='5 min' status='online'
                                action={
                                    <div className={`${Styles.chatstar}  ${Styles.active}`} >
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                }
                            />


                            <FriendNotfList userImg={img3} username='Lorry Olgaw' subtext='Check this out! Co' time='5 min'
                                action={
                                    <div className={`${Styles.chatstar}  ${Styles.active}`} >
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                }
                            />
                            <FriendNotfList userImg={img1} username='Kayleigh Bysouth' subtext='Bro, can you give' time='5 min'
                                action={
                                    <div className={`${Styles.chatstar}  ${Styles.active}`} >
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                }
                            />

                            <FriendNotfList userImg={img1} username='Kayleigh Bysouth' subtext='Bro, can you give' time='5 min'
                                action={
                                    <div className={`${Styles.chatstar}  ${Styles.active}`} >
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                }
                            />
                        </ul>

                    </Col>
                    <Col md={8}>

                        <ChatHead userImg={img1} title="Jagrit Pratap" activeStatus="Active" status='online' />
                        <Chatting date='August 15, 2021' chatImgPerson={img3} Personstatus='online' chatmeassagetext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id minima consectetur, animi ducimus nemo dolore commodi ratione aperiam soluta, distinctio assumenda impedit voluptatum ipsa voluptatibus sint nihil quam at reprehenderit." hours="9h" />
                        <Chatting personType='sender' chatImgPerson={img3} Personstatus='online' chatmeassagetext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id minima consectetur, animi ducimus nemo dolore commodi ratione aperiam soluta, distinctio assumenda impedit voluptatum ipsa voluptatibus sint nihil quam at reprehenderit." hours="9h" />
                        <Chatting chatImgPerson={img3} Personstatus='online' chatmeassagetext="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id minima consectetur, animi ducimus nemo dolore commodi ratione aperiam soluta, distinctio assumenda impedit voluptatum ipsa voluptatibus sint nihil quam at reprehenderit." hours="9h" />



                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MessageRequest;