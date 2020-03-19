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
    deleteProduct = (id) => {
        axios.delete(`/api/product/${id}`)
            .then(response => {
                this.setState({ inventory: response.data })
            })
            .catch(error => console.log(error))
    }
    render(){
        let inventoryList = this.state.inventory.map((ele, i) => {
            return <Product 
                key={i} 
                product={ele}
                delete={this.deleteProduct} 
                getInventory={this.props.getInventory}
                />
            
        })
        return (
            <div className='dashboard-page'>
                <div className ='dashboard'>
                    {inventoryList}
                </div>
            </div>
        )
    }
}

export default Dashboard