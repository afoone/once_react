import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ProjectList from '../pages/ProjectList'
import ProjectCreate from '../pages/ProjectCreate'
import ProjectView from '../pages/ProjectView'

const Routes = () => {
    return (
        <Router>
            <div className="ui container">
                <Route exact path="/" component={ProjectList} />
                <Route exact path="/projects" component={ProjectList} />
                <Route path="/projects/new" component={ProjectCreate} />
                <Route path="/projects/:id/view" component={ProjectView} />
            </div>
      </Router>
    )
}

export default Routes
