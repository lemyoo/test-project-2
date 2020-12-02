import React from 'react'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import '../styles/styles.css'

import UserAForm from './UserAForm'
import UserBForm from './UserBForm'
import UserCForm from './UserCForm'
import UserDForm from './UserDForm'
function Users() {
    return (
        <Router>
        <div className="link-values">
            <Link to="/" >UserA</Link> &nbsp;&nbsp;
            <Link to="/userb">UserB</Link> &nbsp;&nbsp;
            <Link to="/userc">UserC</Link>&nbsp;&nbsp;
            <Link to="/userd">UserD</Link>
        </div>
        <Switch>
            <Route path="/" exact component={UserAForm}/>
            <Route path="/userb" component={UserBForm}/>
            <Route path="/userc" component={UserCForm}/>
            <Route path="/userd" component={UserDForm}/>
        </Switch>
        </Router>
    )
}

export default Users
