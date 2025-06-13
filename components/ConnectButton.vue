<template>
  <button class="btn" :class="getColor" @click="connectWallet">Connect wallet</button>
</template>

<script>
import { useChainId, useConnect } from '@wagmi/vue'

export default {
  name: "ConnectButton",
  props: ['color'], // bg: 'btn-primary' or 'btn-dark'

  computed: {
    getColor() {
      return this.color || 'btn-primary'
    }
  },

  methods: {    
    async connectWallet() {
      try {
        await this.connect({ connector: this.connectors[0], chainId: this.chainId });
      } catch (error) {
        console.error("Failed to connect wallet:", error);
      }
    },
  },

  setup() {
    const chainId = useChainId()
    const { connect, connectors, error, status } = useConnect()

    return {
      chainId,
      connect,
      connectors,
      error,
      status,
    }
  }
}
</script>

