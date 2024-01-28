import { ethers } from "ethers"
import { CurrentConfig } from "./config"

// Provider Functions

export function getProvider() {
    return new ethers.providers.JsonRpcProvider(CurrentConfig.rpc.mainnet)
}
