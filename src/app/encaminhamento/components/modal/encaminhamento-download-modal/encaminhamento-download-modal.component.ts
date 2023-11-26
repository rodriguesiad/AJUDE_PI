import { Component, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    private dialogRef: MatDialogRef<EncaminhamentoDownloadModalComponent>) {
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

  printPDF() {
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("encaminhamento_23112023.pdf");
      }
    })
  }

}
