import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router';
import { rootReducer } from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';

// Create an object for the default data
const defaultState = {
  posts,
  comments
}

// Hot-reload reducers because it's not 2016 anymore
if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').rootReducer;
    store.replaceReducer(nextRootReducer)
  })
}

export const store = createStore(rootReducer, defaultState, compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

export const history = syncHistoryWithStore(browserHistory, store);
