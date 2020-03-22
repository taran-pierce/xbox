import React from 'react'
import PropTypes from 'prop-types'
import './container.scss'

export default function Container(props) {
  const {children} = props

  return (
    <>
      <div className={`container`}>
        {children}
      </div>
    </>
  )
}

Container.propTypes = {
  children: PropTypes.array.isRequired,
}