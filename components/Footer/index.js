import React from 'react'
import PropTypes from 'prop-types'
import './footer.scss'

export default function Footer(props) {
  const {date} = props

  return (
    <>
      <footer>
        <div className={`footer-row`}>
          <div className={`column`}>
            <h5>Sitemap</h5>
            <ul>
              <li>
                <a href={`/`}>Home</a>
              </li>
              <li>
                <a href={`/other-page`}>Other page</a>
              </li>
            </ul>
          </div>
          <div className={`column`}>
            <h5>Xbox Marketplace</h5>
            <p>Maybe I will display some items from the Xbox Marketplace here.</p>
          </div>
          <div className={`column`}>
            <h5>Other Links</h5>
            <p>Here are some links to other site's that have good information and cool stuff to look through.</p>
            <ul>
              <li>
                <a href={`https://www.xbox.com/en-US/`} target={`_blank`}>Xbox</a>
              </li>
              <li>
                <a href={`https://xboxapi.com/`} target={`_blank`}>Xbox Live API</a>
              </li>
              <li>
                <a href={`https://www.caddolakebayoutours.com/`} target={`_blank`}>Caddo Lake Bayou Tours</a>
              </li>
              <li>
                <a href={`https://xboxapi.com/`} target={`_blank`}>Test</a>
              </li>
              <li>
                <a href={`https://www.xbox.com/en-US/`} target={`_blank`}>Blah</a>
              </li>
              <li>
                <a href={`https://xboxapi.com/`} target={`_blank`}>Example</a>
              </li>
            </ul>
          </div>
        </div>
        <p>&#169; {date} | Taran Pierce </p>
      </footer>
    </>
  )
}

Footer.propTypes = {
  date: PropTypes.number.isRequired,
}