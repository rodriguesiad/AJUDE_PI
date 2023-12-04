import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Atendimento } from 'src/app/models/atendimento.model';
import { Movimentacao } from 'src/app/models/movimentacao.model';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';
import { MovimentacaoDownloadModalComponent } from '../modal/movimentacao-download-modal/movimentacao-download-modal.component';

@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})
export class MovimentacaoListComponent implements OnInit {
  atendimento: Atendimento | undefined;
  movimentacoes: Movimentacao[] = [];
  totalRegistros = 0;
  size = 5;
  page = 0
  pageEvent: PageEvent | undefined;

  constructor(private movimentacaoService: MovimentacaoService, public dialog: MatDialog, private atendimentoService: AtendimentoService) {
    this.atendimento = this.atendimentoService.getAtendimento();
  }

  ngOnInit(): void {
    this.carregarMovimentacoes();
    this.carregarTotalRegistros();
  }

  carregarMovimentacoes(): void {
    if (this.atendimento != undefined) {
      this.movimentacaoService.findByAtendimento(this.atendimento.id.toString(), this.page, this.size).subscribe(data => {
        this.movimentacoes = data
      })
    }
  }

  carregarTotalRegistros() {
    if (this.atendimento != undefined) {
      this.movimentacaoService.count(this.atendimento.id.toString()).subscribe(data => {
        this.totalRegistros = data
      })
    }
  }

  isCadastro() {
    this.movimentacaoService.setIsCadastro(true);
  }

  handlePage(event: PageEvent): void {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.carregarMovimentacoes();
  }

  openDialog(movimentacao: Movimentacao) {
    const dialogRef = this.dialog.open(MovimentacaoDownloadModalComponent, {
      width: "44%",
      height: "96%",
      data: { movimentacao }
    })
  }

  baixarDocumento(nomeDocumento: string): void {
    console.log(nomeDocumento);
    if (nomeDocumento != '') {
      const url = this.movimentacaoService.getUrlDocumento(nomeDocumento);
      console.log(url);
      window.open(url, '_blank');
    }
  }

}
