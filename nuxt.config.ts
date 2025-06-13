import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@wagmi/vue/nuxt'],
  compatibilityDate: '2025-01-16',
  build: {
    transpile: ['@farcaster/frame-sdk', '@farcaster/frame-wagmi-connector']
  },
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          charset: 'utf-8',
        },
      ],
      link: [
        {
          // Bootstrap
          rel: 'stylesheet',
          href: '/css/bootstrap.css',
        },
        {
          // Bootstrap icons
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css',
        },
        {
          // Custom
          rel: 'stylesheet',
          href: '/css/custom.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
        },
      ],
    },
  },
  components: false,
  runtimeConfig: {
    public: {
      blockExplorerBaseUrl: {
        10: 'https://optimistic.etherscan.io',
        42161: 'https://arbiscan.io',
      },
      chainCurrency: {
        10: 'ETH',
        42161: 'ETH',
      },
      favicon: '/img/favicon.ico',
      projectMetadataTitle: 'Punk Domains',
      projectDescription: 'Punk Domains is a decentralized domain name service with plenty of top-level domains (.arbi, .wagmi, .smol, .basebook, .punkangel etc.) and running on multiple blockchains.',
      projectUrl: 'https://fc.punk.domains',
      projectTwitter: '@PunkDomains',
      previewImage: '/img/cover.png',
      supportedChains: [
        { chainId: 10, networkName: 'Optimism' },
        { chainId: 42161, networkName: 'Arbitrum' },
      ],
      wcProjectId: process.env.NUXT_PUBLIC_WC_PROJECT_ID,
    }
  }
})