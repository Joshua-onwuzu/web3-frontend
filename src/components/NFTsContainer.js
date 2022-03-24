import NftCard from "./NftCards"


const NFTsContainer = ({nfts})=>{
    if(nfts.length === 0){
        return (
            <div className="nfts">
            <h3>NFTs :</h3>
                <div className="no_nfts_section">
                    <h1 className="empty_header">You currently do not have nfts</h1>
                </div>
            </div>
        )
    }
    return (
        <div className="nfts">
        <h3>NFTs :</h3>
                <div className="grid">
                    {nfts.map((nft, index) => <NftCard key={index} nft = {nft} />)}
                </div>
        </div>
    )
}

export default NFTsContainer;