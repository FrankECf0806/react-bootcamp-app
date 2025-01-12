import React from 'react'
import './Home.css'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate()
    return (
        <div className='home'>
            <h1> Welcome to the TODO list App</h1>
            <Button 
                variant="outline-primary"
                onClick={ () => navigate('/main') }
                >
                Get Started
            </Button>
        </div>
    )
}
