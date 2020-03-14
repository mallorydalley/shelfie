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
            this.props.getProducts()
        })
    }
    render(){
        let inventoryList = this.props.inventory.map((ele, i) => {
            return <Product 
                key={i} 
                // product_id={ele.product_id}
                
                product={ele}
                delete={this.deleteProduct} 
                getProducts={this.props.getProducts}/>
            
        })
        return (
            <div className ='dashboard'>
                {inventoryList}
            </div>
        )
    }
}

export default Dashboard