import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Atendimento } from 'src/app/models/atendimento.model';
import { Encaminhamento } from 'src/app/models/encaminhamento.model';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { EncaminhamentoService } from 'src/app/services/encaminhamento.service';
import { EncaminhamentoDownloadModalComponent } from '../modal/encaminhamento-download-modal/encaminhamento-download-modal.component';

@Component({
  selector: 'app-encaminhamento-list',
  templateUrl: './encaminhamento-list.component.html',
  styleUrls: ['./encaminhamento-list.component.css']
})
export class EncaminhamentoListComponent implements OnInit {
  atendimento: Atendimento | undefined;
  encaminhamentos: Encaminhamento[] = [];
  totalRegistros = 0;
  size = 5;
  page = 0
  pageEvent: PageEvent | undefined;

  constructor(private encaminhamentoService: EncaminhamentoService, public dialog: MatDialog, private atendimentoService: AtendimentoService) {
    this.atendimento = this.atendimentoService.getAtendimento();
  }

  ngOnInit(): void {
    this.carregarEncaminhamentos();
    this.carregarTotalRegistros();
  }

  carregarEncaminhamentos(): void {
    if (this.atendimento != undefined) {
      this.encaminhamentoService.findByAtendimento(this.atendimento.id.toString(), this.page, this.size).subscribe(data => {
        this.encaminhamentos = data;
      })
    }
  }

  carregarTotalRegistros() {
    if (this.atendimento != undefined) {
      this.encaminhamentoService.count(this.atendimento.id.toString()).subscribe(data => {
        this.totalRegistros = data
      })
    }
  }


  isCadastro() {
    this.encaminhamentoService.setIsCadastro(true);
  }

  openDialog(encaminhamento: Encaminhamento) {
    const dialogRef = this.dialog.open(EncaminhamentoDownloadModalComponent, {
      width: "44%",
      height: "96%",
      data: { encaminhamento }
    })
  }

  handlePage(event: PageEvent): void {
    this.page = event.pageIndex;
    this.size = event.pageSize;
  }

}
