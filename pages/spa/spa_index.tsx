import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import NextLink from 'next/link';
import { Container, Flex, Stack, Heading, Button, Text } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Container maxW={"1200px"}>
      <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
        <Stack spacing={4} align={"center"}>
          <Image
                      src="/images/plant.png"
                      width={200}
                      height={200} 
                      alt={""}          />
          <Heading>SPA Center Visits Marketplace</Heading>
          <Text>Purchase a visit to SPA Center or re-sell yours if it is available.</Text>
          <Button
            as={NextLink} href='/spa/buy'
          >Buy visit to SPA</Button>
          <Button
            as={NextLink} href='/spa/sell'
          >Sell visit to SPA</Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Home;
