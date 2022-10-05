import { Row, Col, Container } from "react-bootstrap";
import Styles from "./styles.module.scss";

import inst1Img from "../../../assets-qa/images/inst1.png";
import inst2Img from "../../../assets-qa/images/inst2.png";
import inst3Img from "../../../assets-qa/images/inst3.png";
import inst4Img from "../../../assets-qa/images/inst4.png";
import inst5Img from "../../../assets-qa/images/inst5.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/fontawesome-free-solid";
import Heading from "../../../components/common/heading";
import Group from "../../../components/common/Group";

const AccountSetting = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={9}>
            <Heading
              label="Activity"
              variant="heading3"
              color="secondaryText"
            />
            <Group
              grpImage={inst1Img}
              groupName="Yazdan Khan Commented on your photo."
              time="4 minutes ago"
              redDot={true}
              border="borderBottom"
            />
            <Group
              grpImage={inst2Img}
              groupName="Hammadou Ibrahima Followed You."
              time="2 hours ago"
              border="borderBottom"
              followButton={true}
            />
            <Group
              grpImage={inst3Img}
              groupName="Pratap Vania Like your post 'Need a logo..'"
              time="3 hours ago"
              border="borderBottom"
            />
            <Group
              grpImage={inst4Img}
              groupName="Hammadou Ibrahima Followed You."
              time="3 hours ago"
              border="borderBottom"
              followButton={true}
            />
            <Group
              grpImage={inst1Img}
              groupName="Yazdan Khan Commented on your photo."
              time="4 minutes ago"
              redDot={true}
              border="borderBottom"
            />
            <Group
              grpImage={inst3Img}
              groupName="Billionaire Bouka Like your post 'Need a logo..'"
              time="4 hours ago"
              border="borderBottom"
            />
            <Group
              grpImage={inst2Img}
              groupName="Yazdan Khan Commented on your photo."
              time="12 hours ago"
              redDot={true}
              border="borderBottom"
            />
            <Group
              grpImage={inst5Img}
              groupName="Khurram Tanveer Added a new photo."
              time="1 day ago"
              redDot={true}
              border="borderBottom"
            />
            <Group
              grpImage={inst2Img}
              groupName="Alexander James Code Followed You."
              time="1 day ago"
              border="borderBottom"
              followButton={true}
            />
            <Group
              grpImage={inst3Img}
              groupName="Billionaire Bouka Share your post."
              time="2 days ago"
              border="borderBottom"
              redDot={true}
            />
            <Group
              grpImage={inst1Img}
              groupName="Hammadou Ibrahima Followed You."
              time="5 hours ago"
              border="borderBottom"
              followBackButton={true}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AccountSetting;
