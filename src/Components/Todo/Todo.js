import React from 'react'
import { Alert, Button, Col, Row} from 'react-bootstrap';


export default function Todo({ item, onClickChildButton }) {
  return (
    <div className='todo'>
        <Row>
            <Col xs={9} md={10}>
                <Alert key="primary" variant="primary">
                    { item }
                </Alert>
            </Col>
            <Col xs={3} md={2} className='todo-col-button'>
                <Button
                    variant="outline-danger"
                    onClick={ onClickChildButton }>
                    Delete
                </Button>
            </Col>
        </Row>
    </div>
  )
}
