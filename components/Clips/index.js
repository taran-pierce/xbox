import React from 'react'
import PropTypes from 'prop-types'

export default function Clips(props) {
  const {data} = props

  return (
    <>
      <div className={`clip-container`}>
        {data.map((clip) => {
          const {
            titleName,
          } = clip

          return (
            <>
              <h4>{titleName}</h4>
            </>
          )
        })}
      </div>
    </>
  )
}

Clips.propTypes = {
  data: PropTypes.object.isRequired,
}