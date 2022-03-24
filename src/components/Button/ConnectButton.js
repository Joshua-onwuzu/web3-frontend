import { useState } from 'react'
import styles from './styles/Button.module.css'

const ConnectButton = ({authenticate, error})=>{
    const [errorText, setErrorText] = useState(true);

    const handleErrorClick = ()=>{
        setErrorText(!errorText)
    }
    
    const errorMessage = ()=>{
        return <div className={styles.errorSection}>
                <button className={styles.cancel} onClick={handleErrorClick}>X</button>
                <div className={styles.errorMsg}>
                    <p>An error occured. please make sure you have metamask installed and sign in to connect</p>
                </div>

                </div>
    }
    return (
        < div className={styles.home}>
            {error && errorText && errorMessage()}
            <div className={styles.wrap}>
                <button className={styles.button} onClick={()=> {setErrorText(true); authenticate()}}>Connect</button>
            </div>    
        </div>

    )
}
export default ConnectButton;