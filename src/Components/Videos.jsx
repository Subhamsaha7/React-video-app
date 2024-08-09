import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
    const videosArr = [
        'https://videos.pexels.com/video-files/3352749/3352749-uhd_2560_1440_30fps.mp4',
        'https://videos.pexels.com/video-files/2804593/2804593-uhd_2560_1440_24fps.mp4',
        'https://media.istockphoto.com/id/1700675341/video/a-software-development-designer-or-programmer-is-typing-on-a-computer-to-create-an.mp4?s=mp4-640x640-is&k=20&c=JTU2T0RjmeX0XHZmv9yJlpyxe4idPcWCooS30eAzXho=',
        'https://videos.pexels.com/video-files/3129540/3129540-uhd_2560_1440_30fps.mp4',
        'https://videos.pexels.com/video-files/2361871/2361871-uhd_2560_1440_30fps.mp4',
        'https://videos.pexels.com/video-files/3130182/3130182-uhd_2560_1440_30fps.mp4',
        'https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4',
    ];

    const [videoSrc, setVideoSrc] = useState(videosArr[0]);
    return (
        <Stack direction={['column', 'row']} h={'100vh'}>
            <VStack w={'full'}>
                <video
                    controls
                    // controlsList="nodownload"
                    autoPlay
                    src={videoSrc}
                    style={{
                        width: '100%',
                        height: '80%', // Maintain aspect ratio
                        objectFit: 'cover', // Adjust object-fit as needed
                    }}
                ></video>

                <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowX={'auto'}>
                    <Heading>Ultimate Video Experience</Heading>
                    <Text style={{ fontFamily: 'cursive' }}>
                        Dive into the Ultimate Video Experience and explore a world where
                        every frame tells a story and each clip is a journey. Our platform
                        is designed to bring you the finest selection of videos across
                        various genres and topics, from inspiring educational content to
                        breathtaking cinematic adventures. Here, you’ll find a curated
                        collection of high-definition videos that push the boundaries of
                        visual storytelling. Whether you’re seeking the latest trends in
                        technology, immersive gaming footage, or enlightening educational
                        resources, our diverse library ensures that there’s something for
                        everyone. Each video is handpicked to provide a rich, engaging
                        experience, combining superior quality with impactful content. Enjoy
                        a seamless browsing experience with intuitive navigation that makes
                        discovering your next favorite video effortless. Our Ultimate Video
                        Experience offers features like personalized recommendations,
                        trending highlights, and in-depth categories to help you find
                        exactly what you’re looking for. Embark on a visual journey that
                        captivates your senses and fuels your curiosity. From
                        thought-provoking documentaries to entertaining web series, immerse
                        yourself in an extraordinary world of video content where every
                        viewing moment is designed to inspire and entertain. Welcome to the
                        Ultimate Video Experience—where exceptional content meets
                        unparalleled quality.
                    </Text>
                </VStack>
            </VStack>

            <VStack
                w={['full', 'xl']}
                alignItems={'stretch'}
                p={'12'}
                spacing={'8'}
                overflowY={'auto'}
            >
                {videosArr.map((item, index) => (
                    <Button
                        variant={'ghost'}
                        colorScheme="purple"
                        onClick={() => setVideoSrc(item)}
                    >
                        Video {index + 1}
                    </Button>
                ))}
            </VStack>
        </Stack>
    );
};

export default Videos;
