import React from 'react';

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            inputName: '',
            inputPrice: '',
            inputImg: ''
        }
    }
    handleImage = (val) => {
        this.setState({inputImg: val})
        console.log(this.state.inputImg)
    }
    handleName = (val) => {
        this.setState({ inputName: val })
    }
    handlePrice = (val) => {
        this.setState({ inputPrice: val })
    }
    cancelChange = () => {
        this.setState({
            inputName: '',
            inputPrice: '',
            inputImg: ''
        })
        console.log(this.state.inputImg)
    }
    componentDidUpdate(){
        
    }
    render() {
        const {createProduct, getProducts} = this.props
        const {inputName, inputPrice, inputImg} = this.state
        return (
            <div className='form'>
                <input onChange={e => this.handleImage(e.target.value)}/>
                <input onChange={e => this.handleName(e.target.value)}/>
                <input onChange={e => this.handlePrice(e.target.value)}/>
                <button onClick={this.cancelChange}>Cancel</button>
                <button onClick={() => createProduct({inputName, inputPrice, inputImg})}>Add</button>
            </div>
        )
    }
}

export default Form