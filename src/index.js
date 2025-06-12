import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store/store';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container); // Create a root.
root.render( // Render the app to the root.
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);