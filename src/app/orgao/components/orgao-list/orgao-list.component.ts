import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Estado } from 'src/app/models/estado.model';
import { Municipio } from 'src/app/models/municipio.model';
import { Orgao } from 'src/app/models/orgao.model';

@Component({
  selector: 'app-orgao-list',
  templateUrl: './orgao-list.component.html',
  styleUrls: ['./orgao-list.component.css']
})
export class OrgaoListComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['nome', 'sigla', 'municipio', 'estado','situacao', 'acoes'];
  dataSource = new MatTableDataSource<Orgao>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dialog: any;


  ngOnInit(): void {

    const estado = new Estado(1, "Tocantins", "TO");
    const municipio = new Municipio(1, "Palmas", estado);

    const ELEMENT_DATA: Orgao[] = [
      { id: 1, nome: 'Sec. Municipal de Deseenvolvimento Social', sigla:'SEDES', municipio: municipio, estado: estado, situacao: true},
      { id: 2, nome: 'Centro de Referência de Assistência Social', sigla:'CRAS', municipio: municipio, estado: estado, situacao: true},
      { id: 3, nome: 'Centro de Ref. Especializado de Ass. Social', sigla:'CREAS', municipio: municipio, estado: estado, situacao: true},
      { id: 4, nome: 'Centro de Atenção Psicossocial',sigla:'CAPS', municipio: municipio, estado: estado, situacao: false},
      { id: 5, nome: 'Centro de Atenção Psicossocial',sigla:'SEDES', municipio: municipio, estado: estado, situacao: false},
      { id: 6, nome: 'Centro de Atenção Psicossocial',sigla:'SEDES', municipio: municipio, estado: estado, situacao: false},
      { id: 7, nome: 'Centro de Atenção Psicossocial',sigla:'SEDES', municipio: municipio, estado: estado, situacao: false},
      { id: 8, nome: 'Centro de Atenção Psicossocial',sigla:'SEDES', municipio: municipio, estado: estado, situacao: false},
      { id: 9, nome: 'Centro de Atenção Psicossocial',sigla:'SEDES', municipio: municipio, estado: estado, situacao: false},
      { id: 10, nome: 'Centro de Atenção Psicossocial',sigla:'SEDES', municipio: municipio, estado: estado, situacao: false},
    ];

    this.dataSource = new MatTableDataSource<Orgao>(ELEMENT_DATA);

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}