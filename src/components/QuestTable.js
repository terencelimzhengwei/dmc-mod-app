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
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import { pattern, patternToValue, valueToPattern } from '../config/pattern';

const generateQuests = (questMode, charInfos, imageDatas) => {
    console.log(questMode);
    console.log(charInfos);
    return questMode.map(level => {
        return level.map(enemy => ({
            Sprite:
                enemy.CharacterID !== 65535
                    ? imageDatas[charInfos[enemy.CharacterID].SpriteID].url
                    : null,
            attributes: { ...enemy },
        }));
    });
};

const QuestTable = ({ data, updateQuest }) => {
    const { questMode, charInfos, imageDatas } = data;
    const [editStage, setEditStage] = useState({});
    const [inputValues, setInputValues] = useState({});

    const quests = generateQuests(questMode, charInfos, imageDatas);
    // Handle edit mode toggle
    const toggleEdit = stageIndex => {
        setEditStage(prevState => ({
            ...prevState,
            [stageIndex]: !prevState[stageIndex],
        }));
    };

    // Handle input change
    const handleInputChange = (stageIndex, charIndex, key, value) => {
        setInputValues(prevState => ({
            ...prevState,
            [stageIndex]: {
                ...prevState[stageIndex],
                [charIndex]: {
                    ...prevState[stageIndex]?.[charIndex],
                    [key]: value,
                },
            },
        }));
    };

    // Handle saving updates
    const handleSave = (stageIndex, charIndex, key) => {
        const value = inputValues[stageIndex]?.[charIndex]?.[key];
        // updateQuest(stageIndex, charIndex, key, value);
    };

    return (
        <Wrap p={5} fontSize={'sm'} gap={1} justify="center" align="center">
            {quests.map((stage, stageIndex) => (
                <WrapItem key={stageIndex}>
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
                        <Text
                            fontWeight="bold"
                            fontSize="2xl"
                            textAlign="center"
                            mb={4}
                        >
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
                                                <Text
                                                    fontWeight={'bold'}
                                                    width={'100px'}
                                                >
                                                    {attributeKey}
                                                </Text>
                                                {editStage[stageIndex] ? (
                                                    // Input field in edit mode
                                                    <Input
                                                        width={'100px'}
                                                        size="xs"
                                                        textAlign={'center'}
                                                        defaultValue={
                                                            attributeKey ===
                                                            'Pattern'
                                                                ? valueToPattern(
                                                                      character
                                                                          .attributes[
                                                                          attributeKey
                                                                      ]
                                                                  )
                                                                : character
                                                                      .attributes[
                                                                      attributeKey
                                                                  ]
                                                        }
                                                        onChange={e =>
                                                            handleInputChange(
                                                                stageIndex,
                                                                charIndex,
                                                                attributeKey,
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                ) : (
                                                    // Render static text in non-edit mode
                                                    <Text
                                                        fontSize={'xs'}
                                                        width={'100px'}
                                                    >
                                                        {attributeKey ===
                                                        'Pattern'
                                                            ? valueToPattern(
                                                                  character
                                                                      .attributes[
                                                                      attributeKey
                                                                  ]
                                                              )
                                                            : character
                                                                  .attributes[
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
                        <Button
                            mt={4}
                            size="md"
                            width="100%"
                            onClick={() => toggleEdit(stageIndex)}
                        >
                            {editStage[stageIndex] ? 'Save' : 'Edit Stage'}
                        </Button>
                    </Box>
                </WrapItem>
            ))}
        </Wrap>
    );
};

export default QuestTable;
