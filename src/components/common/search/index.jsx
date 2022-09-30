import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import Styles from './styles.module.scss'

function Search(
    {
        disable = false,
        icon= true,
        variant = 'seacrh1',
        iconColor = 'primary',
        placeholder='Search...',
        ...props
    }
) {
    return (
        <div className={`${Styles.searchMain} ${Styles[variant]}`}>
            {
                icon ?
                <button onClick={props.buttonFunc}> <FontAwesomeIcon icon={faSearch} /> </button> : ''
            }
            <input placeholder={placeholder} type="search" /> 
        </div>
    );
}



Search.propTypes = {
    disable: PropTypes.bool,
    icon: PropTypes.bool,
    variant: PropTypes.string,
    iconColor: PropTypes.string,
    placeholder: PropTypes.string,
    buttonFunc: PropTypes.func,
};

export default Search;