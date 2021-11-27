require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food charge razor right proud hard light army general'; 
let testAccounts = [
"0x86c0fd730f7cc5714cc2aed30e2c0fd254101a899626e17679a8582f65d02a95",
"0xd08b3bc2fd5c611917680b309d7eefacc7a428cc2256ee6353419174ddc53219",
"0xabac248def85c722c7647c27fc8193edd91edefb108f93c44ea9c73e86ae5c01",
"0xb23c8ad82b71edc7ac80f5ba2dda6059b8b51cb62a15b606548ab4c77add430f",
"0x60c33384ebb72ffa0f39169d5617bf7bc911ae6dd116c5b074eacaca33860323",
"0x9850d7640e5bcd2cd0e6716cf877efdd9e9e567d5a03e6ace43b2043648b9177",
"0xfb76c0cc52e1b5b3d284b8222870f46a26694f560941a447792f8736d5b07c19",
"0xa12f2a15cae65adab5486ad7d3ca53927c5b23108ba4a997e14377cf1e283120",
"0x50d2636fca0931cade0b1d560d42db52748e6ce2f1d5912a7c844aeb51e44965",
"0xe11f5fec41522076eed39e1f25b5c22e0faa51a2a487082bab2faae9c902ec0e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

