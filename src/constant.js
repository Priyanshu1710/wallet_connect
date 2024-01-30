// This file stores web3 related constants such as addresses, token definitions, ETH currency references and ABI's

import { SUPPORTED_CHAINS, Token } from "@uniswap/sdk-core"

const SupportedChainId = SUPPORTED_CHAINS;
// Addresses

export const POOL_FACTORY_CONTRACT_ADDRESS =
    "0x1F98431c8aD98523631AE4a59f267346ea31F984"
export const QUOTER_CONTRACT_ADDRESS =
    "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6"

// Currencies and Tokens


export const WETH_TOKEN = new Token(
    SupportedChainId[7],
    "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    18,
    "WETH",
    "Wrapped Ether"
)

export const USDC_TOKEN = new Token(
    SupportedChainId[7],
    "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    6,
    "USDC",
    "USD//C"
)

export const UNI_TOKEN = new Token(
    SupportedChainId[7],
    "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    18,
    "UNI",
    "USD//C"
)
