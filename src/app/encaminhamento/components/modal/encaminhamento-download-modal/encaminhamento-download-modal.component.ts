import { DatePipe } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { jsPDF } from 'jspdf';
import { Encaminhamento } from 'src/app/models/encaminhamento.model';

@Component({
  selector: 'app-encaminhamento-download-modal',
  templateUrl: './encaminhamento-download-modal.component.html',
  styleUrls: ['./encaminhamento-download-modal.component.css']
})
export class EncaminhamentoDownloadModalComponent {
  dataAtual: Date = new Date();

  @ViewChild('content', { static: false }) el!: ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { encaminhamento: Encaminhamento, confirmAction?: () => void },
    private dialogRef: MatDialogRef<EncaminhamentoDownloadModalComponent>,
    private datePipe: DatePipe) {
  }

  onConfirm(): void {
    this.printPDF();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  formatarData(data: Date): string {
    return this.datePipe.transform(data, 'yyyy_MM_dd_HH_mm_ss')!;
  }

  printPDF() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("encaminhamento_" + this.formatarData(new Date()) + ".pdf");
      }
    })
  }

}
