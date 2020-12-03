import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import InputComponent from "../components/InputComponent";
import "../styles/styles.css";
import "../styles/list.css";
import {updateUserBState,zValueOfB} from "../actions/actions"

function UserBForm(props) {
  const { userAResponses } = props;
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {

    props.updateUserBState(data);
    props.zValueOfB(data);
  };
  const userAlistDetails = Object.keys(userAResponses).map((key) => {
    return (
      <div className="items-body-content">
        <span>
          {" "}
          {key.toUpperCase()} :{userAResponses[key]}
        </span>
      </div>
    );
  });

  return (
    <div className="wrapper">
      <div className="inner">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>User B</h3>
          <InputComponent
            class="form-wrapper"
            label="Enter Number(Z)"
            type="number"
            name="z"
            id="z"
            reff={register}
          />
          <InputComponent
            class="form-wrapper"
            label="Enter Date"
            type="date"
            name="date"
            id="name"
            reff={register}
          />
          <InputComponent
            class="form-wrapper"
            label="Enter time"
            type="time"
            name="time"
            id="time"
            reff={register}
          />
          <div className="form-group">
            <input className="button" type="submit" value="Submit" />
          </div>
        </form>

        <div className="items">
          <div className="items-head">
            <p>User A response</p>
            <hr />
          </div>
          <div className="items-body">
            <div>{userAlistDetails}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { userAResponses: state.reducers.userAResponses };
};

const mapDispatchToProps = {updateUserBState,zValueOfB};
export default connect(mapStateToProps,mapDispatchToProps)(UserBForm);
