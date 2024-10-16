const diffs = {
    dmc1: {
        scrollfix: [
            {
                start: '0x9290',
                end: '0x9293',
                patched_data: '4192909a',
                data: '88da4220',
            },
            {
                start: '0x940a',
                end: '0x940d',
                patched_data: '4192909a',
                data: '88da4220',
            },
        ],
        clockfix: [
            {
                start: '0x8034',
                end: '0x803b',
                patched_data: '61f0244765f165f1',
                data: '4b48038e05984c28',
            },
            {
                start: '0x28e48',
                end: '0x28e55',
                patched_data: '4b48018e4c284048014e4c98909a',
                data: '0000000000000000000000000000',
            },
        ],
    },
    dmc2: {
        clockfix: [
            {
                start: '0x8836',
                end: '0x883d',
                patched_data: '61f0244765f165f1',
                data: '4b48038e05984c28',
            },
            {
                start: '0x28e48',
                end: '0x28e55',
                patched_data: '4b48018e4c284048014e4c98909a',
                data: '0000000000000000000000000000',
            },
        ],
        scrollfix: [
            {
                start: '0x9a92',
                end: '0x9a95',
                patched_data: '4192909a',
                data: '88da4220',
            },
            {
                start: '0x9c0c',
                end: '0x9c0f',
                patched_data: '4192909a',
                data: '88da4220',
            },
        ],
    },
    dmc3: {
        clockfix: [
            {
                start: '0x8184',
                end: '0x818b',
                patched_data: '61f0244765f165f1',
                data: '4b48038e05984c28',
            },
            {
                start: '0x28e48',
                end: '0x28e55',
                patched_data: '4b48018e4c284048014e4c98909a',
                data: '0000000000000000000000000000',
            },
        ],
        scrollfix: [
            {
                start: '0x93e0',
                end: '0x93e3',
                patched_data: '4192909a',
                data: '88da4220',
            },
            {
                start: '0x955a',
                end: '0x955d',
                patched_data: '4192909a',
                data: '88da4220',
            },
        ],
    },
    dmc4: {
        clockfix: [
            {
                start: '0x815c',
                end: '0x8163',
                patched_data: '61f0244765f165f1',
                data: '4b48038e05984c28',
            },
            {
                start: '0x28e48',
                end: '0x28e55',
                patched_data: '4b48018e4c284048014e4c98909a',
                data: '0000000000000000000000000000',
            },
        ],
        scrollfix: [
            {
                start: '0x93b8',
                end: '0x93bb',
                patched_data: '4192909a',
                data: '88da4220',
            },
            {
                start: '0x9532',
                end: '0x9535',
                patched_data: '4192909a',
                data: '88da4220',
            },
        ],
    },
    dmc5: {
        scrollfix: [
            {
                start: '0x93b8',
                end: '0x93bb',
                patched_data: '4192909a',
                data: '88da4220',
            },
            {
                start: '0x9532',
                end: '0x9535',
                patched_data: '4192909a',
                data: '88da4220',
            },
        ],
        clockfix: [
            {
                start: '0x815c',
                end: '0x8163',
                patched_data: '61f0244765f165f1',
                data: '4b48038e05984c28',
            },
            {
                start: '0x28e48',
                end: '0x28e55',
                patched_data: '4b48018e4c284048014e4c98909a',
                data: '0000000000000000000000000000',
            },
        ],
    },
    penc1: {
        clockfix: [
            {
                start: '0xf706',
                end: '0xf70d',
                patched_data: '61f0244765f165f1',
                data: '4b48038e05984c28',
            },
            {
                start: '0x28e48',
                end: '0x28e55',
                patched_data: '4b48018e4c284048014e4c98909a',
                data: '0000000000000000000000000000',
            },
        ],
        scrollfix: [
            {
                start: '0xe33e',
                end: '0xe341',
                patched_data: '4192909a',
                data: '88da4220',
            },
            {
                start: '0xe4b8',
                end: '0xe4bb',
                patched_data: '4192909a',
                data: '88da4220',
            },
        ],
    },
    penc2: {
        scrollfix: [
            {
                start: '0xe2fc',
                end: '0xe2ff',
                patched_data: '4192909a',
                data: '88da4220',
            },
            {
                start: '0xe476',
                end: '0xe479',
                patched_data: '4192909a',
                data: '88da4220',
            },
        ],
        clockfix: [
            {
                start: '0xf6c4',
                end: '0xf6cb',
                patched_data: '61f0244765f165f1',
                data: '4b48038e05984c28',
            },
            {
                start: '0x28e48',
                end: '0x28e55',
                patched_data: '4b48018e4c284048014e4c98909a',
                data: '0000000000000000000000000000',
            },
        ],
    },
    penc3: {
        scrollfix: [
            {
                start: '0xe302',
                end: '0xe305',
                patched_data: '4192909a',
                data: '88da4220',
            },
            {
                start: '0xe47c',
                end: '0xe47f',
                patched_data: '4192909a',
                data: '88da4220',
            },
        ],
        clockfix: [
            {
                start: '0xf6ca',
                end: '0xf6d1',
                patched_data: '61f0244765f165f1',
                data: '4b48038e05984c28',
            },
            {
                start: '0x28e48',
                end: '0x28e55',
                patched_data: '4b48018e4c284048014e4c98909a',
                data: '0000000000000000000000000000',
            },
        ],
    },
    penc4: {
        scrollfix: [
            {
                start: '0xe7ae',
                end: '0xe7b1',
                patched_data: '4192909a',
                data: '88da4220',
            },
            {
                start: '0xe928',
                end: '0xe92b',
                patched_data: '4192909a',
                data: '88da4220',
            },
        ],
        clockfix: [
            {
                start: '0xfb76',
                end: '0xfb7d',
                patched_data: '61f0244765f165f1',
                data: '4b48038e05984c28',
            },
            {
                start: '0x28e48',
                end: '0x28e55',
                patched_data: '4b48018e4c284048014e4c98909a',
                data: '0000000000000000000000000000',
            },
        ],
    },
    penc5: {
        scrollfix: [
            {
                start: '0xe7ba',
                end: '0xe7bd',
                patched_data: '4192909a',
                data: '88da4220',
            },
            {
                start: '0xe934',
                end: '0xe937',
                patched_data: '4192909a',
                data: '88da4220',
            },
        ],
        clockfix: [
            {
                start: '0xfb82',
                end: '0xfb89',
                patched_data: '61f0244765f165f1',
                data: '4b48038e05984c28',
            },
            {
                start: '0x28e48',
                end: '0x28e55',
                patched_data: '4b48018e4c284048014e4c98909a',
                data: '0000000000000000000000000000',
            },
        ],
    },
    penc0: {
        clockfix: [
            {
                start: '0xfc58',
                end: '0xfc5f',
                patched_data: '61f0244765f165f1',
                data: '4b48038e05984c28',
            },
            {
                start: '0x28e48',
                end: '0x28e55',
                patched_data: '4b48018e4c284048014e4c98909a',
                data: '0000000000000000000000000000',
            },
        ],
        scrollfix: [
            {
                start: '0xdde2',
                end: '0xdde5',
                patched_data: '4192909a',
                data: '88da4220',
            },
            {
                start: '0xdf5c',
                end: '0xdf5f',
                patched_data: '4192909a',
                data: '88da4220',
            },
        ],
    },
};

export default diffs;
