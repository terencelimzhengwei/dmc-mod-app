import React, { useState } from 'react';
import {
    ChakraProvider,
    Box,
    extendTheme,
    Flex,
    useToast,
} from '@chakra-ui/react';
import Nav from './components/Nav';
import UploadBIN from './components/UploadBIN';
import UpdateSprite from './components/UpdateSprite';
import { init, rebuild, downloadBIN } from './utils/analyzer';

// Create a theme with default mode set to dark
const theme = extendTheme({
    config: {
        initialColorMode: 'dark', // Set default color mode to dark
        useSystemColorMode: false, // Do not use system color mode
    },
});

function App() {
    const [page, setPage] = useState(0);
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);
    const toast = useToast();

    const navClick = p => {
        setPage(p);
    };

    const restartClick = () => {
        setOriginalData(null);
        setData(null);
        setPage(0);
    };

    const buildClick = async () => {
        const buffer = await rebuild(data);
        const newData = { ...data, buffer };
        setData(newData);
        downloadBIN(buffer);
        toast({
            title: 'BIN built and downloaded',
            description: 'The updated bin has been downloaded as output.bin',
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: 'bottom-right',
        });
    };

    const updateSprite = data => {
        setData(data);
        toast({
            title: 'Sprites Updated',
            description: 'Your sprites have been updated',
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: 'bottom-right',
        });
    };

    const handleUpload = async arrayBuffer => {
        const originalData = await init(arrayBuffer);
        if (!originalData || !originalData.firmware) {
            toast({
                title: 'Invalid BIN File',
                description:
                    'Unable to decode BIN File. Ensure that BIN file is valid',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'bottom-right',
            });
            return;
        }
        if (
            originalData.firmware.identifierValid &
            originalData.firmware.regionValid
        ) {
            setOriginalData(originalData);
            setData(originalData);
            setPage(1);
            toast({
                title: `${originalData.firmware.name} firmware`,
                description: `Please proceed to modify your ${originalData.firmware.name} firmware`,
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'bottom-right',
            });
            return;
        } else {
            toast({
                title: `${originalData.firmware.name} firmware with invalid regions`,
                description: `Firmware identified to be ${originalData.firmware.name} but failed region checks`,
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'bottom-right',
            });
            return;
        }
    };

    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center" fontSize="xl">
                <Flex p={3} flexDir={'column'}>
                    <Nav
                        fileUploaded={originalData !== null}
                        pageActive={page}
                        navClick={navClick}
                        restartClick={restartClick}
                        buildClick={buildClick}
                    />
                    {!originalData ? (
                        <UploadBIN handleUpload={handleUpload} />
                    ) : null}
                    {page === 1 ? (
                        <UpdateSprite updateSprite={updateSprite} data={data} />
                    ) : null}
                </Flex>
            </Box>
        </ChakraProvider>
    );
}

export default App;
