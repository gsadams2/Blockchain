import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import axios from 'axios'



class App extends Component {
  state = {
    UserID: "",
    chain: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/chain`)
      .then(res => {
        const chain = res.data;
        this.setState({ chain });
      })
  }




handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

handleSubmit = event => {
  event.preventDefault()
  // const user = {
  //   UserID: this.state.UserID
  // }
  axios.post(`http://localhost:5000/userid`, {UserID: this.state.UserID} )
  .then(res => {
    console.log(res);
    console.log(res.data);
  })
}

hello = [{
  'message': 'hello',
  "index": 1,
  "okay": 3
}, 
{
  'message': 'george',
  "index": 6,
  "okay": 46
}, 

]



render() {
  console.log(this.state.chain.chain)
  console.log(this.hello[1])

  return (
    <div className="App">
      <form onSubmit={this.handleSubmit}>
        <label>
          UserID:
          <input type="text" name="UserID" value={this.state.UserID} onChange={this.handleChange} h />
        </label>
        {/* <input type="submit" value="submit" /> */}
      </form>

      {/* <div>
    {this.hello.map(data => 
      <p>{data.index}</p>
    )}
    </div> */}

    {/* <div>
    {this.state.chain.chain.map(data => 
      <p>{data.index}</p>
    )}
    </div>    */}



    </div>
  );
}
}



export default App;
