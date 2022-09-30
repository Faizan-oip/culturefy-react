import { Row, Col, Container } from 'react-bootstrap'
import Styles from './styles.module.scss'

import inst1Img from '../../../../../assets-qa/images/inst1.png'
import inst2Img from '../../../../../assets-qa/images/inst2.png'
import inst3Img from '../../../../../assets-qa/images/inst3.png'

import RecentFriend from '../../../../../components/common/FriendRecent';
import Heading from '../../../../../components/common/heading'
import IconButton from '../../../../../components/common/iconButton'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/fontawesome-free-solid'
import RecognitionUser from '../../../../../components/Profile/Recognition/RecognitionUser'


const ChatSuggestion = () => {



    return (
        <div>
            <div className={Styles.recentFriendsMain}>
                <RecentFriend userImg={inst1Img} userName='John' />
                <RecentFriend userImg={inst2Img} userName='Edilson' />
                <RecentFriend userImg={inst3Img} userName='Afrim' />
            </div>

            <div className={Styles.friendListMain}>
                <div className={Styles.friendListHead}>
                    <Heading variant='heading5' label='Friends' color='secondaryText' />
                    <IconButton icon={<FontAwesomeIcon icon={faEllipsisH} />} />
                </div>
                <div className={Styles.friendList}>
                    <RecognitionUser userImg={inst1Img} username='Kayleigh Bysouth' time='2 min' />
                    <RecognitionUser userImg={inst3Img} username='Jes Phillips MP' time='online' />
                    <RecognitionUser userImg={inst2Img} username='MP Eslam Hisham' time='2 min' />
                    <RecognitionUser userImg={inst1Img} username='Kayleigh Bysouth' time='2 min' />
                    <RecognitionUser userImg={inst3Img} username='Jes Phillips MP' time='online' />
                    <RecognitionUser userImg={inst2Img} username='MP Eslam Hisham' time='2 min' />
                    <RecognitionUser userImg={inst1Img} username='Kayleigh Bysouth' time='2 min' />
                    <RecognitionUser userImg={inst3Img} username='Jes Phillips MP' time='online' />
                    <RecognitionUser userImg={inst2Img} username='MP Eslam Hisham' time='2 min' />
                    <RecognitionUser userImg={inst1Img} username='Kayleigh Bysouth' time='2 min' />
                    <RecognitionUser userImg={inst3Img} username='Jes Phillips MP' time='online' />
                    <RecognitionUser userImg={inst2Img} username='MP Eslam Hisham' time='2 min' />
                </div>
            </div>

        </div>
    )
}

export default ChatSuggestion;