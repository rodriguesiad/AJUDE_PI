import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Atendimento } from 'src/app/models/atendimento.model';
import { Beneficiario } from 'src/app/models/beneficiario.model';

@Component({
  selector: 'app-atendimento-list',
  templateUrl: './atendimento-list.component.html',
  styleUrls: ['./atendimento-list.component.css']
})
export class AtendimentoListComponent implements OnInit {

  atendimentos: Atendimento[] = [];
  beneficiario: Beneficiario;
  size = 5;
  page = 0;

  pageEvent: PageEvent | undefined;


  constructor(private activatedRoute: ActivatedRoute) { 
    this.beneficiario =  this.activatedRoute.snapshot.data['beneficiario'];
  }

  ngOnInit(): void {
    const atendimento: Atendimento = this.activatedRoute.snapshot.data['atendimento'];
    this.atendimentos = [atendimento, atendimento, atendimento, atendimento, atendimento, atendimento];
  }

  formatarTelefone(numero: string): string {
    const codigoPais = '+' + numero.slice(0, 2);
    const ddd = numero.slice(2, 4);
    const parte1 = numero.slice(4, 6);
    const parte2 = numero.slice(6, 10);
    return `${codigoPais} ${ddd} ${parte1} ${parte2}`;
  }

  handlePage(event: PageEvent): void {
    this.page = event.pageIndex;
    this.size = event.pageSize;
  }

}
