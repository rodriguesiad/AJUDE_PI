import { Component, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-encaminhamento-download-modal',
  templateUrl: './encaminhamento-download-modal.component.html',
  styleUrls: ['./encaminhamento-download-modal.component.css']
})
export class EncaminhamentoDownloadModalComponent {

  @ViewChild('content', { static: false }) el!: ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { title: string, message: string, confirmAction?: () => void},
    private dialogRef: MatDialogRef<EncaminhamentoDownloadModalComponent>) {
  }

  onConfirm(): void {
    this.printPDF();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  printPDF() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("encaminhamento_23112023.pdf");
      }
    })
  }

}
