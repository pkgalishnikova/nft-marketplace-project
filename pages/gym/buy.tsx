import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import NFTGrid from "../../components_new/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../../const/addresses";
import { useContract, useNFTs, useTotalCount } from "@thirdweb-dev/react";

export default function Buy() {
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const { data, isLoading } = useNFTs(contract);
    return (
        <Container maxW={"1200px"} p={5}>
            <Heading>Buy NFTs</Heading>
            <Text>Browse and buy NFTs from this collection.</Text>
            <NFTGrid
                isLoading={isLoading}
                data={data}
                emptyText={"No NFTs found"}
            />
        </Container>

    )
}