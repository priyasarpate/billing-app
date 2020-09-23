import React, { Component } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Bill(props, ref) {
    let printDocument = (ref) => {
        const input = document.getElementById('divToPrint')
        html2canvas(input)
           .then((canvas) => {
              const imgData = canvas.toDataURL('img/png')
              const pdf = new jsPDF();
              pdf.addImage(imgData, 'JPEG', 0, 0)
              pdf.save('invoice.pdf')
           })
     }
  
    return(
        <div>
        <div id='divToPrint'>This is an invoice!</div>
        </div>

    )
}

export default Bill;