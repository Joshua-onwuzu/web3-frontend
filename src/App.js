import './App.css';

import WalletComponent from './components/Wallet/WalletComponent';

import {useMoralis} from 'react-moralis';

import ConnectButton from './components/Button/ConnectButton';



function  App () {
  const {authenticate, isAuthenticated} = useMoralis()

  if(isAuthenticated){
    return <WalletComponent />
  }

  return <ConnectButton authenticate={authenticate}/>

}

export default App;
