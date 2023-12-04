import { DatePipe } from '@angular/common';
import { Component, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { jsPDF } from 'jspdf';
import { Movimentacao } from 'src/app/models/movimentacao.model';

@Component({
  selector: 'app-movimentacao-download-modal',
  templateUrl: './movimentacao-download-modal.component.html',
  styleUrls: ['./movimentacao-download-modal.component.css']
})
export class MovimentacaoDownloadModalComponent {
  dataAtual: Date = new Date();

  @ViewChild('content', { static: false }) el!: ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { movimentacao: Movimentacao, confirmAction?: () => void },
    private dialogRef: MatDialogRef<MovimentacaoDownloadModalComponent>,
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
        pdf.save("movimentacao_" + this.formatarData(new Date()) + ".pdf");
      }
    })
  }
}
