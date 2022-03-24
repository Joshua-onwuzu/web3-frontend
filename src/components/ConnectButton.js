import {useMoralis} from 'react-moralis';

import LoginIn from './LoginInComponent';


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