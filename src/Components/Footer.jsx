import { Box, Button, Heading, HStack, Input, Stack, Text, VStack } from "@chakra-ui/react";
import React from 'react';
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillLinkedin,
    AiOutlineSend
} from "react-icons/ai";

const Footer = () => {
    return <Box bgColor={"blackAlpha.900"} minH={40} p={'16'} color={"white"}>

        <Stack direction={["column", "row"]} >

            <VStack alignItems={"stretch"} w={"full"} px={4}>
                <Heading size={'md'} textTransform={"uppercase"} textAlign={['center','left']}>Follow to get updates</Heading>
                <HStack borderBottom={'2px solid white'} py={2}>

                    <Input placeholder="Enter Email Here..." border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor="none" />
                    <Button p={'0'} colorScheme="purple" variant={"ghost"} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend size={20} />
                    </Button>
                </HStack>
            </VStack>

            <VStack w={"full"} borderLeft={["none", "1px solid white"]} borderRight={["none", "1px solid white"]}>

                <Heading textTransform={"uppercase"} textAlign={"center"}>Video Center</Heading>
                <Text>@all right reserved</Text>

            </VStack>

            <VStack w={"full"} alignItems="center">

                <Heading size={'md'} textTransform={'uppercase'} m={[5,0]}>
                    Social Media
                </Heading>

                <HStack direction={'row'} spacing={10} m={[5,3]}>

                    <Button
                        as="a"
                        href="https://www.facebook.com/profile.php?id=100048080700627" // Replace with your Facebook profile URL
                        target="_blank" // Opens the link in a new tab
                        rel="noopener noreferrer" // For security reasons
                        bgColor="#1877f2"
                        color="white"
                        borderRadius="full"
                        p={2}>
                        <AiFillFacebook size="20px" />
                        Facebook
                    </Button>
                    
                    <Button
                        as="a"
                        href="https://www.instagram.com/subhamm_07_/" // Replace with your Facebook profile URL
                        target="_blank" // Opens the link in a new tab
                        rel="noopener noreferrer" // For security reasons 
                        bgGradient="linear(to-r, #f58529, #dd2a7b, #8134af, #515bd4)"
                        color="white"
                        borderRadius="full"
                        p={2}>
                        <AiFillInstagram size="20px" />
                        Instagram
                    </Button>
                    <Button
                        as="a"
                        href="https://www.linkedin.com/in/subhamsaha07/" // Replace with your Facebook profile URL
                        target="_blank" // Opens the link in a new tab
                        rel="noopener noreferrer" // For security reasons
                        bg="#0077b5" // LinkedIn's primary color
                        color="white"
                        borderRadius="full"
                        p={2}>
                        <AiFillLinkedin size="20px" />
                        Linkedin
                    </Button>
                   
                    

                </HStack>

            </VStack>


        </Stack>

    </Box>
};

export default Footer;
