require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan random still huge hope arena equal genuine'; 
let testAccounts = [
"0xe640ca20420424521b338b513005120ba84d7d91fa21d2a684898290b93ecdc0",
"0xcb3434e7c9a8ba5cc5828e434aead25bb2463cdf9dba9237d78119a28327bae7",
"0xb34a5e4373edbfed05533b9d083e5902a543fbff88d479497af55e7d751b0d12",
"0xa85ac742aaa6ebd35e4fb8bf1f08e71f88b77000cd7e42046ec6a712530b6015",
"0xc9d6d853a721e024f53f1129c19da63c093823f5af2545561dcc97b8b76fcc55",
"0xee213bb40e95c7644f30d56ef150a89421022bf45588b11f58c448e378b3e1e0",
"0x369dd8133503cc4dc2e408c1820a867c7dc0f72cdb711bd7bd7d50f40712c64e",
"0xa7e34d7b56e4d7d46e605a6b2c74c60a7a8904ae30c871c4d478d5dc9a38220b",
"0xa316e94949749a507ee1faad5ed5d18c0efa10491b5f49cb8c7a14d4cc1b8240",
"0x9c543b6dcbec53f53669ffbfd70e0fa82774bbcf7cda4df25625f46fb54eac84"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


