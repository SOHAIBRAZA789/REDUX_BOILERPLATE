import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import  {Provider}  from 'react-redux';
import history from '../components/history'
import Contact from '../components/Contact';
import Header from '../components/Header';
import Home from '../components/Home';
import NotFoundPage from '../components/NotFoundPage';
import store from '../store';
const AppRouter = () => (
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Header />
                <Switch>
                    <Route path='/' component={Home} exact={true} />
                    <Route path='/contact' component={Contact} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>

        </Router>
     </Provider>
); 


export default AppRouter;