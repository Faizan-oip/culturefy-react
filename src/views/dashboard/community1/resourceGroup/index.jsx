import { Row, Col, Container } from 'react-bootstrap'
import Group from '../../../../components/common/Group';
import Heading from '../../../../components/common/heading';
import Search from '../../../../components/common/search';
import Styles from './index.module.scss'

import inst3Img from '../../../../assets-qa/images/inst3.png'
import ChatSuggestion from './chatSuggestion';




const ResourceGroup = () => {

    function SearchQa() {
        console.log('Search');
    }

    return (
        <>
            <Container className={Styles.containerMain}>
                <Row className={`${Styles.alighnBaseLine} ${Styles.spaceBetween}`}>
                    <Col sm={9}>
                        <Heading
                            label='My Resource Groups'
                            variant='heading1'
                            color='secondaryText'
                        />
                        <div className={Styles.resourceGroupList}>
                            <Group
                                grpImage={inst3Img}
                                groupName={`Women's Group`}
                                groupMembers='100+'
                                fontVariant='large'
                                redDot={true}
                                border='borderBottom'
                            />
                            <Group
                                grpImage={inst3Img}
                                groupName={`Disabilities`}
                                groupMembers='100+'
                                fontVariant='large'
                                redDot={true}
                                border='borderBottom'
                            />
                        </div>
                        <Row className={Styles.spaceBetween}>
                            <Col sm={6}>
                                <Heading
                                    label='Find More Groups'
                                    variant='heading2'
                                    color='secondaryText'
                                />
                            </Col>
                            <Col sm={6}>
                                <Search
                                    placeholder='Serach  resource groups'
                                    icon={true}
                                    variant='seacrh2'
                                    buttonFunc={() => SearchQa()}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>

                                <Group
                                    grpImage={inst3Img}
                                    groupName={`African Heritage`}
                                    groupMembers='100+'
                                    fontVariant='small'
                                    groupButtons={true}
                                    border='borderBottom'
                                />

                                <Group
                                    grpImage={inst3Img}
                                    groupName={`Asian Pacific`}
                                    groupMembers='100+'
                                    fontVariant='small'
                                    groupButtons={true}
                                    border='borderBottom'
                                />

                                <Group
                                    grpImage={inst3Img}
                                    groupName={`Hispanic + Latino`}
                                    groupMembers='100+'
                                    fontVariant='small'
                                    groupButtons={true}
                                    border='borderBottom'
                                />

                                <Group
                                    grpImage={inst3Img}
                                    groupName={`Veterans`}
                                    groupMembers='100+'
                                    fontVariant='small'
                                    groupButtons={true}
                                    border='borderBottom'
                                />

                            </Col>
                        </Row>
                    </Col>
                    <Col sm={3}>
                        <Search
                            placeholder='Search Friends!'
                            icon={true}
                            variant='seacrh1'
                            buttonFunc={() => SearchQa()}
                        />
                        <ChatSuggestion />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ResourceGroup;