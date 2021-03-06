import React from 'react'
import PropTypes from 'prop-types'

export default function Clips(props) {
  const {data} = props

  return (
    <>
      <div className={`clip-container`}>
        {data.map((clip, index) => (
          <h4 key={index}>{clip.titleName}</h4>
        ))}
      </div>
    </>
  )
}

Clips.propTypes = {
  data: PropTypes.array.isRequired,
}