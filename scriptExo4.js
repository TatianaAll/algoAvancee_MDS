// NE PAS TOUCHER
const planets = ['VGI_77_9_67', 'ZFX_97_2_58', 'TEQ_40_2_20', 'NRJ_69_6_67', 'GTV_59_10_52', 'YGP_50_5_34', 'RHA_14_10_42', 'QBW_68_7_27', 'QYR_26_4_54', 'BOP_35_6_29', 'ICT_43_7_93', 'LDP_65_2_90', 'ICH_80_4_42', 'PNE_71_3_52', 'LVN_23_10_48', 'LNF_31_4_80'];
const safetyLevelMin = 0;
const safetyLevelMax = 6;
// NE PAS TOUCHER

function safetyLevelCalcul (temp, size, dist) {
    return ((temp*size)/dist);
}

let planetNotSafe = [];
planets.forEach(planet => {
    const infoPlanet = planet.split("_");
    const calculSafety = safetyLevelCalcul(infoPlanet[1], infoPlanet[2], infoPlanet[3]);
    if (calculSafety >= safetyLevelMax || calculSafety <= safetyLevelMin) {
        planetNotSafe.push(infoPlanet[0]);
    }
});


if (planetNotSafe.length > 1){
    console.log(planetNotSafe.join("_"))
} else {
    console.log(`ALLGOOD`);
}
