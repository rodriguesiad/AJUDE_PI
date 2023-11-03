import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-selection',
  templateUrl: './tab-selection.component.html',
  styleUrls: ['./tab-selection.component.css']
})
export class TabSelectionComponent  {

  navLinks = [
    {path: '/beneficiarios/list', label: 'BENEFICIÁRIOS'},
    {path: '/orgaos/list', label: 'ÓRGÃOS'},
    {path: '/usuarios/list', label: 'USUÁRIOS'}
  ]

  constructor() {  }

}
