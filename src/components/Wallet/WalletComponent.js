
import {useMoralis} from 'react-moralis';

import NFTsContainer from "../NFTs/NFTsContainer";

import  {useQuery} from 'react-query'

import {getNFTs, getBalance} from '../FetchAPIs/fetch'

import Button from '../Button/Button';

import styles from './styles.module.css'


const Wallet = ()=>{

    const {user, logout, Moralis, } = useMoralis()

    const {data:balance, isLoading:balanceLoading} = useQuery("getUserBalance",() => getBalance(Moralis))
    
    const {data:nfts, isLoading: nftLoading} = useQuery("getUserNFTs", () => getNFTs(Moralis))


    return (
        <div>
            {
                balance &&  nfts &&
                <div className={styles.loginWrapper}>

                    <div className={styles.headSection}>
                        <h1 className = {styles.wallet}>Wallet</h1>
                        <Button value ="DISCONNECT" logout={logout}/>
                    </div>
                    
                    <div className={styles.accountSection}>
                        <div className={styles.innerSection}>
                        <h4 className={styles.text}>{`Account : ${user.attributes.accounts[0]}`}</h4>
                        <br/>
                        <h4 className={styles.text}>{`Balance : ${balance} ETH`}</h4>
                        </div>
                    </div>
                    
                    <NFTsContainer nfts= {nfts}/>

                </div> 
            }
            {
                (balanceLoading || nftLoading) && 
                <div className={styles.body}> 
                    <div className={styles.container}>
                        <div className={`${styles.div} ${styles.yellow}`}></div>
                        <div className={`${styles.div} ${styles.red}`}></div>
                        <div className={`${styles.div} ${styles.blue}`}></div>
                        <div className={`${styles.div} ${styles.violet}`}></div>
                    </div>
                </div>

            }
        </div>
    )

}

export default Wallet