import React from 'react';

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: this.props.selected,
            product: this.props.product
        }
    }
    handleEditButton = () => {
        // this.setState({selected: this.props.product.product_id})
        this.state.selected.push(this.props.product.product_id)

        console.log(this.props.product.product_id)
        console.log(this.props.selected)
    }
    render() {
        const {product} = this.props
        console.log(this.props.product)
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

                    <button
                        onClick={this.handleEditButton}
                    >
                        Edit
                        {/* when button clicked it changes this.props.selected === this.props.product */}
                    </button>
                </div>
            </div>
        )
    }
}

export default Product