import './App.css';
import LoginIn from './components/LoginInComponent';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import {useMoralis} from 'react-moralis';

import ConnectButton from './components/ConnectButton';



function  App () {
  const {authenticate, isAuthenticated} = useMoralis()
  if(isAuthenticated){
    return <LoginIn />
  }
  return <ConnectButton authenticate={authenticate}/>

}

export default App;
