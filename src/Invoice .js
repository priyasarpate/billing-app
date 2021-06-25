import React from 'react';
import Bill from './Bill';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Invoice.css';



function Invoice(props) {
   let printDocument = () => {
      const input = document.getElementById('divToPrint')
      html2canvas(input)
         .then((canvas) => {
            const imgData = canvas.toDataURL('img/png')
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0)
            pdf.save('invoice.pdf')
         })
   }

   return (
      <div className='main'>
            <h1 className="h1">Billing App</h1>
     <h3 className="p">Helpfull For Small Business</h3>
     <div className="before-container">
        <h3>InVoice</h3>
        </div>
         <div className='invoice'>
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
            <button onClick={props.Resethandler} className="reset-button">Reset</button>
            <br />
            <button className="print-button" data-toggle="modal" data-target="#myModal">Print</button>
            <div id="myModal" className="modal fade" role="dialog">
               <div className="modal-dialog">
                  <div className="modal-content">
                     <div className="modal-header">
                        <h4 className="modal-title">CASH RECIEPT</h4>
                     </div>
                     <div className="modal-body" id="divToPrint">
                        {/* Style your bill here */}
                        <div className="row">
                           <div className="col">
                              <div>
                                 <p> ITEMS : {props.data.item} </p>
                                 <p className='dot'></p>
                              </div>
                              <div>
                                 <p> PRICE : {props.data.price} </p>
                                 <p className='dot1'></p>
                              </div>
                              {/* <p> GST:{props.data.item} </p> */}
                              <div className='dot3'>
                                 <p> GST : {props.data.GST} </p>
                                 <h5> TOTAL : {props.data.total} </h5>
                                 <p className='dot2'></p>
                              </div>


                           </div>
                        </div>
                     </div>
                     <div className="modal-footer">
                        <button type="button" onClick={printDocument} className="btn btn-primary">Confirm Print!</button>
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                     </div>
                  </div>

               </div>
            </div>
         </div>
         <div>
         </div>
      </div>
   )
}


export default Invoice;