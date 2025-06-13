import { http, cookieStorage, createConfig, createStorage } from '@wagmi/vue'
import { arbitrum, optimism } from '@wagmi/vue/chains'
import { farcasterFrame } from '@farcaster/frame-wagmi-connector'

export const config = createConfig({
  chains: [optimism, arbitrum],
  connectors: [
    farcasterFrame(), 
  ],
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  transports: {
    [optimism.id]: http(),
    [arbitrum.id]: http(),
  },
})

declare module '@wagmi/vue' {
  interface Register {
    config: typeof config
  }
}
