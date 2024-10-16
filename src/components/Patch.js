import {
    Flex,
    Box,
    Text,
    Heading,
    Button,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';

const PatchCard = ({ index, patch, toggleEnabled }) => {
    const { name, description, enabled } = patch;
    return (
        <Box
            p={5}
            border="1px"
            borderStyle="dashed"
            borderColor="gray.500"
            borderRadius="lg"
            gap={10}
        >
            <Text fontWeight="bold" fontSize="2xl" textAlign="center" mb={4}>
                {name}
            </Text>
            <Text fontSize="sm" textAlign="center" mb={4}>
                {description}
            </Text>
            <Button
                mt={4}
                size="md"
                width="100%"
                onClick={() => toggleEnabled(index)}
                colorScheme={enabled ? 'green' : 'gray'}
            >
                {enabled ? 'Enabled' : 'Disabled'}
            </Button>
        </Box>
    );
};

const Patch = ({ patches, updatePatches }) => {
    const toggleEnabled = index => {
        const newPatches = patches.map((patch, i) =>
            index === i ? { ...patch, enabled: !patch.enabled } : patch
        );
        updatePatches(newPatches);
    };
    return (
        <Flex flexDir={'column'} align={'center'} gap={4}>
            <Box
                borderWidth="2px"
                borderRadius="lg"
                borderStyle="dashed"
                borderColor="gray.500"
                width={'100%'}
                textAlign="center"
                p={5}
            >
                <Heading>Patch your firmware</Heading>
                <Text fontWeight={200}>
                    {patches
                        ? 'Select one or more patches to apply to your file'
                        : 'No available patches as patch only available on original firmware'}
                </Text>
            </Box>
            <Wrap>
                {patches.map((patch, index) => (
                    <WrapItem>
                        <PatchCard
                            key={`${index}-patchcard`}
                            index={index}
                            patch={patch}
                            toggleEnabled={toggleEnabled}
                        />
                    </WrapItem>
                ))}
            </Wrap>
        </Flex>
    );
};

export default Patch;
