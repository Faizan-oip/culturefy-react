import { Row, Col, Container } from 'react-bootstrap'

import Styles from './index.module.scss'

import './style.css'
import './responsive.css'
import Button from '../../../components/common/button'


const UserProfile = () => {

    const clickPlay = () => {
        console.log('clicked button');
    }

    return (
        <>
            <Container>
                <Row>
                    <Col sm={10}>

                        <div className={Styles.accountTopPart}>
                            <div className={Styles.coverPhoto}>
                                <img src={require('../../../assets-qa/images/report-2-1.png')} alt="" />
                            </div>
                            <div className={Styles.accountMain}>
                                <div className={Styles.userInfo}>
                                    <div className={Styles.userProfileImg}>
                                        <img src={require('../../../assets-qa/images/admin-img.png')} alt="" className={Styles.imgFullQa} />
                                    </div>
                                    <h3>John Doe</h3>
                                    <h4>Manager</h4>
                                    <a href="#">
                                        <h3>Open to Mentorship</h3>
                                    </a>
                                </div>
                                <div className="profile-info">
                                    <div className={Styles.accountInfoMain}>
                                        <div className={Styles.accountInfo}>
                                            <h4 className={Styles.points}>500+</h4>
                                            <p>Points Balance</p>

                                            <h4 className={Styles.award}>2k+</h4>
                                            <p>Points to Award</p>

                                            <h4 className={Styles.followers}>1k+</h4>
                                            <p>Followers</p>

                                            <h4 className={Styles.following}>40</h4>
                                            <p>Following</p>
                                        </div>
                                    </div>
                                    <div className={Styles.accountInt}>
                                        <div className={Styles.locS}>
                                            <a href="#">
                                                <h6><i className="fas fa-hamburger"></i> FOOD AND BEVERAGE</h6>
                                            </a>
                                            <a href="#">
                                                <h6><i className="fas fa-map-marker-alt"></i> ATALANTA GA</h6>
                                            </a>
                                            <a href="#">
                                                <h6><i className="fas fa-share"></i> SHARE</h6>
                                            </a>
                                        </div>
                                        <div className={Styles.accountBtn}>
                                            {/* <button> <i className="fas fa-pen "></i> Edit Profile</button> */}
                                            {/* <button>More</button> */}
                                            <Button 
                                                label='Edit Profile' 
                                                variant='filled' 
                                                color='primary'
                                                icon='fas fa-pen'
                                                isLoading={false} 
                                                disable={false}
                                                onClick={()=>{clickPlay()}}
                                            />
                                            <Button 
                                                label='More' 
                                                variant='outlined' 
                                                color='transparent'
                                                // icon='fas fa-pen'
                                                isLoading={false} 
                                                disable={false}
                                                onClick={()=>{clickPlay()}}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className={Styles.accountMidPart}>
                            <div className="row">

                                <div className="col-lg-3">

                                    <div className={Styles.recognitionMain}>
                                        <div className={Styles.recognition}>
                                            <h4>Recognition</h4>
                                            <div className={Styles.graphImg}>
                                                <img src={require('../../../assets-qa/images/app-status-graph.png')} alt="" />
                                            </div>
                                        </div>
                                        <div className={Styles.recognitionHistory}>
                                            <h3>Recognition History</h3>

                                            <div className={Styles.recognitionUser}>
                                                <div className={Styles.userMain}>
                                                    <div className={Styles.userInfoRec}>
                                                        <div className={Styles.userimgSm45}>
                                                            <img src={require('../../../assets-qa/images/p-1.png')} alt="" className={Styles.imgFullQa} />
                                                        </div>
                                                        <h4>Nu</h4>
                                                    </div>
                                                    <p>Never</p>
                                                </div>
                                            </div>

                                            <div className={Styles.recognitionUser}>
                                                <div className={Styles.userMain}>
                                                    <div className={Styles.userInfoRec}>
                                                        <div className={Styles.userimgSm45}>
                                                            <img src={require('../../../assets-qa/images/p-2.png')} alt="" className={Styles.imgFullQa} />
                                                        </div>
                                                        <h4>Ayaka</h4>
                                                    </div>
                                                    <p>Never</p>
                                                </div>
                                            </div>

                                            <div className={Styles.recognitionUser}>
                                                <div className={Styles.userMain}>
                                                    <div className={Styles.userInfoRec}>
                                                        <div className={Styles.userimgSm45}>
                                                            <img src={require('../../../assets-qa/images/p-3.png')} alt="" className={Styles.imgFullQa} />
                                                        </div>
                                                        <h4>Ju Anderson</h4>
                                                    </div>
                                                    <p>2 Weeks Ago</p>
                                                </div>
                                            </div>

                                            <div className={Styles.recognitionUser}>
                                                <div className={Styles.userMain}>
                                                    <div className={Styles.userInfoRec}>
                                                        <div className={Styles.userimgSm45}>
                                                            <img src={require('../../../assets-qa/images/p-4.png')} alt="" className={Styles.imgFullQa} />
                                                        </div>
                                                        <h4>Benjamin Smith</h4>
                                                    </div>
                                                    <p>3d ago</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className={Styles.mentor}>
                                        <div className={Styles.mentorship}>
                                            <h3>Mentorship</h3>
                                            <p>I have been in the workforce for over 10 years. Throughout that time, I have
                                                gained a lot of success, but only after about 5 times as many failures. I am
                                                the kind of mentor who is not afraid to tell you when you've failed, but
                                                will inspire you to get back up.</p>
                                        </div>
                                        <div className={Styles.professionalSkills}>
                                            <h3>Professional Skills</h3>
                                            <ul className={Styles.professionalSkillsPoints}>
                                                <li><i className="fa-regular fa-lightbulb"></i> Writing</li>
                                                <li><i className="fa-regular fa-lightbulb"></i> Attention to Detail</li>
                                                <li><i className="fa-regular fa-lightbulb"></i> Strong Vocabulary</li>
                                            </ul>
                                        </div>
                                        <div className={Styles.lifeExperience}>
                                            <h3>Life Experiences</h3>
                                            <ul className={Styles.lifeExperiencePoints}>
                                                <li><i className="fas fa-earth-americas"></i> Overcoming adversity</li>
                                                <li><i className="fas fa-earth-americas"></i> Getting a graduate degree
                                                </li>
                                                <li><i className="fas fa-earth-americas"></i> Being passed on a promotion
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-8">

                                    <div className={Styles.commentBox}>
                                        <div className={Styles.commentInput}>
                                            <input type="text" placeholder="Who Would you like to recognize?" />
                                        </div>
                                        <div className={Styles.commentBoxOptions}>
                                            <div className={Styles.cBOptions}>
                                                <a data-bs-toggle="modal" data-bs-target="#post-modal">
                                                    <h3><i className="fas fa-money-bill"></i> Reward</h3>
                                                </a>
                                                <h3><i className="fas fa-video"></i> Live Video</h3>
                                                <h3><i className="fas fa-image"></i> Photo/Video</h3>
                                                <h3><i className="fas fa-smile"></i> Kudos</h3>
                                                <h3><img src={require('../../../assets-qa/images/Gif.png')} alt="" className={Styles.whiteImgFilter} /> Gif</h3>
                                                <h3><i className="fas fa-calendar-days"></i> Event</h3>
                                            </div>
                                            <div className={Styles.commentBoxBtn}>
                                                {/* <button>post</button> */}
                                                <Button 
                                                    label='Post'
                                                    size='small' 
                                                    variant='filled' 
                                                    color='white'
                                                    isLoading={false} 
                                                    disable={false}
                                                    onClick={()=>{clickPlay()}}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={Styles.postInfoMain}>
                                        <div className={Styles.postPfp}>
                                            <div className={Styles.userimgSm60}>
                                                <img src={require('../../../assets-qa/images/p-3.png')} alt="" className={Styles.imgFullQa} />
                                            </div>
                                            <div className={Styles.postUserName}>
                                                <h3>You</h3>
                                                <p>Just Now</p>
                                            </div>
                                        </div>
                                        <div className={Styles.postMenuButton}>
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </div>
                                    </div>

                                    <div className={Styles.mainPost}>
                                        <div className={Styles.postVideo}>
                                            <img src={require('../../../assets-qa/images/video2.png')} alt="" />
                                        </div>
                                        <div className={Styles.postTitle}>
                                            <h2>Lesson 1</h2>
                                            <h3>Leadership and Organizational Training</h3>
                                        </div>
                                    </div>

                                    <div className={Styles.coursePart}>
                                        <h3>Part 1:Introduction</h3>
                                        <a href="">
                                            <h2>Watch Part 2 <i className="fa-solid fa-arrow-right"></i></h2>
                                        </a>
                                    </div>

                                    <div className={Styles.mainCommentShare}>
                                        <div className={Styles.friendImg}>
                                            <div className={Styles.userimgSm25}>
                                                <img src={require('../../../assets-qa/images/p-2.png')} alt="" className={Styles.imgFullQa} />
                                            </div>
                                            <div className={Styles.userimgSm25}>
                                                <img src={require('../../../assets-qa/images/p-4.png')} alt="" className={Styles.imgFullQa} />
                                            </div>
                                            <div className={Styles.userimgSm25}>
                                                <img src={require('../../../assets-qa/images/p-3.png')} alt="" className={Styles.imgFullQa} />
                                            </div>
                                        </div>
                                        <div className={Styles.commentShare}>
                                            <h3>0 Comments</h3>
                                            <h3>0 Share</h3>
                                        </div>
                                    </div>

                                    <div className={Styles.postLikes}>
                                        <div className={Styles.likesMain}>
                                            <h3><i className="fas fa-money-bill-wave"></i> Like</h3>
                                            <h3><i className="fas fa-comment"></i> Comments</h3>
                                            <h3><i className="fas fa-share"></i> Share</h3>
                                        </div>
                                    </div>

                                    <div className={Styles.userComment}>
                                        <div className={Styles.userimgSm45}>
                                            <img src={require('../../../assets-qa/images/p-3.png')} alt="" className={Styles.imgFullQa} />
                                        </div>
                                        <input type="text" placeholder="Write a comment"></input>
                                        <button><i className="fa-regular fa-paper-plane"></i></button>
                                    </div>

                                    <div className={Styles.postInfoMain}>
                                        <div className={Styles.postPfp}>
                                            <div className={Styles.userimgSm60}>
                                                <img src={require('../../../assets-qa/images/p-3.png')} alt="" className={Styles.imgFullQa} />
                                            </div>
                                            <div className={Styles.postUserName}>
                                                <h3>You</h3>
                                                <p>32 mins ago</p>
                                            </div>
                                        </div>
                                        <div className={Styles.postMenuButton}>
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </div>
                                    </div>


                                    <div className={Styles.userStatus}>
                                        <h3>I would like to <span className={Styles.kudos}>Kudos</span> <span
                                            className={Styles.carla}>@Carla</span>, for the <span
                                                className={Styles.hash}>#courteousness</span> in every appointment, and deadlines
                                            throughout the month of may</h3>
                                    </div>

                                    <div className={Styles.mainCommentShare}>
                                        <div className={Styles.friendImg}>
                                            <div className={Styles.userimgSm25}>
                                                <img src={require('../../../assets-qa/images/p-2.png')} alt="" className={Styles.imgFullQa} />
                                            </div>
                                            <div className={Styles.userimgSm25}>
                                                <img src={require('../../../assets-qa/images/p-4.png')} alt="" className={Styles.imgFullQa} />
                                            </div>
                                            <div className={Styles.userimgSm25}>
                                                <img src={require('../../../assets-qa/images/p-3.png')} alt="" className={Styles.imgFullQa} />
                                            </div>
                                        </div>
                                        <div className={Styles.commentShare}>
                                            <h3>0 Comments</h3>
                                            <h3>0 Share</h3>
                                        </div>
                                    </div>

                                    <div className={Styles.postLikes}>
                                        <div className={Styles.likesMain}>
                                            <h3><i className="fas fa-money-bill-wave"></i> Like</h3>
                                            <h3><i className="fas fa-comment"></i> Comments</h3>
                                            <h3><i className="fas fa-share"></i> Share</h3>
                                        </div>
                                    </div>

                                    <div className={Styles.userComment}>
                                        <div className={Styles.userimgSm45}>
                                            <img src={require('../../../assets-qa/images/p-3.png')} alt="" className={Styles.imgFullQa} />
                                        </div>
                                        <input type="text" placeholder="Write a comment" />
                                        <button><i className="fa-regular fa-paper-plane"></i></button>
                                    </div>


                                </div>

                            </div>
                        </div>

                    </Col>

                    <Col sm={2}>

                        <div className={Styles.resourceGroups}>
                            <h3>Resource Groups</h3>
                            <div className={Styles.resGroups}>
                                <div className={Styles.resGroups1}>
                                    <div className={Styles.userimgSm50}>
                                        <img src={require('../../../assets-qa/images/done.png')} alt="" className={Styles.imgFullQa} />
                                    </div>
                                    <h3>Women's Group</h3>
                                </div>
                                <div className={Styles.resGroups2}>
                                    <div className={Styles.userimgSm50}>
                                        <img src={require('../../../assets-qa/images/done.png')} alt="" className={Styles.imgFullQa} />
                                    </div>
                                    <h3>Disabilities</h3>
                                </div>
                            </div>
                        </div>

                        <div className={Styles.friendsRecommend}>
                            <h3>Friend Recommendations</h3>
                            <div className={Styles.recFriends}>
                                <div className={Styles.userimgSm70}>
                                    <img src={require('../../../assets-qa/images/p-5.png')} alt="" className={Styles.imgFullQa} />
                                </div>
                                <div className={Styles.recFriendsData}>
                                    <h3>Steve Harris</h3>
                                    <p>30 Courses 12 Videos</p>
                                    {/* <button><i className="fas fa-plus"></i> Follow Steve</button> */}
                                    <Button 
                                        label='Follow Steve'
                                        size='small' 
                                        variant='outlined' 
                                        color='primary'
                                        icon='fas fa-plus'
                                        isLoading={false} 
                                        disable={false}
                                        onClick={()=>{clickPlay()}}
                                    />
                                </div>
                            </div>

                            <div className={Styles.recFriends}>
                                <div className={Styles.userimgSm70}>
                                    <img src={require('../../../assets-qa/images/p-4.png')} alt="" className={Styles.imgFullQa} />
                                </div>
                                <div className={Styles.recFriendsData}>
                                    <h3>Mika Davis</h3>
                                    <p>30 Courses 12 Videos</p>
                                    {/* <button><i className="fas fa-plus"></i> Follow Steve</button> */}
                                    <Button 
                                        label='Follow Steve'
                                        size='small' 
                                        variant='outlined' 
                                        color='primary'
                                        icon='fas fa-plus'
                                        isLoading={false} 
                                        disable={false}
                                        onClick={()=>{clickPlay()}}
                                    />
                                </div>
                            </div>

                            <div className={Styles.recFriends}>
                                <div className={Styles.userimgSm70}>
                                    <img src={require('../../../assets-qa/images/p-3.png')} alt="" className={Styles.imgFullQa} />
                                </div>
                                <div className={Styles.recFriendsData}>
                                    <h3>Bilan Jones</h3>
                                    <p>30 Courses 12 Videos</p>
                                    {/* <button><i className="fas fa-plus"></i> Follow Steve</button> */}
                                    <Button 
                                        label='Follow Steve'
                                        size='small' 
                                        variant='outlined' 
                                        color='primary'
                                        icon='fas fa-plus'
                                        isLoading={false} 
                                        disable={false}
                                        onClick={()=>{clickPlay()}}
                                    />
                                </div>
                            </div>

                            <div className={Styles.recFriends}>
                                <div className={Styles.userimgSm70}>
                                    <img src={require('../../../assets-qa/images/p-2.png')} alt="" className={Styles.imgFullQa} />
                                </div>
                                <div className={Styles.recFriendsData}>
                                    <h3>Ju Anderson</h3>
                                    <p>30 Courses 12 Videos</p>
                                    {/* <button><i className="fas fa-plus"></i> Follow Steve</button> */}
                                    <Button 
                                        label='Follow Steve'
                                        size='small' 
                                        variant='outlined' 
                                        color='primary'
                                        icon='fas fa-plus'
                                        isLoading={false} 
                                        disable={false}
                                        onClick={()=>{clickPlay()}}
                                    />
                                </div>
                            </div>

                            <div className={Styles.recFriends}>
                                <div className={Styles.userimgSm70}>
                                    <img src={require('../../../assets-qa/images/p-1.png')} alt="" className={Styles.imgFullQa} />
                                </div>
                                <div className={Styles.recFriendsData}>
                                    <h3>Benjamin Smith</h3>
                                    <p>30 Courses 12 Videos</p>
                                    {/* <button><i className="fas fa-plus"></i> Follow Steve</button> */}
                                    <Button 
                                        label='Follow Steve'
                                        size='small' 
                                        variant='outlined' 
                                        color='primary'
                                        icon='fas fa-plus'
                                        isLoading={false} 
                                        disable={false}
                                        onClick={()=>{clickPlay()}}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={Styles.imageRightAccount}>
                            <img src={require('../../../assets-qa/images/video10.png')} alt="" className={Styles.imgFullQa} />
                        </div>

                        <div className={Styles.recentEvents}>
                            <h3>Recent Events</h3>
                            <div className={Styles.eventOne}>
                                <div className={Styles.userimgSm60}>
                                    <img src={require('../../../assets-qa/images/p-1.png')} alt="" className={Styles.imgFullQa} />
                                </div>
                                <div className={Styles.eventOneContent}>
                                    <h3>Membership and why it...</h3>
                                    <p>Creating a workspace where...</p>
                                </div>
                            </div>
                            <div className={Styles.seenCount}>
                                <h3>8 seen</h3>
                                <div className={Styles.viewerImg}>
                                    <div className={Styles.userimgSm25}>
                                        <img src={require('../../../assets-qa/images/p-1.png')} alt="" className={Styles.imgFullQa} />
                                    </div>
                                    <div className={Styles.userimgSm25}>
                                        <img src={require('../../../assets-qa/images/p-2.png')} alt="" className={Styles.imgFullQa} />
                                    </div>
                                    <div className={Styles.userimgSm25}>
                                        <img src={require('../../../assets-qa/images/p-3.png')} alt="" className={Styles.imgFullQa} />
                                    </div>
                                    <div className={Styles.userimgSm25}>
                                        <img src={require('../../../assets-qa/images/p-4.png')} alt="" className={Styles.imgFullQa} />
                                    </div>
                                </div>
                            </div>
                            <div className="event-two">
                                <div className={Styles.userimgSm60}>
                                    <img src={require('../../../assets-qa/images/p-1.png')} alt="" className={Styles.imgFullQa} />
                                </div>
                                <div className={Styles.eventOneContent}>
                                    <h3>Membership and why it...</h3>
                                    <p>Creating a workspace where...</p>
                                </div>
                            </div>
                            <div className={Styles.seenCount}>
                                <h3>11 seen</h3>
                                <div className={Styles.viewerImg}>
                                    <div className={Styles.userimgSm25}>
                                        <img src={require('../../../assets-qa/images/p-1.png')} alt="" className={Styles.imgFullQa} />
                                    </div>
                                    <div className={Styles.userimgSm25}>
                                        <img src={require('../../../assets-qa/images/p-2.png')} alt="" className={Styles.imgFullQa} />
                                    </div>
                                    <div className={Styles.userimgSm25}>
                                        <img src={require('../../../assets-qa/images/p-3.png')} alt="" className={Styles.imgFullQa} />
                                    </div>
                                    <div className={Styles.userimgSm25}>
                                        <img src={require('../../../assets-qa/images/p-4.png')} alt="" className={Styles.imgFullQa} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Col>

                </Row>
            </Container>
        </>
    )

}

export default UserProfile;