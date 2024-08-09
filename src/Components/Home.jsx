import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';

import React from 'react';

import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../Assets/1.jpg';
import img2 from '../Assets/2.jpg';
import img3 from '../Assets/3.jpg';
import img4 from '../Assets/4.jpg';
import img5 from '../Assets/5.png';



const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
};

const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container maxW={'container.xl'} minH={'100vh'} p="16">
                <Heading
                    textTransform={'uppercase'}
                    py="2"
                    w={'fit-content'}
                    BorderBottom={'1px solid'}
                    m="auto"
                    textDecoration={'underline'}
                >
                    Services
                </Heading>

                <Stack
                    h="full"
                    p={'4'}
                    alignItems={'center'}
                    direction={['column', 'row']}
                >
                    <Image src={img5} h={['4', '400']} />

                    <Text letterSpacing={'widest'} lineHeight={"190%"} p={['4','16']}>
                        At our Video Center, we offer a comprehensive suite of services
                        designed to meet all your video needs, whether you're a business
                        looking to enhance your brand presence or an individual seeking to
                        create memorable moments. Our services include professional video
                        editing, where our skilled editors bring your vision to life with
                        precision and creativity. We also provide high-quality video
                        production services, guiding you from concept to final cut, ensuring
                        that your story is told in the most engaging way possible. For
                        businesses, we offer specialized services like corporate video
                        production, training videos, and promotional content that can help
                        you connect with your audience more effectively. Our team is
                        equipped with the latest technology and industry knowledge, ensuring
                        that your videos are of the highest quality, optimized for any
                        platform. In addition, we offer video hosting and management
                        solutions, making it easy for you to store, share, and manage your
                        video content. Whether you're launching a new product, sharing
                        knowledge through tutorials, or capturing a special event, our video
                        center is your go-to resource for all things video. With our
                        personalized approach and commitment to excellence, we ensure that
                        every project we undertake is a success.
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
};
const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
    >
        <Box Box w="full" h={'100vh'}>
            <Image src={img1} />
            <Heading
                bgColor={'blackAlpha.600'}
                color={'White'}
                {...headingOptions}
                w={'65%'}
            >
                Reimagine the Future
            </Heading>
        </Box>
        <Box Box w="full" h={'100vh'}>
            <Image src={img2} />
            <Heading
                bgColor={'whiteAlpha.600'}
                color={'black'}
                {...headingOptions}
                w={'70%'}
            >
                Innovative Gaming Era
            </Heading>
        </Box>
        <Box Box w="full" h={'100vh'}>
            <Image src={img3} />
            <Heading
                bgColor={'blackAlpha.600'}
                color={'White'}
                {...headingOptions}
                w={'70%'}
            >
                Console Gaming World
            </Heading>
        </Box>
        <Box Box w="full" h={'100vh'}>
            <Image src={img4} />
            <Heading
                bgColor={'whiteAlpha.600'}
                color={'black'}
                {...headingOptions}
                w={'75%'}
            >
                Nocturnal Thrills Galore
            </Heading>
        </Box>
    </Carousel>
);

export default Home;
