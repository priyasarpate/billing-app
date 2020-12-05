import React, { Component } from 'react';
import './Inputform.css';
import './App.css'
import Invoice from './Invoice ';

class InputForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: null,
      price: null,
      GST: null,
      total: null,
    }
  }
   

  handleChangeItem = (event) => {
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
      GST: this.state.price * 12 / 100

    })
  }

  handleChangeTotal = (event) => {
    let {price, GST} = this.state
    this.setState({
      total: parseFloat(price) + parseFloat(GST)  
    })
  }
  Resethandler= ()=>{
   console.log('from reset handler')
   this.setState({
     item: null,
     price: 0,
     GST: 0,
     total: 0
   })
  }

  render() {
    return (
      <React.Fragment>
     <div className="col-md-4">
    <Invoice Resethandler ={this.Resethandler} data={this.state}/>
    </div>  
<form>
    <h1>Fill Form</h1>
    <div className="form-group">
        <label for="inputAddress">Item:</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="Item Name"
            value={this.state.item} onChange={this.handleChangeItem} />
    </div>

    <div className="form-group">
        <label for="inputAddress2">Price:</label>
        <input type="text" className="form-control" id="inputAddress2" placeholder="Price"
            value=
            {this.state.price} onChange={this.handleChangePrice}
        />
    </div>

    <div className="form-group">
        <label for="inputAddress">GST:</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="GST"
         value={this.state.GST} onFocus={this.handleChangeGST}

        />
    </div>

    <div className="form-group">
        <label for="inputAddress2">Total:</label>
        <input type="text" className="form-control" id="inputAddress2" placeholder="Total"
         value=
         {this.state.total} onFocus={this.handleChangeTotal}
        />
    </div>
</form>
      </React.Fragment>




    )

  }
}
export default InputForm;