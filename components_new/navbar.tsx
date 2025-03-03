import { Avatar, Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import NextLink from 'next/link';
// import '../components_new/Sidebar.css';
import { Sidebar } from "../components_new/Sidebar";

export function Navbar() {
    const address = useAddress();

    return(
        <Box maxW={"2000px"} m={"auto"} py={"10px"} px={"40px"} bg={"#ededed"} 
        borderBottom={"1px solid"} 
        borderColor={"gray.300"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Flex alignItems={"center"} gap={"40px"}>
                <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
                <Link as={NextLink} href='/'>
                    <Heading>NFT Marketplace</Heading>
                </Link>
                </Flex>
                {/* <Flex direction={"row"}>
                    <Link as={NextLink} href='/gym/gym_index' mx={2.5}>
                        <Text>Gym</Text>
                    </Link>
                    <Link as={NextLink} href='spa/spa_index' mx={2.5}>
                        <Text>SPA center</Text>
                    </Link>
                    <Link as={NextLink} href='charity/charity_index' mx={2.5}>
                        <Text>Charity</Text>
                    </Link>
                </Flex> */}
                <Flex alignItems={"center"}>
                    <ConnectWallet/>
                    {address && (
                        <Link as={NextLink} href={`/profile/${address}`}>
                            <Avatar src='https://bit.ly/broken-link' ml={"20px"}/>
                        </Link>
                    )}
                </Flex>
            </Flex>
        </Box>
    )
}
