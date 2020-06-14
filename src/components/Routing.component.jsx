import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from '../pages/Homepage.page'

const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Homepage} />
            </Switch>
        </Router>
    )
}

export default Routing