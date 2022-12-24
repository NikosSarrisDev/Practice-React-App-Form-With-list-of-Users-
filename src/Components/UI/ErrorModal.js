import React from 'react'
import { Button } from './Button'
import { Card } from './Card'

export const ErrorModal = (props) => {
  return (
    <>
    
    <div className='backdrop' onClick={props.onConfirmed}></div>
    <Card className="modal">
        <header>
            <h2 className='header'>
                {props.title}
            </h2>
        </header>
        <div className='content'>
            <p>
                {props.message}
            </p>
        </div>
        <footer className='actions'>
            <Button onClick = {props.onConfirmed}>Okay</Button>
        </footer>
    </Card>
    </>
  )
}
