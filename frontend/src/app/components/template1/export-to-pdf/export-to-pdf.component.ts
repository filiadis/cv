import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-export-to-pdf',
  standalone: true,
  imports: [],
  templateUrl: './export-to-pdf.component.html',
  styleUrl: './export-to-pdf.component.css',
})
export class ExportToPdfComponent {
  savePDF() {
    const data = document.getElementById('layout')!;
    if (!data) {
      console.error('Element not found!');
      return;
    }
    html2canvas(data, { scale: 2 }).then((canvas) => {
      const imgWidth = 210;
      const imgHeight = 297;

      const contentDataURL = canvas.toDataURL('image/jpg');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(contentDataURL, 'JPG', 0, 0, imgWidth, imgHeight);
      pdf.save('CV.pdf');
    });
  }
}
