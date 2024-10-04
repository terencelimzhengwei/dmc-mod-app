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
                        isActive={true ? pageActive === 0 : false}
                        onClick={() => navClick(0)}
                    >
                        Upload BIN
                    </Button>
                ) : null}
                {fileUploaded ? (
                    <Button
                        variant="ghost"
                        isActive={true ? pageActive === 1 : false}
                        onClick={() => navClick(1)}
                    >
                        Update Images
                    </Button>
                ) : null}
                {fileUploaded ? (
                    <Button
                        variant="ghost"
                        isActive={true ? pageActive === 2 : false}
                        onClick={() => navClick(2)}
                    >
                        Update Stats
                    </Button>
                ) : null}
                <Button
                    variant="ghost"
                    isActive={true ? pageActive === 3 : false}
                    onClick={() => navClick(3)}
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
