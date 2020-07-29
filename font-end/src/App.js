
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import './App.css';
import AuthPage from './pages/AuthPage'
import Bookings from './pages/Bookings'
import Events from './pages/Events'
import React, { Component } from 'react';
import MainNav from './Components/MainNav'
import Authcontext from './context/auth-context'
class App extends Component {
  state = {
    token: null,
    userId:null,
  }
  login = (token, userId, tokenExpiration) => {
    this.setState({token:token, userId:userId})
  } ;
  logout = () => {
    this.setState({token:null, userId:null})
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <React.Fragment>
            <Authcontext.Provider value={{ token: this.state.token, userId: this.state.userId, login:this.login, logout:this.logout }}>
            <MainNav/>
            <main>
              <Switch>
                  {!this.state.token && <Redirect from="/" to="/auth" exact />}
                  {this.state.token && <Redirect from="/" to="/events" exact />}
                  
                  {!this.state.token && <Route path="/auth" component={AuthPage} />}
                  {this.state.token && <Redirect from="/auth" to="/events" exact />}

                  {this.state.token && <Route path="/bookings" component={Bookings} />}
                  {!this.state.token && <Redirect from="/bookings" to="/auth" exact />}

                <Route path="/events" component={Events}/>
              </Switch>
            </main>
            </Authcontext.Provider>
          </React.Fragment>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
