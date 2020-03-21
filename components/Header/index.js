import React from 'react'
import PropTypes from 'prop-types'
import './header.scss'

export default function Header(props) {
  const {
    title,
    children,
  } = props

  return (
    <>
      <header>
        <div className={`header-container`}>
          <div className={`column`}>
            <h1>{title}</h1>
          </div>
          <div className={`column`}>
            {children}
          </div>
        </div>
      </header>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}