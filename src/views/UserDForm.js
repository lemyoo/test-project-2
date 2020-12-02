import React from 'react'
import {useForm} from 'react-hook-form'
import {connect} from 'react-redux'

import InputComponent from '../components/InputComponent'
import "../styles/styles.css";
import "../styles/list.css";
import {updateUserDState} from '../actions/actions'

function UserDForm(props) {
    const {userAResponses} = props;
    const listDetails = Object.keys(userAResponses).map((key) => {
        return (
          
          <div className="items-body-content">
            <span> {key.toUpperCase()} :{userAResponses[key]}</span>
          </div>
        );
    });
    const {handleSubmit, register} = useForm();
    const onSubmit=(data)=>{
        props.updateUserDState(data);
    }
    return (
        <div className="wrapper">
            <div className="inner">
                <h3>User D</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <InputComponent class="form-wrapper" type="number" name="z" id="z" label="Input value(Z)" reff={register}/>
            <InputComponent class="form-wrapper" type="date" name="date" id="date" label="Entert date" reff={register}/>
            <InputComponent class="form-wrapper" type="time" name="time" id="time" label="Enter time" reff={register}/>
            <div className="form-group">
            <input className="button" type="submit" value="Submit"/>
            </div>
            </form>
            <div className="items">
          <div className="items-head">
            <p>User A response</p>
            <hr />
          </div>
          <div className="items-body">
            <div>{listDetails}</div>
          </div>
        </div>
        </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {userAResponses: state.reducers.userAResponses}
}

const mapDispatchToProps = {updateUserDState};
export default connect(mapStateToProps,mapDispatchToProps)(UserDForm)
