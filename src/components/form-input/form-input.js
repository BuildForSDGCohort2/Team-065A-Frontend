import React from 'react'

import './form-input.css'

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return(
    <div className="form-group">
        {
            label ?
            (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>)
            : null
        }
        <input type="email" name="loginemail" onChange={handleChange} {...otherProps} required />
    </div>
   )

 }

export default FormInput