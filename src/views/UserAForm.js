import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

import { updateUserAState } from "../actions/actions";

function UserAForm(props) {
  const validator = () => {
    document.getElementById("validate").innerHTML =
      "Please fill out the space above";
    document.getElementById("validate").style = "color:#ff0000";
  };
  const { handleSubmit,register } = useForm();
  const onSubmit = (data) => {
    props.updateUserAState(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="x">Enter a number(X)</label>
          <input
            onBlur={validator}
            type="number"
            className="form-control"
            id="x"
            name="x"
            ref={register}
          />
          <span id="validate"></span>
        </div>

        <div className="form-group">
          <label htmlFor="fruits">Select Fruit</label>
          <select className="form-control" id="fruits" name="fruits" ref={register}>
            <option>Select an option</option>
            <option>Apple</option>
            <option>Mango</option>
            <option>Orange</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Select date</label>
          <input
            onBlur={validator}
            type="date"
            className="form-control"
            id="date"
            name="date"
            ref={register}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Select date</label>
          <input
            onBlur={validator}
            type="time"
            className="form-control"
            id="time"
            name="time"
            ref={register}
          />
        </div>
        <div className="form-group">
          <label htmlFor="y">Enter Number(Y)</label>
          <input type="number" className="form-control" name="y" id="y" ref={register}/>
          <span id="validate"></span>
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = {updateUserAState};

export default connect(null, mapDispatchToProps)(UserAForm);
