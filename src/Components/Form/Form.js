import React from 'react';
import axios from 'axios'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: '',
            image_url: '',
            // editingId: this.props.selected.product_id,
            soloProduct: this.props.product_id
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
                this.props.getInventory()
                this.cancelChange()
            
            })
            .catch(error => console.log(error))
    }
    editProduct = (product_id, name, price, image_url) => {
        // const { image_url, name, price} = this.state
        axios.put(`/api/product/${product_id}`, { name, price, image_url})
        .then(response => {
            this.props.getInventory()
            this.cancelChange()
        })

    }
//     componentDidMount(){
//     axios.get(`/api/product`)
//       .then(response => {
//         console.log(response)
//         this.setState({ soloProduct: response.data })
//     })
//       .catch(error => console.log(error))
//   }
    // componentDidUpdate(prevProps, prevState){
    //     if(prevProps.selected.product_id === this.props.selected.product_id){
    //         this.setState({name:this.props.selected.name, price: this.props.selected.price, image_url: this.props.selected.price_url})
    // console.log(prevProps, prevState)
    //     }
    // }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.selected !== this.props.selected){
            this.setState({ name: this.props.selected.name, price: this.props.selected.price, image_url: this.props.selected.image_url})
        }
        console.log(this.props.selected)
    }

    render() {
        // console.log(this.state.image_url, this.state.name, this.state.price)
        console.log(this.props)
        // const {createProduct, inventory} = this.props
        const {name, price, image_url} = this.state
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
                    
                    {this.props.selected === null
                    ?(
                            <button className='form-buttons' onClick={this.createProduct}>Add to Inventory</button>
                    )
                    :(
                            <button className='form-buttons' onClick={() => {
                                this.editProduct(this.props.selected.product_id, name, price, image_url)}}>Save Changes</button>
                            
                    )
                    }
                    
                </div>
            </div>
        )
    }
}

export default Form