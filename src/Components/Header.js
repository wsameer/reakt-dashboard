import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ darkMode }) => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <p class="navbar-brand mb-0" style={{ color: `#fff` }}>
        {`Dark Mode is ${darkMode ? 'ON' : 'OFF'}`}
      </p>
    </nav>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired
};

export default Header;
