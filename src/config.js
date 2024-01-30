import { FeeAmount } from "@uniswap/v3-sdk"
import { UNI_TOKEN, USDC_TOKEN, WETH_TOKEN } from "./constant"


export const CurrentConfig = {
    rpc: {
        local: "http://localhost:8545",
        mainnet: "https://goerli.infura.io/v3/30753a75ce1c4da2a29edfd76c597629"
    },
    tokens: {
        in: UNI_TOKEN,
        amountIn: 1,
        out: WETH_TOKEN,
        poolFee: FeeAmount.MEDIUM
    }
}
