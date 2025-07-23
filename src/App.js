import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'

const ProtectedRoute = ({component: Component, ...rest}) => {
  const jwtToken = Cookies.get('jwt_token')
  return (
    <Route
      {...rest}
      render={props =>
        jwtToken !== undefined ? (
          <Component {...props} />
        ) : (
          <Redirect to="/ebank/login" />
        )
      }
    />
  )
}

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/ebank/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
