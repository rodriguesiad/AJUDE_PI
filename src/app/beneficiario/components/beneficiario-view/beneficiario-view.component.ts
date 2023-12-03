import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beneficiario } from 'src/app/models/beneficiario.model';
import { BeneficiarioService } from 'src/app/services/beneficiario.service';

@Component({
  selector: 'app-beneficiario-view',
  templateUrl: './beneficiario-view.component.html',
  styleUrls: ['./beneficiario-view.component.css']
})
export class BeneficiarioViewComponent implements OnInit {

  beneficiario: Beneficiario = this.activatedRoute.snapshot.data['beneficiario'];

  constructor( private activatedRoute: ActivatedRoute, private service: BeneficiarioService) { }

  ngOnInit(): void{
      console.log(this.beneficiario);
      this.carregarDadosUsuario();
  }

  carregarDadosUsuario(){

  }
}
