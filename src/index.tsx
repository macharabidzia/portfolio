import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import './index.css';
import Router from './router';
import i18n from './translation';
import { Provider } from 'react-redux';
import store from './core/store';
// import * as serviceWorker from "./serviceWorker";
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import GlobalFonts from './assets/fonts/fonts';
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <GlobalFonts />
        <Router />
        <Navbar />
      </I18nextProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
