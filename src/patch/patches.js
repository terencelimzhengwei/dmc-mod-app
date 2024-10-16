import diffs from './diffs';

const SCROLLFIXNAME = 'Clock Scroll Fix';
const SCROLLFIXDESC =
    'Apply this mod to remove the scroll animation when selecting the clock';
const CLOCKFIXNAME = '12H Clock Fix';
const CLOCKFIXDESC =
    'Apply this mod so that 12PM and 12AM do not show up as 0PM and 0AM';

const PATCHES = {
    dmc1: [
        {
            name: SCROLLFIXNAME,
            description: SCROLLFIXDESC,
            diff: diffs.dmc1.scrollfix,
            enabled: false,
        },
        {
            name: CLOCKFIXNAME,
            description: CLOCKFIXDESC,
            diff: diffs.dmc1.clockfix,
            enabled: false,
        },
    ],
    dmc2: [
        {
            name: SCROLLFIXNAME,
            description: SCROLLFIXDESC,
            diff: diffs.dmc2.scrollfix,
            enabled: false,
        },
        {
            name: CLOCKFIXNAME,
            description: CLOCKFIXDESC,
            diff: diffs.dmc2.clockfix,
            enabled: false,
        },
    ],
    dmc3: [
        {
            name: SCROLLFIXNAME,
            description: SCROLLFIXDESC,
            diff: diffs.dmc3.scrollfix,
            enabled: false,
        },
        {
            name: CLOCKFIXNAME,
            description: CLOCKFIXDESC,
            diff: diffs.dmc2.clockfix,
            enabled: false,
        },
    ],
    dmc4: [
        {
            name: SCROLLFIXNAME,
            description: SCROLLFIXDESC,
            diff: diffs.dmc4.scrollfix,
            enabled: false,
        },
        {
            name: CLOCKFIXNAME,
            description: CLOCKFIXDESC,
            diff: diffs.dmc4.clockfix,
            enabled: false,
        },
    ],
    dmc5: [
        {
            name: SCROLLFIXNAME,
            description: SCROLLFIXDESC,
            diff: diffs.dmc5.scrollfix,
            enabled: false,
        },
        {
            name: CLOCKFIXNAME,
            description: CLOCKFIXDESC,
            diff: diffs.dmc5.clockfix,
            enabled: false,
        },
    ],
    penc1: [
        {
            name: SCROLLFIXNAME,
            description: SCROLLFIXDESC,
            diff: diffs.penc1.scrollfix,
            enabled: false,
        },
        {
            name: CLOCKFIXNAME,
            description: CLOCKFIXDESC,
            diff: diffs.penc1.clockfix,
            enabled: false,
        },
    ],
    penc2: [
        {
            name: SCROLLFIXNAME,
            description: SCROLLFIXDESC,
            diff: diffs.penc2.scrollfix,
            enabled: false,
        },
        {
            name: CLOCKFIXNAME,
            description: CLOCKFIXDESC,
            diff: diffs.penc2.clockfix,
            enabled: false,
        },
    ],
    penc3: [
        {
            name: SCROLLFIXNAME,
            description: SCROLLFIXDESC,
            diff: diffs.penc3.scrollfix,
            enabled: false,
        },
        {
            name: CLOCKFIXNAME,
            description: CLOCKFIXDESC,
            diff: diffs.penc3.clockfix,
            enabled: false,
        },
    ],
    penc4: [
        {
            name: SCROLLFIXNAME,
            description: SCROLLFIXDESC,
            diff: diffs.penc4.scrollfix,
            enabled: false,
        },
        {
            name: CLOCKFIXNAME,
            description: CLOCKFIXDESC,
            diff: diffs.penc4.clockfix,
            enabled: false,
        },
    ],
    penc5: [
        {
            name: SCROLLFIXNAME,
            description: SCROLLFIXDESC,
            diff: diffs.penc5.scrollfix,
            enabled: false,
        },
        {
            name: CLOCKFIXNAME,
            description: CLOCKFIXDESC,
            diff: diffs.penc5.clockfix,
            enabled: false,
        },
    ],
    penc0: [
        {
            name: SCROLLFIXNAME,
            description: SCROLLFIXDESC,
            diff: diffs.penc0.scrollfix,
            enabled: false,
        },
        {
            name: CLOCKFIXNAME,
            description: CLOCKFIXDESC,
            diff: diffs.penc0.clockfix,
            enabled: false,
        },
    ],
};

export default PATCHES;
