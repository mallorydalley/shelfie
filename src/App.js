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
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  componentDidMount(){
    axios.get(`/api/inventory`)
      .then(response => {
        this.setState({inventory: response.data})
      })
      .catch(error => console.log(error))
  }
  createProduct = (name, price, image_url) => {
    axios.post(`/api/product`, {name}, {price}, {image_url})
      .then(response => {
          this.setState({inventory: response.data})
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
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Dashboard 
            getProducts={this.componentDidMount}
            inventory={this.state.inventory}
            delete={this.deleteProduct}
          />
            
          
          <Form 
            getProducts={this.componentDidMount}
            createProduct={this.createProduct}
            selectedProduct={this.state.selected}
          />
        </div>
      </HashRouter>
    );
  }
}

export default App;
