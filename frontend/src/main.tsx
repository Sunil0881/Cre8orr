import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';


import '@rainbow-me/rainbowkit/styles.css';

import {ConnectButton,getDefaultConfig,RainbowKitProvider,} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  sepolia,
  base,
  zora,
  polygonMumbai,
  baseSepolia,
  arbitrumSepolia,
  avalancheFuji,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [sepolia,baseSepolia,arbitrumSepolia,avalancheFuji],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
      <StrictMode>
       <App />
  
  </StrictMode>
       
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  
);