import React, { useState } from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';
import StageCard from './StageCard'; // Import the new StageCard component
import { pattern } from '../config/pattern';

const generateQuests = (questMode, charInfos, imageDatas) => {
    return questMode.map(level =>
        level.map(enemy => {
            return {
                Sprite:
                    enemy.CharacterID !== 65535
                        ? imageDatas[charInfos[enemy.CharacterID].SpriteID].url
                        : null,
                attributes: { ...enemy },
            };
        })
    );
};

const QuestTable = ({ data, updateQuests }) => {
    const { questMode, charInfos, imageDatas } = data;
    const quests = generateQuests(questMode, charInfos, imageDatas);

    // Handle saving updates from StageCard
    const updateStage = (stageIndex, updatedValues) => {
        const newQuestMode = questMode.map((stage, i) =>
            stageIndex === i ? updatedValues : stage
        );
        console.log(newQuestMode);
        const newData = { ...data, questMode: newQuestMode };
        updateQuests(newData);
    };

    return (
        <Wrap p={5} fontSize={'sm'} gap={1} justify="center" align="center">
            {quests.map((stage, stageIndex) => (
                <WrapItem key={stageIndex}>
                    <StageCard
                        stage={stage}
                        stageIndex={stageIndex}
                        updateStage={updateStage}
                    />
                </WrapItem>
            ))}
        </Wrap>
    );
};

export default QuestTable;
