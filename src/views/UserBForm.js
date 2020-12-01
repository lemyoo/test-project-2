import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { connect } from "react-redux";

function UserBForm(props) {
  const { userADetails } = props;
 console.log(userADetails);
  const listDetails = Object.keys(userADetails).map((key) => {
    return (
      <div>
        <li> {key.toUpperCase()} :{userADetails[key]}</li>
      </div>
    );
  });
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="z">Enter Number(Z)</label>
          <br />
          <input type="number" className="form-control" name="z" id="z" />
        </div>
        <div className="form-group">
          <label htmlFor="date">Enter Date</label>
          <input type="date" className="form-control" name="date" id="date" />
        </div>

        <div className="form-group">
          <label htmlFor="time">Enter Time</label>
          <input className="form-control" type="time" name="time" id="time" />
        </div>
        <input type="submit" value="Submit" />
      </form>
      <div>
        <ul>{listDetails}</ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { userADetails: state.reducers.userADetails };
};

export default connect(mapStateToProps)(UserBForm);
