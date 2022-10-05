import React from 'react';
import Button from '../../../../components/common/button';
import Heading from '../../../../components/common/heading';
import TextFieldQa from '../../../../components/common/textFieldQa';
// import '../index.css'

const BusinessInfo1 = (props) => {

   return (
      <div className='signInpForms'>
         <Heading label='Business Information:' variant='heading1' color='secondaryText' />
         <TextFieldQa label='Business Name:' placeholder='Description Here..' />
         <TextFieldQa label='Briefly describe what your business does:' placeholder='Description Here..' />
         <TextFieldQa label='Also known as(if applicable):' placeholder='Description Here..' />
         <TextFieldQa label='What year did your business start operating:' placeholder='Description Here..' />
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

export default BusinessInfo1