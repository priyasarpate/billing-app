import React from 'react';

function Invoice(props){
    return(
        <div>
            <div className='invoice'>
          <h1>InVoice</h1>
          <p className="input-value-1">
           Items: 
              <span className="highlight">{props.data.item}</span></p>
              <p className="input-value-2">
           price: 
              <span className="highlight">{props.data.price}</span></p>
              <p className="input-value-3">
           GST: 
              <span className="highlight">{props.data.GST}</span></p>
              <p className="input-value-4">
           Total: 
              <span className="highlight">{props.data.total}</span></p>
              <button onClick={props.Resethandler}>Reset</button>
              <button>Print</button>
          </div>
          
        </div>
    )
}
export default Invoice;