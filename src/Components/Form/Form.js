import React from 'react';
import axios from 'axios'

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
            .then(response => { this.props.getProducts() 
            console.log(response)
            })
            .catch(error => console.log(error))
    }
    componentDidUpdate(){

    }
    render() {
        console.log(this.state.image_url, this.state.name, this.state.price)
        // console.log(this.props)
        // const {createProduct, inventory} = this.props
        const {name, price, image_url} = this.state
        return (
            <div className='form'>
                <input 
                    value={image_url}
                    onChange={e => this.handleImage(e.target.value)}/>
                <input 
                    value={name}
                    onChange={e => this.handleName(e.target.value)}/>
                <input 
                    value={price}
                    onChange={e => this.handlePrice(e.target.value)}/>
                
                <button onClick={this.cancelChange}>Cancel</button>
                
                <button onClick={() => this.createProduct()}>Add</button>
            </div>
        )
    }
}

export default Form