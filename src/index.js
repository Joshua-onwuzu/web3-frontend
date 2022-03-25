import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from "react-moralis";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <MoralisProvider appId='QU55iy9Cs8fOMhMWVdjS0Vd2twfbTKmxIwZQ7Mpt' serverUrl='https://pdn9gasjmjup.usemoralis.com:2053/server'>
        <App />
      </MoralisProvider>
    </QueryClientProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
