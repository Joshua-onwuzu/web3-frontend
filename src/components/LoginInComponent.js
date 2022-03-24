import { useEffect, useState } from "react";
import {useMoralisQuery, useMoralis} from 'react-moralis';
import NFTsContainer from "./NFTsContainer";
import  {useQuery} from 'react-query'


const LoginIn = ()=>{
    const {user, logout, Moralis, } = useMoralis()

    const getNFTs = async ()=>{
        let {result} = await Moralis.Web3API.account.getNFTs({"chain":"eth","address":"0x13d0ef4ccfcea902e6b73eb867f76e50c1dedd94" })
        return result
    }
    
    const getBalance = async ()=>{

        let {balance} = await Moralis.Web3API.account.getNativeBalance({"chain":"eth","address":"0x13d0ef4ccfcea902e6b73eb867f76e50c1dedd94" });
        return balance
      
    }

    const {data:balance, isLoading:balanceStatus, error:balanceError} = useQuery("getUserBalance", getBalance)
    
    const {data:nfts, isLoading:nftStatus, error:nftError} = useQuery("getUserNFTs", getNFTs)


    return (
        <div>
            {balance &&  nfts &&
                        <div className="login-wrapper">
                        <div className="head_section">
                            <h1 className = "wallet">Wallet</h1>
                            <button className="logout"  onClick={()=> logout()}>Logout</button>
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