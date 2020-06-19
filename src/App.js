import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     name: ""
  //   }
  // }
  state = {
    products: []
  }
  componentDidMount() {
    // fetch("http://localhost:3000/").then(resp => {
    //   return resp.json()
    // }).then(data => {
    //   console.log(data)
    // })

    axios.get("https://abc-api.herokuapp.com/").then(res => {
      this.setState({
        products: res.data
      })
      console.log(res.data);
    })
  }
  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <ul>
          {
            products.map((item, index) => {
              return (<li>
                <h2>{item.name}</h2>
                <p>{item.desc}</p>
              </li>)
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
