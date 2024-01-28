import { FeeAmount } from "@uniswap/v3-sdk"
import { USDC_TOKEN, WETH_TOKEN } from "./constant"


export const CurrentConfig = {
    rpc: {
        local: "http://localhost:8545",
        mainnet: "https://mainnet.infura.io/v3/0ac57a06f2994538829c14745750d721"
    },
    tokens: {
        in: USDC_TOKEN,
        amountIn: 2370,
        out: WETH_TOKEN,
        poolFee: FeeAmount.MEDIUM
    }
}
