import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Beneficiario } from 'src/app/models/beneficiario.model';
import { BeneficiarioService } from 'src/app/services/beneficiario.service';

@Component({
  selector: 'app-beneficiario-list',
  templateUrl: './beneficiario-list.component.html',
  styleUrls: ['./beneficiario-list.component.css']
})
export class BeneficiarioListComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'cpf', 'nis', 'dataNascimento', 'acoes'];
  totalRegistros = 0;
  filtro: string = "";
  pageSize = 5;
  pagina = 0
  dialog: any;
  beneficiarios: Beneficiario[] = [];

  constructor(private service: BeneficiarioService) { }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  ngOnInit(): void {
    this.carregarBeneficiarios();
    this.carregarTotal();

  }

  carregarTotal() {
    this.service.count().subscribe(data => { this.totalRegistros = data })
  }

  carregarBeneficiarios() {
    if (this.filtro) {
      this.service.findByNomeOuCPF(this.filtro, this.pagina, this.pageSize).subscribe(data => { this.beneficiarios = data; })
    } else {
      this.service.findAll(this.pagina, this.pageSize).subscribe(data => { this.beneficiarios = data; })
    }
  }

  aplicarFiltro() {
    this.carregarBeneficiarios();
    this.carregarTotal();
  }

  limparFiltro() {
    this.filtro = "";
    this.aplicarFiltro();
  }
  
}