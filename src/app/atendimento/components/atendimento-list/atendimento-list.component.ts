import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Atendimento } from 'src/app/models/atendimento.model';
import { Beneficiario } from 'src/app/models/beneficiario.model';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { AtendimentoDownloadModalComponent } from '../modal/atendimento-download-modal/atendimento-download-modal.component';

@Component({
  selector: 'app-atendimento-list',
  templateUrl: './atendimento-list.component.html',
  styleUrls: ['./atendimento-list.component.css']
})
export class AtendimentoListComponent implements OnInit {
  atendimentos: Atendimento[] = [];
  beneficiario: Beneficiario;
  totalRegistros = 0;
  size = 5;
  page = 0

  pageEvent: PageEvent | undefined;

  constructor(private activatedRoute: ActivatedRoute, public dialog: MatDialog, private service: AtendimentoService) {
    this.beneficiario = this.activatedRoute.snapshot.data['beneficiario'];
  }

  ngOnInit(): void {
    this.carregarAtendimentos();
    this.carregarTotalRegistros();
  }

  carregarAtendimentos() {
    this.service.findByBeneficiario(this.beneficiario.id.toString(), this.page, this.size).subscribe(data => {
      this.atendimentos = data;
    })
  }

  carregarTotalRegistros() {
    this.service.count(this.beneficiario.id.toString()).subscribe(data => {
      this.totalRegistros = data;
    });
  }

  handlePage(event: PageEvent): void {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.carregarAtendimentos();
  }

  openDialog(atendimento: Atendimento) {
    const dialogRef = this.dialog.open(AtendimentoDownloadModalComponent, {
      width: "44%",
      height: "96%",
      data: { atendimento }
    })
  }

}
