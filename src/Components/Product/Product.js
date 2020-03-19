import React from 'react';
import {Link} from 'react-router-dom'

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: this.props.selected,
            product: this.props.product
        }
    }
    render() {
        const {product} = this.props
        return (
            <div className='product'>
                <div className='img-container'>
                    <img className='product-img' src={product.image_url} alt={product.name}/>
                </div>
                <div className='product-info'>
                    <div className='name-price'>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>

                    <div className='product-buttons'>
                        <button 
                            className='product-button'
                            onClick={() => this.props.delete(this.props.product.product_id)}>
                                Delete
                        </button>
                    
                        <Link to={`/edit/${product.product_id}`}>
                            <button         className='product-button'>
                                Edit
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product