import { Container, Heading, Text, Stack } from "@chakra-ui/react";
import { useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import React from "react";
import { MARKETPLACE_ADDRESS, NFT_COLLECTION_ADDRESS } from "../../const/addresses";
import { useRouter } from "next/router";
import NFTGrid from "../../components_new/NFTGrid";

export default function ProfilePage() {
    const router = useRouter();
    const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);

    const { contract: marketplace } = useContract(MARKETPLACE_ADDRESS, "marketplace-v3");

    const { data: ownedNfts, isLoading: loading0wnedNfts } = useOwnedNFTs(
        nftCollection,
        router.query.address as string
    );

    return (
        <Container maxW={"1200px"} p={5} py={"10px"} px={"40px"}>
            <Stack align={"baseline"} spacing={4}>
            <Heading>{"Personal Information"}</Heading>
            <Heading>{"Favourites"}</Heading>
            <Text>Browse and manage NFTs that you saved.</Text>
            <Heading>{"Owned NFT(s)"}</Heading>
            <Text>Browse and manage your NFTs from this collection.</Text>
            <NFTGrid
                data={ownedNfts}
                isLoading={loading0wnedNfts}
                emptyText={"You do not own any NFTs yet from this collection"}
            />
            </Stack>
        </Container>
    )
}