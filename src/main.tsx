import './css/style.pcss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from './app/App';
import { composeEnhancers } from './environment';
import { rootReducer } from './infrastructure/redux/reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
   rootReducer,
   {},
   composeEnhancers(applyMiddleware(sagaMiddleware)),
);

// sagaMiddleware.run(sagas);

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>,
   document.getElementById('app-root'),
);
