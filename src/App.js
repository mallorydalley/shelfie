import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import Dashboard from './Components/Dashboard/Dashboard'
import axios from 'axios'
import {HashRouter} from 'react-router-dom'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      inventory: [],
      selected: null
  
    }
    this.getInventory = this.getInventory.bind(this)
  }
  componentDidMount(){
    this.getInventory()
  }
  getInventory(){
    axios.get(`/api/inventory`)
      .then(response => {
        this.setState({ inventory: response.data })
      })
      .catch(error => console.log(error))
  }
  
  deleteProduct = (id) => {
    axios.delete(`/api/product/${id}`)
    .then(response => {
      this.setState({inventory: response.data})
    })
    .catch(error => console.log(error))
  }
  handleSelected = () => {
    this.setState({selected: this.data.product_id})
  }
  render(){
    console.log(this.state.inventory)
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <div className='dashAndForm'>
            <Dashboard 
              getInventory={this.getInventory}
              inventory={this.state.inventory}
              delete={this.deleteProduct}
              selected={this.state.selected}
            />
              
            {/* {this.state.inventory} */}
            <Form 
              getInventory={this.getInventory}
              selected={this.state.selected}
            />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
