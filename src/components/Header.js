import React from 'react';
import PropTypes from 'prop-types';
import Statistic from './Statistic';

function Header(props) {
	return (
	   <header>
	      <Statistic users={props.users} />
	      <h2>{props.title}</h2>
	   </header>
	)
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
	users: PropTypes.array.isRequired
};

export default Header;