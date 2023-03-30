import React from 'react';
import { Button,Form,InputGroup } from 'react-bootstrap';

const AddComponent = () => {
  return (
    <div className='addComponent'>
        <InputGroup className="mb-3">
                <InputGroup.Text>Enter a New Task Here</InputGroup.Text>
                <Form.Control  size='sm'/>
        </InputGroup>
        <div className='btn'><Button style={{width:"100%"}}>Add Task</Button></div>
    </div>
  )
}

export default AddComponent