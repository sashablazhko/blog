import React from 'react';
import PropTypes from 'prop-types';

const Home = props => <div className="container">{props.children}</div>;

Home.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default Home;
