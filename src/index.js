import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { generateStore } from './Componentes/Redux/store/index'

const Root = () => {

  const store = generateStore()

  return(
    <Provider store={store} >
      <App />
    </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

