import React, { Fragment,useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import app from './data/base';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import store from './store/index'
import {Provider} from 'react-redux'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import App from './App';
import { CSSTransition,TransitionGroup } from 'react-transition-group'
import {routes} from './route/route'
import ScrollToTop from './component/common/ScrollToTop'
import Signin from './auth/signin';
import Error400 from './pages/errors/error400'
import Error404 from './pages/errors/error404'
import Error500 from './pages/errors/error500'

import Maintenance from './pages/maintenance'

import Login from './pages/authentication/login'
import Register from './pages/authentication/register'
import Forgetpwd from './pages/authentication/forgetpwd'


import Comingsoon from './pages/comingSoon/comingsoon'
import ComingsoonVideo from './pages/comingSoon/comingsoonVideo'
import ComingsoonImg from './pages/comingSoon/comingsoonImg'
import ConfigDB from './data/customizer/config'

const Root = (props) =>  {
          const [anim, setAnim] = useState("");          
          const animation = localStorage.getItem("animation") || ConfigDB.data.router_animation     
          const abortController = new AbortController();
          const [currentUser, setCurrentUser] = useState(false);
          useEffect(() => {
              setAnim(animation)
            const layout = localStorage.getItem('layout_version')
            document.body.classList.add(layout);
            app.auth().onAuthStateChanged(setCurrentUser);
            console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
            console.disableYellowBox = true;    
            return function cleanup() {
              abortController.abort();
          }
            // eslint-disable-next-line
            }, []);
          return(
              <Fragment>
                <Provider store={store}>
                <BrowserRouter basename={`/`}>
                <ScrollToTop />
                  <Switch>
                      <Route path='/login' component={Signin} />
                      <Route  path="/pages/error-400" component={Error400}></Route>
                      <Route  path="/pages/error-404" component={Error404}></Route>
                      <Route  path="/pages/error-500" component={Error500}></Route>

                      <Route  path="/pages/maintenance" component={Maintenance}></Route>

                      <Route  path="/pages/login" component={Login}></Route>
                      <Route  path="/pages/register" component={Register}></Route>
                      <Route  path="/pages/forget-password" component={Forgetpwd}></Route>

                      <Route  path="/pages/comingsoon" component={Comingsoon}></Route>
                      <Route  path="/pages/comingsoon-bg-image" component={ComingsoonImg}></Route>
                      <Route  path="/pages/comingsoon-bg-video" component={ComingsoonVideo}></Route>
                    {currentUser !== null ?
                    <App>
                         

                       <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => {
                            return (<Redirect to={`${process.env.PUBLIC_URL}/dashboard/default`} />)
                        }} />
                      
                      <TransitionGroup>
                       {routes.map(({ path, Component }) => (
                          <Route key={path} exact path={`${process.env.PUBLIC_URL}${path}`}>
                            {({ match }) => (
                                <CSSTransition 
                                  in={match != null}
                                  timeout={500}
                                  classNames={anim} 
                                  unmountOnExit
                                  >
                                  <div><Component/></div>
                                </CSSTransition> 
                            )}
                          </Route>
                        ))}
                        </TransitionGroup>
                    </App>
                    :
                    <Redirect to='/login'/>
                  }
                  </Switch>
                </BrowserRouter>
                </Provider>
            </Fragment>
          )
}
ReactDOM.render(<Root/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
