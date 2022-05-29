import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <MoralisProvider appId="2ZaCK6JojbzBsjy8li1rqAj8MrA0f5NekVmaUQ35" serverUrl="https://rarz5sad2w43.usemoralis.com:2053/server">
    <div >
      <App />
    </div>
 
  </MoralisProvider>,
  document.getElementById("root"),
);
