import { createClient, configureChains } from 'wagmi'
 
import { publicProvider } from 'wagmi/providers/public'
import { hardhat } from 'wagmi/chains'
 
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'


// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider } = configureChains(
  [hardhat],
  [publicProvider()],
)
 
// Set up client
export const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains })
  ],
  provider
})
