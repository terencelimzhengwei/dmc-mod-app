import { useDropzone } from 'react-dropzone';
import { Box, Text, VStack, Center } from '@chakra-ui/react';

export default function FileUpload(props) {
    const { handleUpload } = props;

    const handleFileRead = async file => {
        const arrayBuffer = await file.arrayBuffer();
        handleUpload(arrayBuffer);
    };

    const onDrop = acceptedFiles => {
        if (acceptedFiles.length) {
            handleFileRead(acceptedFiles[0]);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'application/octet-stream': ['.bin'],
        },
        multiple: false,
    });

    return (
        <VStack spacing={4} justify="center" align="center" h="100vh" p={2}>
            <Box
                {...getRootProps()}
                borderWidth="2px"
                borderRadius="lg"
                borderStyle="dashed"
                borderColor="gray.500"
                height={["30%"]}
                width={["100%","60%"]}
                p={2}
                textAlign="center"
                cursor="pointer"
                _hover={{ borderColor: 'gray.300' }}
                transition="border-color 0.2s"
                display="flex" // Add flexbox to center contents
                alignItems="center" // Align text vertically in the center
                justifyContent="center" // Align text horizontally in the center
            >
                <input {...getInputProps()} />
                <Center>
                <Text fontSize={['l','xl','xl','2xl']} fontWeight={'200'}>
                    Drag & drop your bin file here or click to upload
                </Text>
                </Center>
            </Box>
        </VStack>
    );
}
