import React from 'react'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import UserAForm from './UserAForm'
import UserBForm from './UserBForm'

function Users() {
    return (
        <Router>
        <div>
            <Link to="/">UserA</Link>
            <Link to="/userb">UserB</Link>
        </div>
        <Switch>
            <Route path="/" exact component={UserAForm} />
            <Route path="/userb" component={UserBForm}/>
        </Switch>
        </Router>
    )
}

export default Users
