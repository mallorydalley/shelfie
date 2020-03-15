import React from 'react';
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    deleteProduct = (product_id) => {
        axios.delete(`/api/product/${product_id}`)
        .then(response => {
            this.props.getInventory()
        })
    }
    render(){
        // console.log(this.props)
        let inventoryList = this.props.inventory.map((ele, i) => {
            return <Product 
                key={i} 
                product={ele}
                delete={this.deleteProduct} 
                getInventory={this.props.getInventory}
                selected={this.props.selected}
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