import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

import { updateUserAState } from "../actions/actions";
import InputComponent from "../components/InputComponent";
import "../styles/styles.css";

function UserAForm(props) {
  var currentTime = new Date();
  var hr = currentTime.getHours();
  var min = currentTime.getMinutes();
  var sec = currentTime.getSeconds();
  var Time = String(hr)+":"+String(min)+":"+String(sec);

  function diff(start, end) {
    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * (1000 * 60 * 60);
    var minutes = Math.floor(diff / 1000 / 60);
    diff -= minutes * (1000 * 60);
    var seconds = Math.floor(diff / 1000);

    // If using time pickers with 24 hours format, add the below line get exact hours
    if (hours < 0)
       hours = hours + 24;

    return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes + ":"+(seconds<= 9 ? "0" : "") + seconds;
}
  
  const { userBResponses,userCResponses,userDResponses } = props;
  
  const { handleSubmit, register } = useForm();
  
  
  let y =0;
  const onSubmit = (data) => {
    props.updateUserAState(data);
    let difference = diff(Time,data.time);
    document.getElementById("showdiff").innerHTML="Time: Difference = "+difference;
    y = data.y;
    console.log(diff(Time,data.time))
  }
 
  if(userBResponses !== "{}"){
    document.getElementById("differenceB").innerHTML = "Difference with B"+ y-userBResponses.z;
  }
  if(userCResponses !== "{}"){
    document.getElementById("differenceC").innerHTML = "Difference with C"+ y-userCResponses.z;
  }
  if(userDResponses !== "{}"){
    document.getElementById("differenceD").innerHTML = "Difference with D"+ y-userDResponses.z;
  }
  
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
  <span className="specialData" id="showdiff"></span>
  <span className="specialData" id="differenceB"></span>
  <span className="specialData" id="differenceC"></span>
  <span className="specialData" id="differenceD"></span>
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
