

const ConnectButton = ({authenticate})=>{
    return (
        <>
            <div className="wrap">
                <button className="button" onClick={()=> authenticate()}>Connect</button>
            </div>    
        </>

    )
}
export default ConnectButton;