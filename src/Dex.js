import React from 'react'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useWeb3Modal } from '@web3modal/wagmi/react'

// 0. Setup queryClient
const queryClient = new QueryClient()


// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'ad6ab83ec06dbbbacfc24752ba9371b3'

// 2. Create wagmiConfig
const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const config = defaultWagmiConfig({
    chains, // required
    projectId, // required
    metadata, // required
    enableWalletConnect: true, // Optional - true by default
    enableInjected: true, // Optional - true by default
    enableEIP6963: true, // Optional - true by default
    enableCoinbase: true, // Optional - true by default
    // ...wagmiOptions // Optional - Override createConfig parameters
})

// 3. Create modal
createWeb3Modal({
    wagmiConfig: config,
    projectId,
    chains,
    enableAnalytics: true // Optional - defaults to your Cloud configuration
})




const Dex = ({ chidren }) => {
    // 4. Use modal hook
    const { open } = useWeb3Modal()

    return (
        <div>

            <WagmiProvider config={config}>
                <QueryClientProvider client={queryClient}>{chidren}</QueryClientProvider>
            </WagmiProvider>
            <br />
            <button onClick={() => open()}>Open Connect Modal</button>
            <br />
            <button onClick={() => open({ view: 'Networks' })}>Open Network Modal</button>
        </div>
    )
}

export default Dex