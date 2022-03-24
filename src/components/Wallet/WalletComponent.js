
import {useMoralis} from 'react-moralis';

import NFTsContainer from "../NFTs/NFTsContainer";

import  {useQuery} from 'react-query'

import {getNFTs, getBalance} from '../FetchAPIs/fetch'

import Button from '../Button/Button';


const LoginIn = ()=>{

    // {"chain":"eth","address":"0x13d0ef4ccfcea902e6b73eb867f76e50c1dedd94" }

    const {user, logout, Moralis, } = useMoralis()

    const {data:balance,error:balanceError} = useQuery("getUserBalance",() => getBalance(Moralis))
    
    const {data:nfts, error:nftError} = useQuery("getUserNFTs", () => getNFTs(Moralis))


    return (
        <div>
            {balance &&  nfts &&
                        <div className="login-wrapper">
                        <div className="head_section">
                            <h1 className = "wallet">Wallet</h1>
                            <Button value ="DISCONNECT" logout={logout}/>
                        </div>
                        
                        <div className="account_section">
                            <div>
                            <h3 >{`Account : ${user.attributes.accounts[0]}`}</h3>
                            <br/>
                            <h3>{`Balance : ${balance}`}</h3>
                            </div>
                        </div>
                        
                        <NFTsContainer nfts= {nfts}/>
                    </div> 
            }
        </div>
    )

}

export default LoginIn