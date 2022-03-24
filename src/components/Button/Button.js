
const Button = ({value, logout})=>{
    return (
        <>
            <button className="logout"  onClick={()=> logout()}>{value}</button>
        </>
    )
}

export default Button