import React, { useState, memo } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Input,
    Image,
    IconButton,
    Box,
} from '@chakra-ui/react';
import { CheckIcon, EditIcon } from '@chakra-ui/icons';

const EditableCell = memo(
    ({ index, inputValue, rawValue, isEdit, handleInputChange }) => {
        if (isEdit) {
            return (
                <Input
                    key={`cell-${index}`}
                    value={inputValue}
                    onChange={e => handleInputChange(e, index)}
                    size="sm"
                    textAlign="center"
                />
            );
        }
        return rawValue;
    }
);

const ImageCell = memo(({ rowIndex, src }) => (
    <Box display="flex" justifyContent="center" alignItems="center">
        <Image
            key={`${rowIndex}-SpriteImage`}
            src={src}
            alt="Sprite"
            boxSize="30px"
        />
    </Box>
));

const EditableRow = ({
    row,
    rowIndex,
    editRowIndex,
    editedRowData,
    handleSaveClick,
    handleEditClick,
    handleInputChange,
}) => {
    return (
        <Tr key={`row-${rowIndex}`}>
            <Td textAlign="center" verticalAlign="middle">
                <ImageCell rowIndex={rowIndex} src={row.SpriteImage} />
            </Td>
            <Td textAlign="center" verticalAlign="middle">
                <ImageCell rowIndex={rowIndex} src={row.AttackImage} />
            </Td>
            <Td textAlign="center" verticalAlign="middle">
                {row.AltAttackImage ? (
                    <ImageCell rowIndex={rowIndex} src={row.AltAttackImage} />
                ) : null}
            </Td>
            {Object.keys(row.attributes).map(key => (
                <Td key={`td-${key}`} textAlign="center" verticalAlign="middle">
                    <EditableCell
                        index={key}
                        inputValue={
                            editedRowData ? editedRowData.attributes[key] : null
                        }
                        rawValue={row.attributes[key]}
                        isEdit={editRowIndex === rowIndex}
                        handleInputChange={handleInputChange}
                    />
                </Td>
            ))}
            <Td textAlign="center" verticalAlign="middle">
                {editRowIndex === rowIndex ? (
                    <IconButton
                        icon={<CheckIcon />}
                        onClick={handleSaveClick}
                        aria-label="Save"
                        size="sm"
                    />
                ) : (
                    <IconButton
                        icon={<EditIcon />}
                        onClick={() => handleEditClick(rowIndex, row)}
                        aria-label="Edit"
                        size="sm"
                    />
                )}
            </Td>
        </Tr>
    );
};

// const EditableRow = memo(({ row, rowIndex, editRowIndex, editedRowData, handleSaveClick, handleEditClick, handleInputChange }) => {
//     return (
//         <Tr key={`row-${rowIndex}`}>
//             <Td textAlign="center" verticalAlign="middle">
//                 <ImageCell rowIndex={rowIndex} src={row.SpriteImage}/>
//             </Td>
//             <Td textAlign="center" verticalAlign="middle">
//                 <ImageCell rowIndex={rowIndex} src={row.AttackImage}/>
//             </Td>
//             <Td textAlign="center" verticalAlign="middle">
//                 {row.AltAttackImage ? (
//                     <ImageCell rowIndex={rowIndex} src={row.AltAttackImage}/>
//                 ) : null}
//             </Td>
//             {Object.keys(row.attributes).map(key => (
//                 <EditableCell
//                     index={key}
//                     inputValue={editedRowData ? editedRowData.attributes[key]:null}
//                     rawValue={row.attributes[key]}
//                     editRowIndex={editRowIndex}
//                     rowIndex={rowIndex}
//                     handleInputChange={handleInputChange}
//                 />
//             ))}
//             <Td textAlign="center" verticalAlign="middle">
//                 {editRowIndex === rowIndex ? (
//                     <IconButton
//                         icon={<CheckIcon />}
//                         onClick={handleSaveClick}
//                         aria-label="Save"
//                         size="sm"
//                     />
//                 ) : (
//                     <IconButton
//                         icon={<EditIcon />}
//                         onClick={() => handleEditClick(rowIndex, row)}
//                         aria-label="Edit"
//                         size="sm"
//                     />
//                 )}
//             </Td>
//         </Tr>
//     );
//   });

const generateCharacters = (charInfos, imageDatas) => {
    return charInfos.map((info, index) => {
        return {
            index,
            attributes: info,
            SpriteImage: imageDatas[info.SpriteID].url,
            AttackImage: imageDatas[info.AttackSprite + 1].url,
            AltAttackImage:
                info.AltAttackSprite < imageDatas.length
                    ? imageDatas[info.AltAttackSprite].url
                    : null,
        };
    });
};

const generateCharacter = (previousCharacter, imageDatas) => {
    return {
        ...previousCharacter,
        SpriteImage: imageDatas[previousCharacter.attributes.SpriteID].url,
        AttackImage:
            imageDatas[previousCharacter.attributes.AttackSprite + 1].url,
        AltAttackImage:
            previousCharacter.attributes.AltAttackSprite < imageDatas.length
                ? imageDatas[previousCharacter.attributes.AltAttackSprite].url
                : null,
    };
};

const EditableTable = ({ data, updateCharInfos }) => {
    const { charInfos, imageDatas } = data;
    const [tableData, setTableData] = useState(
        generateCharacters(charInfos, imageDatas)
    );
    const [editRowIndex, setEditRowIndex] = useState(null);
    const [editedRowData, setEditedRowData] = useState(null); // For temporary edits

    const handleEditClick = (index, rowData) => {
        setEditRowIndex(index);
        setEditedRowData(rowData); // Store the initial row data before editing
    };

    const handleSaveClick = () => {
        const updatedTableData = [...tableData];
        updatedTableData[editRowIndex] = generateCharacter(
            editedRowData,
            imageDatas
        ); // Apply changes from editedRowData to tableData
        setTableData(updatedTableData);
        const attributes = updatedTableData.map(row => row.attributes);
        const updatedData = { ...data, charInfos: attributes };
        updateCharInfos(updatedData);
        setEditRowIndex(null);
        setEditedRowData(null); // Reset temporary data after saving
    };

    const handleInputChange = (e, key) => {
        setEditedRowData({
            ...editedRowData,
            attributes: {
                ...editedRowData.attributes,
                [key]: Number(e.target.value),
            },
        });
    };

    return (
        <Box
            border="2px dashed"
            borderColor="gray.600"
            borderRadius="lg"
            overflow="auto"
            p={4}
        >
            <Table variant="simple" size="sm">
                <Thead>
                    <Tr>
                        <Th textAlign="center">Sprite</Th>
                        <Th textAlign="center">AtkSprite</Th>
                        <Th textAlign="center">AltAtkSprite</Th>
                        <Th textAlign="center">SpriteID</Th>
                        <Th textAlign="center">Stage</Th>
                        <Th textAlign="center">MinWeight</Th>
                        <Th textAlign="center">MaxStamina</Th>
                        <Th textAlign="center">EvoTime</Th>
                        <Th textAlign="center">SleepHour</Th>
                        <Th textAlign="center">SleepMin</Th>
                        <Th textAlign="center">WakeHour</Th>
                        <Th textAlign="center">WakeMin</Th>
                        <Th textAlign="center">HungerTimer</Th>
                        <Th textAlign="center">StrengthDecayTimer</Th>
                        <Th textAlign="center">PoopTimer</Th>
                        <Th textAlign="center">HealAmount</Th>
                        <Th textAlign="center">Attribute</Th>
                        <Th textAlign="center">Power</Th>
                        <Th textAlign="center">AttackSprite</Th>
                        <Th textAlign="center">AltAttackSprite</Th>
                        <Th textAlign="center">Edit</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {tableData.map((row, rowIndex) => (
                        <EditableRow
                            key={rowIndex}
                            row={row}
                            rowIndex={rowIndex}
                            editRowIndex={editRowIndex}
                            editedRowData={editedRowData}
                            handleSaveClick={handleSaveClick}
                            handleEditClick={handleEditClick}
                            handleInputChange={handleInputChange}
                        />
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default EditableTable;
