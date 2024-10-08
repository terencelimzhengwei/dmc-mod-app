import dmc1_clockfix from './dmc1_clockfix.bsdiff'
import dmc2_clockfix from './dmc2_clockfix.bsdiff'
import dmc3_clockfix from './dmc3_clockfix.bsdiff'
import dmc4_clockfix from './dmc4_clockfix.bsdiff'
import dmc5_clockfix from './dmc5_clockfix.bsdiff'
import penc1_clockfix from './penc1_clockfix.bsdiff'
import penc2_clockfix from './penc2_clockfix.bsdiff'
import penc3_clockfix from './penc3_clockfix.bsdiff'
import dmc1_scrollfix from './dmc1_scrollfix.bsdiff'
import dmc2_scrollfix from './dmc2_scrollfix.bsdiff'
import dmc3_scrollfix from './dmc3_scrollfix.bsdiff'
import dmc4_scrollfix from './dmc4_scrollfix.bsdiff'
import dmc5_scrollfix from './dmc5_scrollfix.bsdiff'
import penc1_scrollfix from './penc1_scrollfix.bsdiff'
import penc2_scrollfix from './penc2_scrollfix.bsdiff'
import penc3_scrollfix from './penc3_scrollfix.bsdiff'

const patches = {
    dmc1:{scrollfix:dmc1_scrollfix,clockfix:dmc1_clockfix},
    dmc2_clockfix:{scrollfix:dmc2_scrollfix,clockfix:dmc2_clockfix},
    dmc3:{scrollfix:dmc3_scrollfix,clockfix:dmc3_clockfix},
    dmc4:{scrollfix:dmc4_scrollfix,clockfix:dmc4_clockfix},
    dmc5:{scrollfix:dmc5_scrollfix,clockfix:dmc5_clockfix},
    penc1:{scrollfix:penc1_scrollfix,clockfix:penc1_clockfix},
    penc2_clockfix:{scrollfix:penc2_scrollfix,clockfix:penc2_clockfix},
    penc3:{scrollfix:penc3_scrollfix,clockfix:penc3_clockfix},
}

export default patches
