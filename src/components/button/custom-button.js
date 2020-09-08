import React from 'react'
import './custom-button.css'
import Button from 'react-bootstrap/Button';

const CustomButton = ({ children, ...otherProps }) => {
  return(
    <Button className="custom-button" {...otherProps}>
        {children}
    </Button>
   )

 }

export default CustomButton