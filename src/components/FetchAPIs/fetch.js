
const getNFTs = async (Moralis)=>{
    let {result} = await Moralis.Web3API.account.getNFTs({"chain":"eth","address":"0x13d0ef4ccfcea902e6b73eb867f76e50c1dedd94" })
    return result
}

const getBalance = async (Moralis)=>{
//{"chain":"eth","address":"0x13d0ef4ccfcea902e6b73eb867f76e50c1dedd94" }
    let {balance} = await Moralis.Web3API.account.getNativeBalance({"chain":"eth","address":"0x13d0ef4ccfcea902e6b73eb867f76e50c1dedd94" });
    return balance
    
}

export {getNFTs, getBalance}