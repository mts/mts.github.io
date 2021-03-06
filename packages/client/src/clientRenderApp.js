import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { withRouter } from 'react-router'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { homePageRoute, aboutPageRoute, blogPageRoute, coursesPageRoute, notFoundPageRoute } from './route'
import { checkAccessibilityIssues } from '../../library/src/client/startup'
import { ErrorBoundary } from './pattern/atom/ErrorBoundary'
import { clientAppStore } from './store/client'

checkAccessibilityIssues(React, ReactDOM, 1000)

export function App() {
  return (
    <ErrorBoundary>
      <Provider store={clientAppStore}>
        <BrowserRouter>
          <Switch>
            <Route exact={homePageRoute.exact} path={homePageRoute.path} component={homePageRoute.clientComponent} />
            <Route exact={aboutPageRoute.exact} path={aboutPageRoute.path} component={aboutPageRoute.clientComponent} />
            <Route exact={blogPageRoute.exact} path={blogPageRoute.path} component={blogPageRoute.clientComponent} />
            <Route exact={coursesPageRoute.exact} path={coursesPageRoute.path} component={coursesPageRoute.clientComponent} />
            <Route component={withRouter(notFoundPageRoute.clientComponent)} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  )
}

ReactDOM.hydrate(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
