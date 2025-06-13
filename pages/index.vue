<template>
  <div class="container">
    <h1>Punk Domains</h1>
    <p>Connected: {{ isConnected }}</p>
    <p>Address: {{ address }}</p>
    <p>Chain ID: {{ chainId }}</p>
    <p>Status: {{ status }}</p>
    <button @click="disconnect" class="btn btn-primary">Disconnect</button>
    <br />
    <br />
    <NuxtLink to="/about" class="btn btn-primary">About</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'Home',

  setup() {
    const { address, chainId, isConnected, status } = useAccount()
    const config = useConfig()
    const { disconnect } = useDisconnect()

    return {
      address,
      chainId,
      config,
      disconnect,
      status,
    }
  },
}
</script>