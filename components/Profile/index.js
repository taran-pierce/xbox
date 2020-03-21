import React from 'react'
import PropTypes from 'prop-types'

export default function Profile(props) {
  return (
    <>
      <p>Test Profile</p>
    </>
  );
}

Profile.propTypes = {
  data: PropTypes.object.isRequired,
};