import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Container from '../Container'
import Form from '../Form'
import './siteLayout.scss'

export default function SiteLayout(props) {
  const {formData} = props

  return (
    <>
      <Header title={`Xbox Live API`}>
        {props.user && (
          <Form
            handleSubmit={formData.handleSubmit}
            handleChange={formData.handleChange}
            id={`gamer-tag-form`}
            method={`POST`}
            inputs={formData.inputs}
          />
        )}
      </Header>
      <Container>
        {props.children}
      </Container>
    </>
  )
}