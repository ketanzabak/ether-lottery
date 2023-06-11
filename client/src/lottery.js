import web3 from "./web3-provider";
import Lottery from 'Lottery.json'

const address = "0x9Eac26529c89F59ed0f134726ddb316E812a0819";

export default new web3.eth.Contract(Lottery.abi, address);