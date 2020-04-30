import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProjectList from '../pages/ProjectList'
import ProjectCreate from '../pages/ProjectCreate'
import ProjectView from '../pages/ProjectView'
import ClientCreate from '../pages/ClientCreate'
import ClientView from '../pages/ClientView'
import ClientList from '../pages/ClientList'
import Navigation from '../components/Navigation'

const Routes = () => {
    return (
        <Router>
            <div className="ui container">
                {/* <Route path="/" component={Navigation}></Route> */}
                <Navigation></Navigation>
                <Route exact path="/" component={ProjectList} />
                <Route exact path="/projects" component={ProjectList} />
                <Route exact path="/projects/new" component={ProjectCreate} />
                <Route exact path="/clients/new" component={ClientCreate} />
                <Route exact path="/clients/:id/edit" component={ClientCreate} />
                <Route exact path="/clients/" component={ClientList} />
                <Route exact path="/clients/:id/view" component={ClientView} />
                <Route exact path="/projects/:id/view" component={ProjectView} />
                <Route exact path="/projects/:id/edit" component={ProjectCreate} />
            </div>
      </Router>
    )
}

export default Routes
