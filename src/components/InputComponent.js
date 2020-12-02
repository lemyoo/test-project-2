import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function InputComponent(props) {
    return (
        <div className="form-group">
            <div className={props.class}>
            <label htmlFor={props.name}>{props.label}</label>
          <input type={props.type} className="form-control" name={props.name} id={props.id} ref={props.reff}/>
        </div>
        </div>
    )
}

export default InputComponent
