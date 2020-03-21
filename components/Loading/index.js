import React from 'react'
import PropTypes from 'prop-types'
import './loading.scss'

export default function Loading(props) {
  const { message } = props

  return (
    <>
      <div className={`loading-container`}>
        {message && (
          <h4>{message}</h4>
        )}
        <div className={`loading-spinner`}>
          <object type={`image/svg+xml`} data={`/img/spinner.svg`}></object>
        </div>
      </div>
    </>
  );
}

Loading.defaultProps = {
  message: null,
};

Loading.propTypes = {
  message: PropTypes.string,
};