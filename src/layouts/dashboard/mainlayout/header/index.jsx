import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/fontawesome-free-solid'
import Styles from './styles.module.scss'

import Heading from '../../common/heading';


function Header() {
    return (
        <div>
            <Heading label='Mentorship' variant='heading4' />
            
        </div>
    );
}



Header.propTypes = {

};

export default Header;
