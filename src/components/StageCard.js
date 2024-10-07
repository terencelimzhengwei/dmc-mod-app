import React, { useState } from 'react';
import {
    Box,
    Image,
    Text,
    Input,
    Button,
    Stack,
    Flex,
    Center,
} from '@chakra-ui/react';
import { valueToPattern } from '../config/pattern';

const StageCard = ({ stage, stageIndex, updateStage }) => {
    const [editStage, setEditStage] = useState(false);
    const [stageData, setStageData] = useState(stage);

    // Toggle edit mode
    const toggleEdit = () => {
        if (editStage) {
            const newStageData = stageData.map(
                character => character.attributes
            );
            updateStage(stageIndex, newStageData); // Only save when exiting edit mode
        }
        setEditStage(prevState => !prevState);
    };

    const handleInputChange = (e, key, charIndex) => {
        const newStageData = stageData.map((character, i) =>
            charIndex === i
                ? {
                      ...character,
                      attributes: {
                          ...character.attributes,
                          [key]: Number(e.target.value),
                      },
                  }
                : character
        );
        setStageData(newStageData);
    };

    return (
        <Box
            p={5}
            border="1px"
            borderStyle="dashed"
            borderColor="gray.500"
            borderRadius="lg"
            bg="gray.800"
            color="white"
            boxShadow="md"
            gap={10}
        >
            <Text fontWeight="bold" fontSize="2xl" textAlign="center" mb={4}>
                Stage {stageIndex + 1}
            </Text>
            <Flex gap={4}>
                {stage.map((character, charIndex) => (
                    <Flex
                        key={charIndex}
                        direction="column"
                        align="center"
                        boxShadow="sm"
                    >
                        <Box>
                            <Center>
                                <Image
                                    src={`${character.Sprite}`}
                                    fallbackSrc="https://via.placeholder.com/48"
                                    alt="Character"
                                    boxSize="35px"
                                />
                            </Center>
                        </Box>
                        {Object.keys(character.attributes).map(
                            (attributeKey, i) => (
                                <Stack
                                    align="center"
                                    gap={0}
                                    key={`field-${i}`}
                                >
                                    <Text fontWeight={'bold'} width={'100px'}>
                                        {attributeKey}
                                    </Text>
                                    {editStage ? (
                                        // Input field in edit mode
                                        <Input
                                            width={'100px'}
                                            size="xs"
                                            textAlign={'center'}
                                            defaultValue={
                                                character.attributes[
                                                    attributeKey
                                                ]
                                            }
                                            onChange={e =>
                                                handleInputChange(
                                                    e,
                                                    attributeKey,
                                                    charIndex
                                                )
                                            }
                                        />
                                    ) : (
                                        // Render static text in non-edit mode
                                        <Text fontSize={'xs'} width={'100px'}>
                                            {attributeKey === 'Pattern'
                                                ? valueToPattern(
                                                      character.attributes[
                                                          attributeKey
                                                      ]
                                                  )
                                                : character.attributes[
                                                      attributeKey
                                                  ]}
                                        </Text>
                                    )}
                                </Stack>
                            )
                        )}
                    </Flex>
                ))}
            </Flex>
            <Button mt={4} size="md" width="100%" onClick={toggleEdit}>
                {editStage ? 'Save' : 'Edit Stage'}
            </Button>
        </Box>
    );
};

export default StageCard;
