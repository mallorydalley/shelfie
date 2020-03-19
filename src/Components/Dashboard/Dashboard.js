import React from 'react';
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inventory: []
        }
        this.getInventory = this.getInventory.bind(this)
    }
    componentDidMount() {
        this.getInventory()
    }
    getInventory() {
        axios.get(`/api/inventory`)
            .then(response => {
                this.setState({ inventory: response.data })
            })
            .catch(error => console.log(error))
    }
    // deleteProduct = (product_id) => {
    //     axios.delete(`/api/product/${product_id}`)
    //     .then(response => {
    //         this.props.getInventory()
    //     })
    // }
    deleteProduct = (id) => {
        axios.delete(`/api/product/${id}`)
            .then(response => {
                this.setState({ inventory: response.data })
            })
            .catch(error => console.log(error))
    }
    render(){
        // console.log(match)
        let inventoryList = this.state.inventory.map((ele, i) => {
            return <Product 
                key={i} 
                product={ele}
                delete={this.deleteProduct} 
                getInventory={this.props.getInventory}
                // selected={this.props.selected}
                // selectProduct={this.props.selectProduct}
                />
            
        })
        return (
            <div className ='dashboard'>
                {inventoryList}
            </div>
        )
    }
}

export default Dashboard