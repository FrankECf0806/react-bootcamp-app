import React, { useState } from 'react'
import './Main.css'
import { Box, TextField } from '@mui/material'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Todo from '../Todo/Todo'

export default function Main() {
    const [items, setItems] = useState([
        'Walk the dog',
        'Pick up Joe',
        'Go to the supermarket'
    ])
    const [item, setItem] = useState('')

    function handleOnChangeTextField({ target }){
        const { value } = target
        setItem(value)
    }

	function handleOnClickButton(){
        if(item.trim() === '') return
		setItems([ ...items, item])        
        setItem('')
	}

    function deleteChildItem(index){
        setItems(items.filter((item, i)=> i !== index))
    }

    function deleteAllItems(){
        setItems([])
    }

    function renderDeleteAllButton(){

        if(items.length <= 1) return
        return (
            <Button 
                variant="outline-danger"
                onClick={ deleteAllItems }>
                    Delete All Items
            </Button>
        )
    }

    return (
        <div className='main'>
            <Container>
                {/* Title */}
                <Row>
                    <Col>
                        <h1> What is in the calendar today? </h1>
                    </Col>
                </Row>
                {/* Text Input & Add Button */}
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
                                id="fullWidth"
                                value={ item}
                                onChange={ handleOnChangeTextField }/>
                        </Box>
                    </Col>
                    <Col xs={3} md={2} className='main-col-button'>
                        <Button
                            className='main-button'
                            variant="outline-primary"
							onClick={ handleOnClickButton }>
                            Add
                        </Button>
                    </Col>
                </Row>
            </Container>
            {/* TODO list */}
            <Container className='main-todo-container'>
                <Row className='main-todo-row'>
                    <Col>
                        { renderDeleteAllButton() }
                    </Col>
                </Row>
                {
                    items.map((item, index) => {
                        return (
                            <Todo
                                key={ index }
                                item={ item }
                                onClickChildButton={()=> deleteChildItem(index) } />
                        )
                    })
                }
            </Container>
        </div>
    )
}
