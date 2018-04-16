import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
	return (
	   <button onClick={props.onClick}{...props}>
		   {props.icon ? props.icon : props.children}
	   </button>
	);
}

Button.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.node
};

export default Button;