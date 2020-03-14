import React from 'react';

class Product extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        
        const {product} = this.props
        return (
            <div>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.img}</p>
                <button 
                    onClick={() => this.props.delete(this.props.product.product_id)}>
                        Delete
                </button>
            </div>
        )
    }
}

export default Product