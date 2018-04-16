import React from 'react';
import PropTypes from 'prop-types';

function Checkbox(props) {
	
	   return (
	   <input type="checkbox" onChange={props.onChange} checked={props.checked ? true : false} />
	   
	   );	
	
}

Checkbox.propTypes = {
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
	
};

export default Checkbox;