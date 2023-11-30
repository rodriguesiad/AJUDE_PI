import { DatePipe } from '@angular/common';
import { Component, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { jsPDF } from 'jspdf';
import { Atendimento } from 'src/app/models/atendimento.model';

@Component({
  selector: 'app-atendimento-download-modal',
  templateUrl: './atendimento-download-modal.component.html',
  styleUrls: ['./atendimento-download-modal.component.css']
})
export class AtendimentoDownloadModalComponent {
  dataAtual: Date = new Date();

  @ViewChild('content', { static: false }) el!: ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { atendimento: Atendimento, confirmAction?: () => void },
    private dialogRef: MatDialogRef<AtendimentoDownloadModalComponent>,
    private datePipe: DatePipe) {
  }

  onConfirm(): void {
    this.printPDF();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  formatarTelefone(numero: string): string {
    if (numero != '') {
      const codigoPais = '+' + numero.slice(0, 2);
      const ddd = numero.slice(2, 4);
      const parte1 = numero.slice(4, 6);
      const parte2 = numero.slice(6, 10);
      return `${codigoPais} ${ddd} ${parte1} ${parte2}`;
    }

    return '';
  }

  formatarData(data: Date): string {
    return this.datePipe.transform(data, 'yyyy_MM_dd_HH_mm_ss')!;
  }

  printPDF() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("atendimento" + this.data.atendimento.id + this.formatarData(new Date()) + ".pdf");
      }
    })
  }
}
