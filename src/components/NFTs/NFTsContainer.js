import NftCard from "./NftCards"
import styles from './styles/styles.module.css'

const NFTsContainer = ({nfts})=>{
    if(nfts.length === 0){
        return (
            <div className={styles.nfts}>
            <h3>NFTs :</h3>
                <div className={styles.emptySection}>
                    <h1 className={styles.emptyHeader}>You currently do not have NFTs</h1>
                </div>
            </div>
        )
    }
    return (
        <div className={styles.nfts}>
        <h3>NFTs :</h3>
                <div className={styles.grid}>
                    {nfts.map((nft, index) => <NftCard key={index} nft = {nft} />)}
                </div>
        </div>
    )
}

export default NFTsContainer;