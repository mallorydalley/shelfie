import React from 'react';
import './App.css';
// import Header from './Components/Header/Header'
// import Form from './Components/Form/Form'
// import Dashboard from './Components/Dashboard/Dashboard'
// import axios from 'axios'
import {HashRouter, Link} from 'react-router-dom'
import routes from './routes'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      // inventory: [],
      // selected: null
  
    }
    // this.getInventory = this.getInventory.bind(this)
  }
  
  // getInventory(){
  //   axios.get(`/api/inventory`)
  //     .then(response => {
  //       this.setState({ inventory: response.data })
  //       // console.log(response.data[0])
  //     })
  //     .catch(error => console.log(error))
  // }
  
  // deleteProduct = (id) => {
  //   axios.delete(`/api/product/${id}`)
  //   .then(response => {
  //     this.setState({inventory: response.data})
  //   })
  //   .catch(error => console.log(error))
  // }
  
  // selectProduct = (product) => {
  //   this.setState({selected: product})
  // }
  render(){
    // console.log(this.props.product)
    // console.log(this.state.inventory)
    
    return (
      <HashRouter>
        <div>
          <nav className='nav'>
            <div>SHELFIE</div>
            <div className='link-wrap'>
              <Link to='/'>
                <button className='links'>Dashboard</button>  
                </Link>
              <Link to='/add'>
                <button className='links'>Add Inventory</button> 
              </Link>
            </div>
          </nav>
          {routes}
        </div>
        {/* <div className="App">
          <Header />
          <div className='dashAndForm'>
            <Dashboard 
              getInventory={this.getInventory}
              inventory={this.state.inventory}
              delete={this.deleteProduct}
              selected={this.state.selected}
              selectProduct={this.selectProduct}
            />
            
            <Form 
              getInventory={this.getInventory}
              selected={this.state.selected}
            />
          </div>
          
        </div> */}
      </HashRouter>
    );
  }
}

export default App;
