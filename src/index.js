import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
                    // createStore 밑줄 = 이걸 권장하지 않음, 근데 동작은 함 ^^
import rootReducer from './modules/Index';
import { Provider } from 'react-redux';
import MyLogger from './middlewares/MyLogger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

// 💚 미들웨어 적용하기, applyMiddleware(미들웨어 이름,...) // DevTools 적용하기
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk, MyLogger)) );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
