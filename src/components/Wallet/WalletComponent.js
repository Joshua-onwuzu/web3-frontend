
import {useMoralis} from 'react-moralis';

import NFTsContainer from "../NFTs/NFTsContainer";

import  {useQuery} from 'react-query'

import {getNFTs, getBalance} from '../FetchAPIs/fetch'

import Button from '../Button/Button';

import styles from './styles.module.css'


const Wallet = ()=>{

    const {user, logout, Moralis, } = useMoralis()

    const {data:balance} = useQuery("getUserBalance",() => getBalance(Moralis))
    
    const {data:nfts} = useQuery("getUserNFTs", () => getNFTs(Moralis))


    return (
        <div>
            {balance &&  nfts &&
            <div className={styles.loginWrapper}>
                <div className={styles.headSection}>
                    <h1 className = {styles.wallet}>Wallet</h1>
                    <Button value ="DISCONNECT" logout={logout}/>
                </div>
                
                <div className={styles.accountSection}>
                    <div >
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

export default Wallet