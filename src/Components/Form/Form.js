import React from 'react';
import axios from 'axios'
import {Link, Switch, Route} from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: '',
            image_url: ''
        }
    }
    handleImage = (val) => {
        this.setState({image_url: val})
    }
    handleName = (val) => {
        this.setState({ name: val })
    }
    handlePrice = (val) => {
        this.setState({ price: val })
    }
    cancelChange = () => {
        this.setState({
            name: '',
            price: '',
            image_url: ''
        })
    }
    createProduct = () => {
        const { image_url, name, price} = this.state
        axios.post(`/api/product`, { name, price, image_url })
            .then(response => {
                this.cancelChange();            
            
            })
            .catch(error => console.log(error))
    }
    editProduct = (product_id, name, price, image_url) => {
        // const { image_url, name, price} = this.state
        axios.put(`/api/product/${product_id}`, { name, price, image_url})
        .then(response => {
            this.setState({
                // name: this.state.soloProduct.name,
                // price: this.state.soloProduct.price,
                // image_url: this.state.soloProduct.image_url
            })
            // this.cancelChange()
        })

    }
    componentDidMount(){
    axios.get(`/api/product/${this.props.match.params.product_id}`)
      .then(response => {
        console.log(response)
        this.setState({ 
            name: response.data[0].name,
            price: response.data[0].price,
            image_url: response.data[0].image_url
        })
    })
      .catch(error => console.log(error))
  }
    // componentDidUpdate(prevProps, prevState){
    //     if(prevProps.selected.product_id === this.props.selected.product_id){
    //         this.setState({name:this.props.selected.name, price: this.props.selected.price, image_url: this.props.selected.price_url})
    // console.log(prevProps, prevState)
    //     }
    // }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.match.params.product_id !== this.props.match.params.product_id){
            this.setState({ name: '', price: '', image_url: ''})
        }
    }

    render() {
        // console.log(this.state.image_url, this.state.name, this.state.price)
        console.log(this.props.match.params)
        // const {createProduct, inventory} = this.props
        const {name, price, image_url, soloProduct} = this.state
        return (
            <div className='form'>
                <div className='form-img'>
                    <img src={image_url} alt={name}/>
                </div>
                <div className='input-container'>
                    <p>Image URL: </p>
                    <input 
                        value={image_url}
                        onChange={e => this.handleImage(e.target.value)}/>
                </div>
                <div className='input-container'>
                    <p>Name: </p>
                    <input 
                        value={name}
                        onChange={e => this.handleName(e.target.value)}/>
                </div>
                <div className='input-container'>
                    <p>Price:</p>
                    <input 
                        value={price}
                        onChange={e => this.handlePrice(e.target.value)}/>
                </div>
                <div className='buttons'>
                    <button className='form-buttons' onClick={this.cancelChange}>Cancel</button>
                    
                    <Switch>
                        <Route 
                            path='/add'
                            render={() => (
                                <Link to='/'>
                                    <button className='form-buttons' onClick={this.createProduct}>Add to Inventory</button>
                                </Link>
                            )}
                        />
                        <Route
                            path='/edit/:id'
                            render={() => (
                                <Link to='/'>
                                    <button className='form-buttons' onClick={() => {
                                        this.editProduct(this.props.match.params.product_id, name, price, image_url)
                                    }}>Save Changes</button>
                                </Link> 
                            )}
                        />
                            
                    
                        

            
                            
                    
                </Switch>
                    
                </div>
            </div>
        )
    }
}

export default Form