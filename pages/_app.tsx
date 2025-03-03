import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "../components_new/navbar";
import { BottomBar } from "../components_new/bottom";
import { slide as Menu } from "react-burger-menu";
import { Sidebar } from "../components_new/Sidebar";
import { coinbaseWallet, embeddedWallet, metamaskWallet, rainbowWallet, smartWallet, trustWallet, walletConnect } from "@thirdweb-dev/react";
import '../components_new/Sidebar.css';

const activeChain = "sepolia";

function MyApp({ Component, pageProps }: AppProps) {
  const smartWalletConfig = {
    factoryAddress: "0xb073ab62195b46fd43ae74e86fb978f0a234d94b",
    gasless: true,
  };
  
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[
              smartWallet(embeddedWallet(), smartWalletConfig),
              metamaskWallet(),
              coinbaseWallet(),
              walletConnect(),
              rainbowWallet(),
              trustWallet(),
            ]}
    >
      <ChakraProvider>
        <Navbar />
        {/* <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} /> */}
        <Component {...pageProps} />
        <BottomBar />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
