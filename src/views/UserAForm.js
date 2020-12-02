import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

import { updateUserAState } from "../actions/actions";
import InputComponent from "../components/InputComponent";
import "../styles/styles.css";

function UserAForm(props) {
  const { userBResponses } = props;
  
  const {userCResponses} = props;

  const {userDResponses} = props;

  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    props.updateUserAState(data);
  };

  const userBListDetails = Object.keys(userBResponses).map((key) => {
    return (
      <div className="items-body-content">
        <span>
          {" "}
          {key.toUpperCase()} :{userBResponses[key]}
        </span>
      </div>
    );
  });

  const userCListDetails = Object.keys(userCResponses).map((key) => {
    return (
      <div className="items-body-content">
        <span>
          {" "}
          {key.toUpperCase()} :{userCResponses[key]}
        </span>
      </div>
    );
  });

  const userDListDetails = Object.keys(userDResponses).map((key) => {
    return (
      <div className="items-body-content">
        <span>
          {" "}
          {key.toUpperCase()} :{userDResponses[key]}
        </span>
      </div>
    );
  });

  return (
    <div className="wrapper">
      <div className="inner">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>User A</h3>
          <InputComponent
            class="form-wrapper"
            type="number"
            name="x"
            id="x"
            reff={register}
            label="Enter a number(X)"
          />
          <div className="form-group">
            <label htmlFor="fruits">Select Fruit</label>
            <select
              className="form-control"
              id="fruits"
              name="fruits"
              ref={register}
            >
              <option>Select an option</option>
              <option>Apple</option>
              <option>Mango</option>
              <option>Orange</option>
            </select>
          </div>
          <InputComponent
            class="form-wrapper"
            type="date"
            name="date"
            id="date"
            reff={register}
            label="Select date"
          />
          <InputComponent
            class="form-wrapper"
            type="time"
            name="time"
            id="time"
            reff={register}
            label="Select time"
          />
          <InputComponent
            class="form-wrapper"
            type="number"
            name="y"
            id="y"
            reff={register}
            label="Enter a number(Y)"
          />
          <div className="form-group">
            <input className="button" type="submit" value="Submit" />
          </div>
        </form>
        <div className="items">
          <div className="items-head">
            <p>User B response</p>
            <hr />
          </div>
          <div className="items-body">
            <div>{userBListDetails}</div>
          </div>
        </div>

        <div className="items">
          <div className="items-head">
            <p>User C response</p>
            <hr />
          </div>
          <div className="items-body">
            <div>{userCListDetails}</div>
          </div>
        </div>

        <div className="items">
          <div className="items-head">
            <p>User D response</p>
            <hr />
          </div>
          <div className="items-body">
            <div>{userDListDetails}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { userBResponses: state.reducers.userBResponses,
  userCResponses: state.reducers.userCResponses,
userDResponses: state.reducers.userCResponses };
  
};
const mapDispatchToProps = { updateUserAState };

export default connect(mapStateToProps, mapDispatchToProps)(UserAForm);
