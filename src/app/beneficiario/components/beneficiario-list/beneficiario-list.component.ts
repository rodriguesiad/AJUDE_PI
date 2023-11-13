import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Beneficiario } from 'src/app/models/beneficiario.model';
import { Estado } from 'src/app/models/estado.model';
import { Municipio } from 'src/app/models/municipio.model';

@Component({
  selector: 'app-beneficiario-list',
  templateUrl: './beneficiario-list.component.html',
  styleUrls: ['./beneficiario-list.component.css']
})
export class BeneficiarioListComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['nome', 'cpf', 'nis', 'dataNascimento', 'acoes'];
  dataSource = new MatTableDataSource<Beneficiario>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  ngOnInit(): void {

    const estado = new Estado(1, "Tocantins", "TO");
    const municipio = new Municipio(1, "Palmas", estado);

    const ELEMENT_DATA: Beneficiario[] = [
      { id: 1, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111', dataNascimento: new Date(1998, 9, 1), rg: '', telefone: ' ', email: ' ', cpfDosPais: ' ', cep: ' ', estado: estado, municipio: municipio, bairro: ' ', logradouro: ' ', numero: ' ', complemento: ' ' },
      { id: 2, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111', dataNascimento: new Date(1998, 9, 1), rg: '', telefone: ' ', email: ' ', cpfDosPais: ' ', cep: ' ', estado: estado, municipio: municipio, bairro: ' ', logradouro: ' ', numero: ' ', complemento: ' ' },
      { id: 3, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111', dataNascimento: new Date(1998, 9, 1), rg: '', telefone: ' ', email: ' ', cpfDosPais: ' ', cep: ' ', estado: estado, municipio: municipio, bairro: ' ', logradouro: ' ', numero: ' ', complemento: ' ' },
      { id: 4, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111', dataNascimento: new Date(1998, 9, 1), rg: '', telefone: ' ', email: ' ', cpfDosPais: ' ', cep: ' ', estado: estado, municipio: municipio, bairro: ' ', logradouro: ' ', numero: ' ', complemento: ' ' },
      { id: 5, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111', dataNascimento: new Date(1998, 9, 1), rg: '', telefone: ' ', email: ' ', cpfDosPais: ' ', cep: ' ', estado: estado, municipio: municipio, bairro: ' ', logradouro: ' ', numero: ' ', complemento: ' ' },
      { id: 6, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111', dataNascimento: new Date(1998, 9, 1), rg: '', telefone: ' ', email: ' ', cpfDosPais: ' ', cep: ' ', estado: estado, municipio: municipio, bairro: ' ', logradouro: ' ', numero: ' ', complemento: ' ' },
      { id: 7, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111', dataNascimento: new Date(1998, 9, 1), rg: '', telefone: ' ', email: ' ', cpfDosPais: ' ', cep: ' ', estado: estado, municipio: municipio, bairro: ' ', logradouro: ' ', numero: ' ', complemento: ' ' },
      { id: 8, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111', dataNascimento: new Date(1998, 9, 1), rg: '', telefone: ' ', email: ' ', cpfDosPais: ' ', cep: ' ', estado: estado, municipio: municipio, bairro: ' ', logradouro: ' ', numero: ' ', complemento: ' ' },
      { id: 9, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111', dataNascimento: new Date(1998, 9, 1), rg: '', telefone: ' ', email: ' ', cpfDosPais: ' ', cep: ' ', estado: estado, municipio: municipio, bairro: ' ', logradouro: ' ', numero: ' ', complemento: ' ' },
      { id: 10, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111', dataNascimento: new Date(1998, 9, 1), rg: '', telefone: ' ', email: ' ', cpfDosPais: ' ', cep: ' ', estado: estado, municipio: municipio, bairro: ' ', logradouro: ' ', numero: ' ', complemento: ' ' },
      { id: 11, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111', dataNascimento: new Date(1998, 9, 1), rg: '', telefone: ' ', email: ' ', cpfDosPais: ' ', cep: ' ', estado: estado, municipio: municipio, bairro: ' ', logradouro: ' ', numero: ' ', complemento: ' ' },
      { id: 12, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111', dataNascimento: new Date(1998, 9, 1), rg: '', telefone: ' ', email: ' ', cpfDosPais: ' ', cep: ' ', estado: estado, municipio: municipio, bairro: ' ', logradouro: ' ', numero: ' ', complemento: ' ' },
      { id: 13, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111', dataNascimento: new Date(1998, 9, 1), rg: '', telefone: ' ', email: ' ', cpfDosPais: ' ', cep: ' ', estado: estado, municipio: municipio, bairro: ' ', logradouro: ' ', numero: ' ', complemento: ' ' },
      { id: 14, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111', dataNascimento: new Date(1998, 9, 1), rg: '', telefone: ' ', email: ' ', cpfDosPais: ' ', cep: ' ', estado: estado, municipio: municipio, bairro: ' ', logradouro: ' ', numero: ' ', complemento: ' ' },
      { id: 15, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111', dataNascimento: new Date(1998, 9, 1), rg: '', telefone: ' ', email: ' ', cpfDosPais: ' ', cep: ' ', estado: estado, municipio: municipio, bairro: ' ', logradouro: ' ', numero: ' ', complemento: ' ' },
      { id: 16, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111', dataNascimento: new Date(1998, 9, 1), rg: '', telefone: ' ', email: ' ', cpfDosPais: ' ', cep: ' ', estado: estado, municipio: municipio, bairro: ' ', logradouro: ' ', numero: ' ', complemento: ' ' },
      { id: 17, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111', dataNascimento: new Date(1998, 9, 1), rg: '', telefone: ' ', email: ' ', cpfDosPais: ' ', cep: ' ', estado: estado, municipio: municipio, bairro: ' ', logradouro: ' ', numero: ' ', complemento: ' ' },
      { id: 18, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111', dataNascimento: new Date(1998, 9, 1), rg: '', telefone: ' ', email: ' ', cpfDosPais: ' ', cep: ' ', estado: estado, municipio: municipio, bairro: ' ', logradouro: ' ', numero: ' ', complemento: ' ' },
      { id: 19, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111', dataNascimento: new Date(1998, 9, 1), rg: '', telefone: ' ', email: ' ', cpfDosPais: ' ', cep: ' ', estado: estado, municipio: municipio, bairro: ' ', logradouro: ' ', numero: ' ', complemento: ' ' },
      { id: 20, nome: 'Ana de Melo', cpf: '172.643.380-37', nis: '1 1111111111', dataNascimento: new Date(1998, 9, 1), rg: '', telefone: ' ', email: ' ', cpfDosPais: ' ', cep: ' ', estado: estado, municipio: municipio, bairro: ' ', logradouro: ' ', numero: ' ', complemento: ' ' },
    ];

    this.dataSource = new MatTableDataSource<Beneficiario>(ELEMENT_DATA);

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
