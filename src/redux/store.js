import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducer/combineReducers';

const middleware = [thunk];

const configureStore = () => {
    let store = null;
    if (process.env.NODE_ENV === 'development') {
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        store = createStore(
            combineReducers,
            {},
            composeEnhancers(
                applyMiddleware(...middleware)
            ),
        );
    } else {
        store = compose(applyMiddleware(...middleware))(createStore)(combineReducers);
    }
    return store;
};

export default configureStore();