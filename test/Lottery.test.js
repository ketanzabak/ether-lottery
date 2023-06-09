const Lottery = artifacts.require('Lottery');

contract('Lottery', (accounts) => {
  let lottery;

  beforeEach(async () => {
    lottery = await Lottery.new();
  });

  it('should deploy the contract', async () => {
    assert.ok(lottery.address);
  });

  it('should allow players to enter', async () => {
    await lottery.enter({ from: accounts[0], value: web3.utils.toWei('0.02', 'ether') });

    const players = await lottery.getPlayers();
    assert.equal(1, players.length);
    assert.equal(accounts[0], players[0]);
  });

  it('should get the list of players', async () => {
    await lottery.enter({ from: accounts[0], value: web3.utils.toWei('0.02', 'ether') });
    await lottery.enter({ from: accounts[1], value: web3.utils.toWei('0.04', 'ether') });

    const players = await lottery.getPlayers();
    assert.equal(2, players.length);
    assert.equal(accounts[0], players[0]);
    assert.equal(accounts[1], players[1]);
  });

  it('should only allow the manager to pick the winner', async () => {
    try {
      await lottery.pickWinner({ from: accounts[1] });
      assert(false, 'Expected an error but none was thrown');
    } catch (error) {
      assert(error);
    }
  });

  it('should send money to the winner', async () => {
    const initialBalance = await web3.eth.getBalance(accounts[0]);

    await lottery.enter({ from: accounts[0], value: web3.utils.toWei('2', 'ether') });
    await lottery.enter({ from: accounts[1], value: web3.utils.toWei('2', 'ether') });
    await lottery.pickWinner({ from: accounts[0] });

    const finalBalance = await web3.eth.getBalance(accounts[0]);
    const difference = Math.abs(finalBalance - initialBalance);

    assert(difference > web3.utils.toWei('1.8', 'ether'));
  });
});
