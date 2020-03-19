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
    // handleEditButton = () => {
        // this.setState({selected: this.props.product.product_id})
        // this.state.selected.push(this.props.product.product_id)

        // console.log(this.props.product.product_id)
        // console.log(this.props.selected)
    // }
    render() {
        const {product} = this.props
        // console.log(this.props)
        return (
            <div className='product'>
                <div className='product-img'>
                    <img src={product.image_url} alt={product.name}/>
                </div>
                <div className='product-info'>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                
                        <button 
                            onClick={() => this.props.delete(this.props.product.product_id)}>
                                Delete
                        </button>
                    
                    <Link to={`/edit/${product.product_id}`}>
                        <button
                            // onClick={() => {
                            //     this.props.selectProduct(this.state.product)
                            //     }
                            // }
                        >
                            Edit
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Product