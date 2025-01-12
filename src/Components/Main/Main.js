import React from 'react'
import './Main.css'
import { Box, TextField } from '@mui/material'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Main() {
  return (
    <div className='main'>
        <Container>
            <Row>
                <Col>
                    <h1> What is in the calendar today? </h1>
                </Col>
            </Row>
            <Row>
                <Col xs={9} md={10}>
                    <Box
                        className="main-input"
                        sx={{
                                maxWidth: '100%'
                            }}>
                        <TextField
                            fullWidth
                            label="Add your items"
                            id="fullWidth" />
                    </Box>
                </Col>
                <Col xs={3} md={2} className='main-col-button'>
                    <Button
                        className='main-button'
                        variant="outline-primary">
                        Add
                    </Button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
