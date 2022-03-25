
const getNFTs = async (Moralis)=>{
    let {result} = await Moralis.Web3API.account.getNFTs()
    return result
}

const getBalance = async (Moralis)=>{
//{"chain":"eth","address":"0x13d0ef4ccfcea902e6b73eb867f76e50c1dedd94" }
    let {balance} = await Moralis.Web3API.account.getNativeBalance();
    let value = Moralis.Units.FromWei(balance)
    return value
    
}

export {getNFTs, getBalance}