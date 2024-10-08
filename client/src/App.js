import React, { Component } from 'react';
import './App.css';
import web3 from './web3-provider';
import lottery from './lottery'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = { manager : '',
                  players : [],
                  balance : '',
                  value : '',
                  message : ''
                }; 
  }

  async componentDidMount(){
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({manager, players, balance});
  }
  
  onSubmit = async (event) =>{
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({message : 'Starting lottery transaction !!!'});
    await lottery.methods.enter().send({
      from: accounts[0],
      value : web3.utils.toWei(this.state.value, 'ether')
    });

    this.setState({message : 'Lotter transaction completed !!!'});
  };

  pickWinner = async() =>{
    const accounts = await web3.eth.getAccounts();

    this.setState({message : 'Picking lottery winner !!!'});
    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });

    this.setState({message : 'Winner has been picked !!!'});
  }

  render() {

    return (
      <div>
        <h2>Lotter Contract </h2>
        <p>This contract is managed by {this.state.manager}<br></br>
            Total players : {this.state.players.length}.
            Total Balance : {web3.utils.fromWei(this.state.balance, 'ether')} ethers!
        </p>

        <hr/>
        <form onSubmit={this.onSubmit}>
          <h4> Wanna try your luck ? </h4>
          <div>
            <label>Amount of ether to enter</label>
            <input
              value = {this.state.value}
              onChange = {event => this.setState({value : event.target.value})}
            />
          </div>
          <button>Enter</button>
        </form>

        <hr/>
          <h4> Wanna pick a winner ?</h4>
          <button onClick={this.pickWinner}>Pick Winner</button>
        <hr/>

        <h1>{this.state.message}</h1>
      </div>
    );
  }


}

export default App;
