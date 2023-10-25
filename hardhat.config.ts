import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import * as dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, './.env') });

const config: HardhatUserConfig = {
  solidity: '0.8.19',
  networks: {
    hardhat: {
      forking: {
        url: process.env.NODE_URL ? process.env.NODE_URL : '',
        blockNumber: 26674016
      },
      // forking: {
      //   url: HHconfig.HARDHAT_FORK_URL,
      //   blockNumber: HHconfig.HARDHAT_FORK_BLOCK
      //     ? parseInt(HHconfig.HARDHAT_FORK_BLOCK)
      //     : 0,
      // },
      gas: 30000000,
      chainId: 1337
    }
  }
};

export default config;
