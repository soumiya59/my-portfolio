import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
)
