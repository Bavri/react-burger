import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './services/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// const montPortal = () =>{
//    const mountNode=document.body;
//    const portalContainer = document.createElement('div');
//    portalContainer.setAttribute('id', 'modal-portal');
//    portalContainer.classList.add('portal');
//    mountNode.appendChild(portalContainer);
// };

root.render(
   <React.StrictMode>
      <Provider store={store}>
         <App/>
      </Provider>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
