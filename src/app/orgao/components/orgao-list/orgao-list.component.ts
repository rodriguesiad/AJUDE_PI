import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Estado } from 'src/app/models/estado.model';
import { Municipio } from 'src/app/models/municipio.model';
import { Orgao } from 'src/app/models/orgao.model';
import { OrgaoService } from 'src/app/services/orgao.service';

@Component({
  selector: 'app-orgao-list',
  templateUrl: './orgao-list.component.html',
  styleUrls: ['./orgao-list.component.css']
})
export class OrgaoListComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'sigla', 'municipio', 'estado', 'ativo', 'acoes'];
  orgaos: Orgao[] = [];
  totalRegistros = 0;
  pageSize = 2;
  pagina = 0
  dialog: any;

  constructor(private service: OrgaoService) { }

  ngOnInit(): void {
    this.carregarOrgaos();
  }

  carregarOrgaos(): void {
    this.service.findAll(this.pagina, this.pageSize).subscribe(data => { console.log(data); this.orgaos = data; console.log(this.orgaos) })
  }

  paginar(event: PageEvent): void {
    this.pagina = event.pageIndex;
    this.pageSize = event.pageSize;
    this.carregarOrgaos();
  }

}