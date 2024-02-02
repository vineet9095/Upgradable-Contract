const { ethers, upgrades } = require('hardhat')

const UPGRADEABLE_PROXY = '0x2C8D51B47bdfbd06A255E6d8726C18bF7D0f68f0'

async function main() {
    const V2Contract = await ethers.getContractFactory('V2')
    console.log('Upgrading V1Contract...')
    let upgrade = await upgrades.upgradeProxy(UPGRADEABLE_PROXY, V2Contract);

    // console.log('upgrade', upgrade);
    console.log('V1 Upgraded to V2');

    const address = upgrade.target;
    console.log('V2 Contract Deployed To:', address);
}

main().catch(error => {
    console.error(error)
    process.exitCode = 1
})
