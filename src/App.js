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
      selected: []
  
    }
    this.getProducts = this.getProducts.bind(this)
  }
  componentDidMount(){
    this.getProducts()
  }
  getProducts(){
    axios.get(`/api/inventory`)
      .then(response => {
        console.log(response)
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
  render(){
    console.log(this.state.inventory)
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Dashboard 
            getProducts={this.getProducts}
            inventory={this.state.inventory}
            delete={this.deleteProduct}
          />
            
          {/* {this.state.inventory} */}
          <Form 
            getProducts={this.getProducts}
            
            selectedProduct={this.state.selected}
          />
        </div>
      </HashRouter>
    );
  }
}

export default App;
