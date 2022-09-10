import React from 'react'
import { Alert } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Message = ({ variant, children }) => {
  return (
        <Alert variant={variant}>
            {children}
        </Alert>
  )
}

Message.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default Message
