import React from 'react'
import { Alert } from 'react-bootstrap';


export default function Todo(props) {
  return (
    <div className='todo'>
        <Alert key="primary" variant="primary">
            { props.item }
        </Alert>
    </div>
  )
}
