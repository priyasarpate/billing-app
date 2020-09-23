import React from 'react';
import Bill from './Bill';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


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
            <button onClick={props.Resethandler} className="btn btn-danger">Reset</button>

            <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">Print</button>
            <div id="myModal" className="modal fade" role="dialog">
               <div className="modal-dialog">
                  <div className="modal-content">
                     <div className="modal-header">
                        <h4 className="modal-title">Printing your invoice!</h4>
                     </div>
                     <div className="modal-body" id="divToPrint">
                        {/* Style your bill here */}
                        <div className="row">
                           <div className="col">
                            <h2> {props.data.item} </h2>
                           </div>
                        </div>
                     </div>
                     <div className="modal-footer">
                     <button type="button" className="btn btn-primary">Confirm Print!</button>
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