import { Row, Col, Container } from 'react-bootstrap'
import Group from '../../../../components/common/Group';
import Heading from '../../../../components/common/heading';
import Search from '../../../../components/common/search';
import Styles from './index.module.scss'

import inst3Img from '../../../../assets-qa/images/inst3.png'




const ResourceGroup = () => {
    
    function SearchQa() {
        console.log('Search');
    }

    return (
        <>
            <Container className={Styles.containerMain}>
                <Row className={Styles.alignCenter}>
                    <Col sm={6}>
                        <Heading label='My Resource Groups' variant='heading1' color='secondaryText' />
                    </Col>
                    <Col sm={6}>
                        <Search placeholder='Search Friends!' icon={true} variant='seacrh1' buttonFunc={()=> SearchQa()} />
                    </Col>
                </Row>
                <Row>
                    <Col sm={10}>
                        <Group grpImage={inst3Img} groupName={`Women's Group`} groupMembers='100+' fontVariant='large' />
                    </Col>
                    <Col sm={2}>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ResourceGroup;