import styles from './styles/Button.module.css'

const Button = ({value, logout})=>{
    return (
        <>
            <button className={styles.logout}  onClick={()=> logout()}>{value}</button>
        </>
    )
}

export default Button