import React from 'react'
import PropTypes from 'prop-types'
import './form.scss'

export default function Form(props) {
  const {
    handleSubmit,
    id,
    method,
    inputs,
    error,
  } = props

  return (
    <>
      <form id={id} method={method} action={`#`} onSubmit={handleSubmit}>
        {inputs.map( (input, index ) => (
          <label htmlFor={input.label} key={index}>Gamer Tag:
            <input type={input.type} id={input.id} name={input.name} onChange={input.onChange} />
          </label>
        ))}
        <button>Search</button>
      </form>
      {error.error && (
        <>
          <p className={`error-message`}>Sorry there was an issue: {error.message}</p>
          <p className={`error-message`}>Please try again later.</p>
        </>
      )}
    </>
  );
}

Form.defaultProps = {
  method: 'POST',
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  method: PropTypes.string,
  inputs: PropTypes.array.isRequired,
};