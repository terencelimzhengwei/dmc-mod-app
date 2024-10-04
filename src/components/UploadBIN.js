import { useDropzone } from 'react-dropzone';
import { Box, Text, VStack } from '@chakra-ui/react';

export default function FileUpload(props) {
    const { handleUpload } = props;

    const handleFileRead = async file => {
        const arrayBuffer = await file.arrayBuffer();
        console.log(arrayBuffer)
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
        <VStack spacing={4} justify="center" align="center" h="100vh">
            <Box
                {...getRootProps()}
                borderWidth="2px"
                borderRadius="lg"
                borderStyle="dashed"
                borderColor="gray.500"
                p={20}
                width={'60%'}
                textAlign="center"
                cursor="pointer"
                _hover={{ borderColor: 'gray.300' }}
                transition="border-color 0.2s"
            >
                <input {...getInputProps()} />
                <Text fontSize={'xl'} fontWeight={'200'}>
                    Drag & drop your bin file here or click to upload
                </Text>
            </Box>
        </VStack>
    );
}
