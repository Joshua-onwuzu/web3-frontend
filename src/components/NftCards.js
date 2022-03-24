const NftCard = ({nft})=>{
    let x = JSON.parse(nft.metadata) 
    return (
        <article>
          <img src={x?.image} />
          <div class="text">
            <h3>{nft.name}</h3>
            <br/>
            <p>{x?.description}</p>
          </div>
        </article>
    )
}

export default NftCard