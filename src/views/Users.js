import React from 'react'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'

import UserAForm from './UserAForm'
import UserBForm from './UserBForm'
import UserCForm from './UserCForm'
import UserDForm from './UserDForm'
function Users() {
    return (
        <Router>
        <div>
            <Link to="/">UserA</Link>
            <Link to="/userb">UserB</Link>
            <Link to="/userc">UserC</Link>
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
