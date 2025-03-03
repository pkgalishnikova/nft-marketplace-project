import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import NextLink from 'next/link';
import { Container, Flex, Stack, Heading, Button } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Container maxW={"1200px"}>
      <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
      <Stack align={"center"} spacing={4}>
        <Image
                              src="/images/card.png"
                              width={200}
                              height={200} 
                              alt={""}          />
      <Heading>Marketplace</Heading>
      <Stack direction={"row"} spacing={"8"}>
      <Button
            as={NextLink} href='/gym/gym_index'
          >GYM</Button>
      <Button
            as={NextLink} href='/spa/spa_index'
          >SPA Center</Button>
      <Button
            as={NextLink} href='/charity/charity_index'
          >Charity</Button>
      </Stack>
      </Stack>
      </Flex>
      {/* <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
        <Stack spacing={4} align={"center"}>
          <Heading>Marketplace</Heading>
          <Button
            as={NextLink} href='/buy'
          >Shop NFTs</Button>
        </Stack>
      </Flex> */}
    </Container>
  );
};

export default Home;
