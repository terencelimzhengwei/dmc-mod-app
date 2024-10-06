import { Text, Heading, Grid, GridItem, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const About = () => {
    return (
        <Grid templateColumns="repeat(2, 1fr)" gap={1}>
            <GridItem
                borderWidth="2px"
                borderRadius="lg"
                borderStyle="dashed"
                borderColor="gray.500"
                textAlign="left"
                p={5}
            >
                <Heading>Instructions</Heading>
                <Text fontWeight={200}>
                    1. Reference the DMC Modding Tutorial guide to extract the
                    firmware bin file from your vpet
                </Text>
                <Text fontWeight={200}>
                    2. Upload the bin file to this app. If it is invalid, try
                    step 1 again as the extracted file may have been corrupt.
                </Text>
                <Text fontWeight={200}>
                    3. If the upload is valid, you can proceed to update the
                    sprites/stats of the firmware.
                </Text>
                <Text fontWeight={200}>
                    4. Once you are done with the edits, click build to download
                    the updated bin file.
                </Text>
                <Text fontWeight={200}>
                    5. Reference the modding tutorial again to write the bin
                    file back onto the device
                </Text>
                <Text fontWeight={200}>
                    6. Turn on your device to test whether the changes have been
                    made
                </Text>
            </GridItem>
            <GridItem
                borderWidth="2px"
                borderRadius="lg"
                borderStyle="dashed"
                borderColor="gray.500"
                textAlign="left"
                p={5}
            >
                <Heading>Features coming soon</Heading>
                <Text fontWeight={200}>
                    1. Improve re-rendering performance so that app feels less laggy
                </Text>
                <Text fontWeight={200}>
                    2. Add update quest mode feature
                </Text>
                <Text fontWeight={200}>
                    3. Improve error handling so that user does not input incorrect values
                </Text>
                <Text fontWeight={200}>
                    4. Add Sprite Library so that user can easily replace Sprites
                </Text>
                <Text fontWeight={200}>
                    5. Support for custom offsets / image sizes
                </Text>
                <Text fontWeight={200}>
                    6. Add support for PenC wave 2
                </Text>
            </GridItem>
            <GridItem
                borderWidth="2px"
                borderRadius="lg"
                borderStyle="dashed"
                borderColor="gray.500"
                textAlign="left"
                p={5}
            >
                <Heading>Resources & References</Heading>
                <Text fontWeight={200}>
                    1.
                    <Link
                        href="https://docs.google.com/document/d/1CYo0l2pmq4tROpeMIVieCdguyxwkBehPbKnlhIKrwUY/edit#heading=h.5mnkxmcz9uix"
                        isExternal
                    >
                        DMC Modding Tutorial <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
                <Text fontWeight={200}>
                    2.
                    <Link
                        href="https://github.com/GMMan/DmcHashCheck"
                        isExternal
                    >
                        DMC Hash Check Repo by cyanic{' '}
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
                <Text fontWeight={200}>
                    3.
                    <Link
                        fontWeight={200}
                        href="https://github.com/GMMan/DigimonColorSpriteTool"
                        isExternal
                    >
                        DMC Sprite Tool by cyanic <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
                <Text fontWeight={200}>
                    4.
                    <Link
                        fontWeight={200}
                        href="https://discord.gg/digimon"
                        isExternal
                    >
                        Digitama Hatchery Discord <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
                <Text fontWeight={200}>
                    5.
                    <Link
                        fontWeight={200}
                        href=" https://github.com/terencelimzhengwei/dmc-mod-app"
                        isExternal
                    >
                        Github Repository for this app <ExternalLinkIcon mx="2px" />
                    </Link>
                </Text>
            </GridItem>
            <GridItem
                borderWidth="2px"
                borderRadius="lg"
                borderStyle="dashed"
                borderColor="gray.500"
                textAlign="left"
                p={5}
            >
                <Heading>Credits</Heading>
                <Text fontWeight={200}>
                    1. Cyanic for the code that was referenced for this app
                </Text>
                <Text fontWeight={200}>
                    2. Humulos for providing a platform for vpet discussion
                </Text>
            </GridItem>
        </Grid>
    );
};

export default About;
