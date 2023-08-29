import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'
import { store, persistor } from "./store"
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import App from './App.tsx'
import React from 'react'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <ToastContainer />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
