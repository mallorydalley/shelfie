import React from 'react';
import Product from '../Product/Product'

class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        let inventoryList = this.props.inventory.map((ele, i) => {
            return <Product key={i} product={ele}
            delete={this.props.delete} getProducts={this.props.getProducts}/>
        })
        return (
            <div className ='dashboard'>
                {inventoryList}
            </div>
        )
    }
}

export default Dashboard