import React from 'react';
import Button from '../../../../components/common/button';
import Heading from '../../../../components/common/heading';
import TextFieldQa from '../../../../components/common/textFieldQa';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/fontawesome-free-solid'
import IconButton from '../../../../components/common/iconButton';

import '../index.css'

const BusinessInfo3 = (props) => {

   return (
      <div className='signInpForms'>
         <IconButton icon={ <FontAwesomeIcon icon={faArrowLeft} onClick={props.Prev} /> } />
         <Heading label='Who should we work with to collect the following data elements:' variant='heading1' color='secondaryText' />
         <TextFieldQa label='A. Demographic information for all 200 "in scope" employees (includes role, tenure, start date, age, race/ethnicity, highest education, annual compensation, performance evaluations for prior 3 years, work location):' placeholder='Description Here..' />
         <TextFieldQa label='B. Historical employee engagement results:' placeholder='Description Here..' />
         <TextFieldQa label='C. Org Charts:' placeholder='Description Here..' />
         <TextFieldQa label='D. Employee handbook / HR policies:' placeholder='Description Here..' />
         <TextFieldQa label='E. Turnover data (prior 3 years):' placeholder='Description Here..' />
         <TextFieldQa label='F. Exit interview data (prior 3 years):' placeholder='Description Here..' />
         <div>
            <Button
               variant='filled'
               color='secondary'
               label='Next'
               size='medium'
               onClick={props.Next}
            />
            <Button
               variant='transparent'
               color='gray'
               label='Skip for now'
               size='medium'
            />
         </div>
      </div>
   )
}

export default BusinessInfo3