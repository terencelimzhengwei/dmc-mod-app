import React from 'react';
import { Flex, Spacer, Button, ButtonGroup } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Nav = props => {
    const { pageActive, fileUploaded, navClick, restartClick, buildClick } =
        props;
    return (
        <Flex p={2}>
            <ButtonGroup variant="outline" spacing="2">
                {!fileUploaded ? (
                    <Button
                        variant="ghost"
                        isActive={pageActive === 0}
                        onClick={() => navClick(0)}
                    >
                        Upload BIN
                    </Button>
                ) : null}
                {fileUploaded ? (
                    <Button
                        variant="ghost"
                        isActive={pageActive === 1}
                        onClick={() => navClick(1)}
                    >
                        Update Images
                    </Button>
                ) : null}
                {fileUploaded ? (
                    <Button
                        variant="ghost"
                        isActive={pageActive === 2}
                        onClick={() => navClick(2)}
                    >
                        Update Stats
                    </Button>
                ) : null}
                {fileUploaded ? (
                    <Button
                        variant="ghost"
                        isActive={pageActive === 3}
                        onClick={() => navClick(3)}
                    >
                        Update Quest Mode
                    </Button>
                ) : null}
                {fileUploaded ? (
                    <Button
                        variant="ghost"
                        isActive={pageActive === 4}
                        onClick={() => navClick(4)}
                    >
                        Patches
                    </Button>
                ) : null}
                <Button
                    variant="ghost"
                    isActive={pageActive === 5}
                    onClick={() => navClick(5)}
                >
                    About
                </Button>
            </ButtonGroup>
            <Spacer />
            <ButtonGroup variant="outline" spacing="2">
                {fileUploaded ? (
                    <Button colorScheme="green" onClick={buildClick}>
                        Build
                    </Button>
                ) : null}
                {fileUploaded ? (
                    <Button colorScheme="red" onClick={restartClick}>
                        Restart
                    </Button>
                ) : null}
                <ColorModeSwitcher />
            </ButtonGroup>
        </Flex>
    );
};

export default Nav;
