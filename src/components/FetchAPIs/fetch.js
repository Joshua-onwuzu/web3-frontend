
const getNFTs = async (Moralis)=>{
    let {result} = await Moralis.Web3API.account.getNFTs()
    return result
}

const getBalance = async (Moralis)=>{

    let {balance} = await Moralis.Web3API.account.getNativeBalance();
    return balance
    
}

export {getNFTs, getBalance}