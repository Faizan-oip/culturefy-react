import { Row, Col, Container } from 'react-bootstrap'

import globalStyles from '../../../../globalStyles.module.scss'
import Styles from './styles.module.scss'

import inst1Img from '../../../../assets-qa/images/inst1.png'
import inst2Img from '../../../../assets-qa/images/inst2.png'
import inst3Img from '../../../../assets-qa/images/inst3.png'
import inst4Img from '../../../../assets-qa/images/inst4.png'
import inst5Img from '../../../../assets-qa/images/inst5.png'

import Heading from '../../../../components/common/heading'
import Group from '../../../../components/common/Group'
import Button from '../../../../components/common/button'

const Notification = () => {
    return (
        <>
            <Container className={Styles.notificationMain}>
                <Row>
                    <Col sm={10}>
                        <div className={globalStyles.pBt20}>
                            <Heading label='Activity' color='secondaryText' variant='heading3' />
                        </div>
                        <Group
                            image={inst1Img}
                            heading='Yazdan Khan Commented on your photo.'
                            subHeading='4 minutes ago'
                            action={<span className={`${globalStyles.redDot}`}></span>}
                        />
                        <Group
                            image={inst2Img}
                            heading='Hammadou Ibrahima Followed You.'
                            subHeading='2 hours ago'
                            action={
                                <div className={`${globalStyles.followBtnSq} ${globalStyles.bGray}`}>
                                    <Button
                                        label='Followed'
                                        variant='outlined'
                                        color='black'
                                    />
                                </div>
                            }
                        />
                        <Group
                            image={inst3Img}
                            heading={`Pratap Vania Like your post "Need a logo"`}
                            subHeading='4 minutes ago'
                        />
                        <Group
                            image={inst4Img}
                            heading={`Hammadou Ibrahima Followed You.`}
                            subHeading='4 minutes ago'
                        />
                        <Group
                            image={inst5Img}
                            heading={`Yazdan Khan Commented on your photo`}
                            subHeading='2 hours ago'
                            action={
                                <div className={`${globalStyles.followBtnSq} ${globalStyles.bGray}`}>
                                    <Button
                                        label='Followed'
                                        variant='outlined'
                                        color='black'
                                    />
                                </div>
                            }
                        />
                        <Group
                            image={inst1Img}
                            heading='Yazdan Khan Commented on your photo.'
                            subHeading='4 minutes ago'
                            action={<span className={`${globalStyles.redDot}`}></span>}
                        />
                        <Group
                            image={inst2Img}
                            heading='Hammadou Ibrahima Followed You.'
                            subHeading='2 hours ago'
                            action={
                                <div className={`${globalStyles.followBtnSq} ${globalStyles.bGray}`}>
                                    <Button
                                        label='Followed'
                                        variant='outlined'
                                        color='black'
                                    />
                                </div>
                            }
                        />
                        <Group
                            image={inst3Img}
                            heading={`Pratap Vania Like your post "Need a logo"`}
                            subHeading='4 minutes ago'
                        />
                        <Group
                            image={inst4Img}
                            heading={`Hammadou Ibrahima Followed You.`}
                            subHeading='4 minutes ago'
                        />
                        <Group
                            image={inst5Img}
                            heading={`Yazdan Khan Commented on your photo`}
                            subHeading='2 hours ago'
                            action={
                                <div className={globalStyles.followBtnSq}>
                                    <Button
                                        label='Follow Back'
                                        variant='filled'
                                        color='secondary'
                                    />
                                </div>
                            }
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Notification;