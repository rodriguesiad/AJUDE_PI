import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Orgao } from 'src/app/models/orgao.model';
import { OrgaoService } from 'src/app/services/orgao.service';
import { MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS } from "@angular/material/slide-toggle";
import { ConfirmationDialogService } from 'src/app/shared/services/confirm-dialog.service';

@Component({
  selector: 'app-orgao-list',
  templateUrl: './orgao-list.component.html',
  styleUrls: ['./orgao-list.component.css'],
  providers: [
    {
      provide: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS,
      useValue: { disableToggleValue: true },
    },
  ],
})
export class OrgaoListComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'sigla', 'municipio', 'estado', 'ativo', 'acoes'];
  orgaos: Orgao[] = [];
  totalRegistros = 0;
  filtro: string = "";
  pageSize = 5;
  pagina = 0
  dialog: any;

  constructor(private service: OrgaoService, private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit(): void {
    this.carregarOrgaos();
    this.carregarTotalRegistros();
  }

  openConfirmationDialog(orgao: Orgao): void {
    let situacao = orgao.ativo ? 'desativar' : 'ativar';
    let situacaoTitle = orgao.ativo ? 'Desativar' : 'Ativar';
    const message = 'Você realmente deseja ' + situacao + ' a categoria  "' + orgao.nome + '"?'


    this.confirmationDialogService.openConfirmationDialog(
      situacaoTitle,
      message,
      () => {
        this.service.alterarSituacao(orgao.id, !orgao.ativo).subscribe({
          next: () => { this.ngOnInit() },
          error: (err) => {
            console.log(err);
          }
        })
      }
    );
  }

  carregarOrgaos(): void {
    if (this.filtro) {
      this.service.findByNomeOuSigla(this.filtro, this.pagina, this.pageSize).subscribe(data => { this.orgaos = data; })
    } else {
      this.service.findAll(this.pagina, this.pageSize).subscribe(data => { this.orgaos = data; })
    }
  }

  carregarTotalRegistros() {
    if (this.filtro) {
      this.service.countByNomeOuSigla(this.filtro).subscribe(data => {
        this.totalRegistros = data;
      });
    } else {
      this.service.count().subscribe(data => {
        this.totalRegistros = data;
      });
    }
  }

  paginar(event: PageEvent): void {
    this.pagina = event.pageIndex;
    this.pageSize = event.pageSize;
    this.carregarOrgaos();
  }

  aplicarFiltro() {
    this.carregarOrgaos();
    this.carregarTotalRegistros();
  }

  limparFiltro() {
    this.filtro = "";
    this.aplicarFiltro();
  }

}