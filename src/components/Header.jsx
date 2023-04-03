import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ darkMode }) => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<p className="navbar-brand mb-0" style={{ color: `#fff` }}>
				{`Dark Mode is ${darkMode ? 'ON' : 'OFF'}`}
			</p>
		</nav>
	);
};

Header.propTypes = {
	darkMode: PropTypes.bool.isRequired
};

export default Header;
