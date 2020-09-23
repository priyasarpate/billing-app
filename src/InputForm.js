import React, { Component } from 'react';
import './Inputform.css';

class InputForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
          item: '',
          price: '',
          GST: '',
          total: ''
        }
    }


    handleChangeItem = (event) => {
      console.log("yes its working")
      this.setState({
        item: event.target.value
      })
    }

    handleChangePrice = (event) => {
      this.setState({
        price: event.target.value
      })
    }

    handleChangeGST = (event) => {
      this.setState({
        GST: event.target.value
      })
    }

    handleChangeTotal = (event) => {
      this.setState({
        Total: event.target.value
      })
    }

    render() {
        return (
          <React.Fragment>
            <div className='container'>
            <form className='form'>
            <h1>Bills form </h1>
            <lebel className='label-1'>Items:</lebel>
            <input className='input-1' value=
           {this.state.item} onChange={this.handleChangeItem}
              type="text"/>
            <br></br>

             <lebel className='label-2'>Price:</lebel>
            <input className='input-2'
            value=
            {this.state.price} onChange={this.handleChangePrice}
              type="text"
            /><br></br>
             <lebel className='label-3'>GST:</lebel>
            <input className='input-3'
            value=
            {this.state.GST} onChange={this.handleChangeGST}
              type="text"
            /><br></br>
             <lebel className='label-4'>Total:</lebel>
            <input className='input-4'
            value=
            {this.state.total} onChange={this.handleChangeTotal}
              type="text"
            /><br></br>
          </form>
          </div>

          
          <div className='invoice'>
          <h1>InVoice</h1>
          <p className="input-value-1">
           Items: 
              <span className="highlight">{this.state.item}</span></p>
              <p className="input-value-2">
           price: 
              <span className="highlight">{this.state.price}</span></p>
              <p className="input-value-3">
           GST: 
              <span className="highlight">{this.state.GST}</span></p>
              <p className="input-value-4">
           Total: 
              <span className="highlight">{this.state.total}</span></p>

          </div>
          </React.Fragment>

        )

    }
}
export default InputForm;