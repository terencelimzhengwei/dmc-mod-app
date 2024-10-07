import { Flex, Box, Text, Heading } from '@chakra-ui/react';
import QuestTable from './QuestTable';

const UpdateQuest = ({ data, updateQuests }) => {
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
                <Heading>Update Quest Mode</Heading>
                <Text fontWeight={200}>
                    To update quest mode, click the edit button, change the
                    information accordingly and save.
                </Text>
            </Box>
            <QuestTable data={data} updateQuests={updateQuests} />
        </Flex>
    );
};

export default UpdateQuest;
