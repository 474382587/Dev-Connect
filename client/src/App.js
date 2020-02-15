import React, { Fragment, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Alert from './components/layout/Alert';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './store';

import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import './App.css';
if (localStorage.token) {
    setAuthToken(localStorage.token);
}

function App() {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);
    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar />
                    <Route exact path="/" component={Landing}></Route>

                    <section className="container">
                        <Alert></Alert>
                        <Switch>
                            <Route
                                exact
                                path="/register"
                                component={Register}
                            ></Route>
                            <Route
                                exact
                                path="/login"
                                component={Login}
                            ></Route>
                            <PrivateRoute
                                exact
                                component={Dashboard}
                                path="/dashboard"
                            ></PrivateRoute>
                        </Switch>
                    </section>
                </Fragment>
            </Router>
        </Provider>
    );
}

export default App;