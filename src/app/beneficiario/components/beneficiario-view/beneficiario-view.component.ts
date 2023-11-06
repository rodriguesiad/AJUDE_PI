import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beneficiario } from 'src/app/models/beneficiario.model';

@Component({
  selector: 'app-beneficiario-view',
  templateUrl: './beneficiario-view.component.html',
  styleUrls: ['./beneficiario-view.component.css']
})
export class BeneficiarioViewComponent {

  beneficiario: Beneficiario | null = null;

  constructor( private activatedRoute: ActivatedRoute) {
    this.beneficiario = this.activatedRoute.snapshot.data['beneficiario'];
  }

}
