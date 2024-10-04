import {
    Image,
    Flex,
    Box,
    Text,
    Heading,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';
import { useMemo } from 'react';
import { getImageDetails, arrayBufferToImageData } from '../utils/imageUtils';

const UpdateSprite = props => {
    const { data, updateSprite } = props;

    const onDrop = async acceptedFiles => {
        const newImageDatas = [...data.imageDatas];
        if (acceptedFiles.length) {
            // Create an array of promises
            const promises = acceptedFiles.map(async f => {
                const { name, imageData, rgb565 } = await getImageDetails(f);
                const index = parseInt(name.split('.')[0]);
                const data = arrayBufferToImageData(
                    rgb565,
                    imageData.width,
                    imageData.height
                );
                newImageDatas[index] = data; // Update the cloned array
            });

            // Wait for all promises to resolve
            await Promise.all(promises);

            // Create a new data object by copying the old data and updating imageUrls
            const updatedData = {
                ...data,
                imageDatas: newImageDatas,
            };
            updateSprite(updatedData);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: { 'image/png': ['.png'] },
        multiple: true,
    });

    const memoizedImageList = useMemo(() => {
        const imageDatas = data ? data.imageDatas : [];
        return imageDatas.map((image, index) => (
            <WrapItem key={index}>
                <Text fontSize={'xs'}>{index}</Text>
                <Image src={image.url} alt={`Sprite ${index}`} boxSize="50px" />
            </WrapItem>
        ));
    }, [data]);

    return (
        <Flex flexDir={'column'} align={'center'} gap={4}>
            <Box
                {...getRootProps()}
                borderWidth="2px"
                borderRadius="lg"
                borderStyle="dashed"
                borderColor="gray.500"
                width={'100%'}
                textAlign="center"
                p={5}
                cursor="pointer"
                _hover={{ borderColor: 'gray.300' }}
                transition="border-color 0.2s"
            >
                <input {...getInputProps()} />
                <Heading>Update Images</Heading>
                <Text fontWeight={200}>
                    To update images in your firmware, drag and drop or click to
                    upload your sprites.
                </Text>
                <Text fontWeight={200}>
                    Filenames should correspond to the ID of the sprite (e.g.
                    1.png, 2.png etc.)
                </Text>
            </Box>
            <Wrap>{memoizedImageList}</Wrap>
        </Flex>
    );
};

export default UpdateSprite;
