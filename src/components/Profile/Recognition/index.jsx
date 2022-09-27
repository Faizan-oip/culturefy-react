import React from 'react'
import Styles from './styles.module.scss'
// import PropTypes from 'prop-types';
import Heading from '../../common/heading';
import demoGraph from '../../../assets-qa/images/app-status-graph.png'
import RecognitionUser from './RecognitionUser';
import adminImg from '../../../assets-qa/images/admin-img.png'
function Recognition() {
  return (
    <div className={Styles.recognitionMain}>
      <Heading label='Recognition' />
      <div className={Styles.recogImg}>
        <img src={demoGraph} alt='graph' className={Styles.imgFull} />
      </div>
      <Heading label='Recognition History' />
      <div>
        <RecognitionUser userImg={adminImg} username='Nu' time='Never' />
        <RecognitionUser userImg={adminImg} username='Nu' time='Never' />
        <RecognitionUser userImg={adminImg} username='Nu' time='Never' />
        <RecognitionUser userImg={adminImg} username='Nu' time='Never' />
        <RecognitionUser userImg={adminImg} username='Nu' time='Never' />
      </div>
    </div>
  )
}
// Recognition.propTypes = {
//   userCoverImg: PropTypes.any,
// };
export default Recognition