export default defineNuxtPlugin(async () => {
  const { sdk } = await import('@farcaster/frame-sdk')
  
  return {
    provide: {
      farcaster: sdk
    }
  }
}) 