import React from 'react'

import './form-input.css'

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return(
    <div className="group">
        <label for="loginemail">{label}</label>
        <input type="email" name="loginemail" id="loginemail" onChange={handleChange} {...otherProps} required />
    </div>
   )

 }

export default FormInput