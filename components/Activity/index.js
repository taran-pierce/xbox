import React from 'react'
import PropTypes from 'prop-types'

export default function Activity(props) {
  return (
    <>
      <p>Test Activity</p>
    </>
  );
}

Activity.propTypes = {
  data: PropTypes.object.isRequired,
};