import React from 'react';

class Product extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        console.log(this.props)
        const {product} = this.props
        return (
            <div>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.img}</p>
                <button 
                    onClick={() => delete(product.id)}>
                        Delete
                </button>
            </div>
        )
    }
}

export default Product