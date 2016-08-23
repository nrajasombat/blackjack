/**
 * Created by vnguyen on 7/26/16.
 */
//React
import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
//React redux, router
import {Provider} from 'react-redux'
import {Router, Route, useRouterHistory, IndexRedirect} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import createHashHistory from 'history/lib/createHashHistory'
//My Stuff
import Game from '../components/Game';
import store from '../stores/createStore';
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(
    useRouterHistory(createHashHistory)({queryKey: false}),
    store
);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Game}>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("content")
);
