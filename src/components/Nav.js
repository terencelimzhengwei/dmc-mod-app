import React, { useState } from 'react';
import {
    Flex,
    Spacer,
    Button,
    ButtonGroup,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useBreakpointValue
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { HamburgerIcon } from '@chakra-ui/icons';

const Nav = props => {
    const { pageActive, fileUploaded, navClick, restartClick, buildClick } = props;
    const [menuOpen, setMenuOpen] = useState(false);

    // Determine whether to display buttons or a hamburger menu based on screen size
    const isMobile = useBreakpointValue({ base: true, md: false});

    const handleMenuClick = (index) => {
        navClick(index);
        setMenuOpen(false);  // Close menu after a click
    };

    return (
        <Flex p={2} align="center">
            {isMobile ? (
                <Menu isOpen={menuOpen}>
                    <MenuButton
                        as={IconButton}
                        icon={<HamburgerIcon />}
                        variant="outline"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                    <MenuList>
                        {!fileUploaded && (
                            <MenuItem onClick={() => handleMenuClick(0)}>
                                Upload BIN
                            </MenuItem>
                        )}
                        {fileUploaded && (
                            <>
                                <MenuItem onClick={() => handleMenuClick(1)}>
                                    Update Images
                                </MenuItem>
                                <MenuItem onClick={() => handleMenuClick(2)}>
                                    Update Stats
                                </MenuItem>
                                <MenuItem onClick={() => handleMenuClick(3)}>
                                    Update Quest Mode
                                </MenuItem>
                            </>
                        )}
                        <MenuItem onClick={() => handleMenuClick(4)}>
                            About
                        </MenuItem>
                    </MenuList>
                </Menu>
            ) : (
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
                        <>
                            <Button
                                variant="ghost"
                                isActive={pageActive === 1}
                                onClick={() => navClick(1)}
                            >
                                Update Images
                            </Button>
                            <Button
                                variant="ghost"
                                isActive={pageActive === 2}
                                onClick={() => navClick(2)}
                            >
                                Update Stats
                            </Button>
                            <Button
                                variant="ghost"
                                isActive={pageActive === 3}
                                onClick={() => navClick(3)}
                            >
                                Update Quest Mode
                            </Button>
                        </>
                    ) : null}
                    <Button
                        variant="ghost"
                        isActive={pageActive === 4}
                        onClick={() => navClick(4)}
                    >
                        About
                    </Button>
                </ButtonGroup>
            )}
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