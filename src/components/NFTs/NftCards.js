import styles from './styles/styles.module.css'

const NftCard = ({nft})=>{
    let metadata = JSON.parse(nft.metadata) 
    return (
        <article className={styles.article}>

          <img alt ="nft_image"className={styles.img} src={metadata?.image} />
          
          <div className={styles.text}>

            <h3>{nft.name}</h3>
            <br/>
            <p>{metadata?.description}</p>

          </div>

        </article>
    )
}

export default NftCard