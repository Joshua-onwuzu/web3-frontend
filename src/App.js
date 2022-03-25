import WalletComponent from './components/Wallet/WalletComponent';

import {useMoralis} from 'react-moralis';

import ConnectButton from './components/Button/ConnectButton';



function  App () {
  const {authenticate, isAuthenticated, hasAuthError} = useMoralis()

  if(isAuthenticated){
    return <WalletComponent />
  }

  return <ConnectButton authenticate={authenticate} error ={hasAuthError}/>

}

export default App;
