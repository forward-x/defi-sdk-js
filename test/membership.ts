// import { time, loadFixture } from '@nomicfoundation/hardhat-network-helpers';
// import { anyValue } from '@nomicfoundation/hardhat-chai-matchers/withArgs';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { FWXProvider, ProviderType } from '../src/FWXProvider';
import { IMembership__factory } from '../src/generated';
import { ADDRESS } from '../src/constants';

describe('Membership', async function() {
  async function getClient() {
    const testPrivateKey = '0xef46d0893d905a3c0059a2ba5a16bc8d4dd5a850b48b776b12a2498d00ff7c3e';
    const client = new FWXProvider(
      ethers.provider.connection.url,
      ProviderType.HTTP,
      ethers.provider
    );
    await client.setSigner(testPrivateKey);
    ethers.provider.send('hardhat_setBalance', [
      client.signer.address,
      '0xffffffffffffffffffffffffffffff'
    ]);
    return client;
  }
  it('mint', async function() {
    const membership = IMembership__factory.connect(ADDRESS.AVAX.MEMBERSHIP, ethers.provider);
    const supply = (await membership.totalSupply()).toNumber();
    const client = await getClient();
    const result = await client.mint(0);
    expect(supply + 1 == result.tokenId);
  });
  it('getRank', async function() {
    const client = await getClient();
    const tokenId = (await client.mint(0)).tokenId;
    const result = await client.getRank(tokenId);
    expect(result.rank == 0);
  });
  it('getRank with specify stake pool', async function() {
    const client = await getClient();
    const tokenId = (await client.mint(0)).tokenId;
    const result = await client.getRank(tokenId, ADDRESS.AVAX.STAKEPOOL);
    expect(result.rank == 0);
  });
  it('ownerOf', async function() {
    const client = await getClient();
    const tokenId = (await client.mint(0)).tokenId;
    const result = await client.ownerOf(tokenId);
    expect(result.owner == client.signer.address);
  });
  it('usableToken', async function() {
    const client = await getClient();
    const tokenId = (await client.mint(0)).tokenId;
    const result = await client.usableToken(client.signer.address, tokenId);
    expect(tokenId == result.usableTokenId);
  });
});
