import dmc1_clockfix from './dmc1_clockfix.bsdiff';
import dmc2_clockfix from './dmc2_clockfix.bsdiff';
import dmc3_clockfix from './dmc3_clockfix.bsdiff';
import dmc4_clockfix from './dmc4_clockfix.bsdiff';
import dmc5_clockfix from './dmc5_clockfix.bsdiff';
import penc1_clockfix from './penc1_clockfix.bsdiff';
import penc2_clockfix from './penc2_clockfix.bsdiff';
import penc3_clockfix from './penc3_clockfix.bsdiff';
import dmc1_scrollfix from './dmc1_scrollfix.bsdiff';
import dmc2_scrollfix from './dmc2_scrollfix.bsdiff';
import dmc3_scrollfix from './dmc3_scrollfix.bsdiff';
import dmc4_scrollfix from './dmc4_scrollfix.bsdiff';
import dmc5_scrollfix from './dmc5_scrollfix.bsdiff';
import penc1_scrollfix from './penc1_scrollfix.bsdiff';
import penc2_scrollfix from './penc2_scrollfix.bsdiff';
import penc3_scrollfix from './penc3_scrollfix.bsdiff';

const SCROLLFIXNAME = 'Clock Scroll Fix';
const SCROLLFIXDESC =
    'Apply this mod to remove the scroll animation when selecting the clock';
const CLOCKFIXNAME = '12H Clock Fix'
const CLOCKFIXDESC = 'Apply this mod so that 12PM and 12AM do not show up as 0PM and 0AM'

const patches = {
    dmc1: [
        {
            name: SCROLLFIXNAME,
            description: SCROLLFIXDESC,
            file: dmc1_scrollfix,
            enabled: false,
        },
        {
            name: CLOCKFIXNAME,
            description:
            CLOCKFIXDESC,
            file: dmc1_clockfix,
            enabled: false,
        },
    ],
    dmc2: [
        {
            name: SCROLLFIXNAME,
            description: SCROLLFIXDESC,
            file: dmc2_scrollfix,
            enabled: false,
        },
        {
            name: CLOCKFIXNAME,
            description:
            CLOCKFIXDESC,
            file: dmc2_clockfix,
            enabled: false,
        },
    ],
    dmc3: [
        {
            name: SCROLLFIXNAME,
            description: SCROLLFIXDESC,
            file: dmc3_scrollfix,
            enabled: false,
        },
        {
            name: CLOCKFIXNAME,
            description:
            CLOCKFIXDESC,
            file: dmc3_clockfix,
            enabled: false,
        },
    ],
    dmc4: [
        {
            name: SCROLLFIXNAME,
            description: SCROLLFIXDESC,
            file: dmc4_scrollfix,
            enabled: false,
        },
        {
            name: CLOCKFIXNAME,
            description:
            CLOCKFIXDESC,
            file: dmc4_clockfix,
            enabled: false,
        },
    ],
    dmc5: [
        {
            name: SCROLLFIXNAME,
            description: SCROLLFIXDESC,
            file: dmc5_scrollfix,
            enabled: false,
        },
        {
            name: CLOCKFIXNAME,
            description:
            CLOCKFIXDESC,
            file: dmc5_clockfix,
            enabled: false,
        },
    ],
    penc1: [
        {
            name: SCROLLFIXNAME,
            description: SCROLLFIXDESC,
            file: penc1_scrollfix,
            enabled: false,
        },
        {
            name: CLOCKFIXNAME,
            description:
            CLOCKFIXDESC,
            file: penc1_clockfix,
            enabled: false,
        },
    ],
    penc2: [
        {
            name: SCROLLFIXNAME,
            description: SCROLLFIXDESC,
            file: penc2_scrollfix,
            enabled: false,
        },
        {
            name: CLOCKFIXNAME,
            description:
            CLOCKFIXDESC,
            file: penc2_clockfix,
            enabled: false,
        },
    ],
    penc3: [
        {
            name: SCROLLFIXNAME,
            description: SCROLLFIXDESC,
            file: penc3_scrollfix,
            enabled: false,
        },
        {
            name: CLOCKFIXNAME,
            description:
            CLOCKFIXDESC,
            file: penc3_clockfix,
            enabled: false,
        },
    ],
};

export default patches;
