import { Component } from '@angular/core';
import { TabSelectionService } from '../../services/tab-selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  navLinks = [
    {path: '/beneficiarios/list', label: 'BENEFICIÁRIOS'},
    {path: '/orgaos/list', label: 'ÓRGÃOS'},
    {path: '/usuarios/list', label: 'USUÁRIOS'}
  ]


  constructor(private tabSelectionService: TabSelectionService, private router: Router) { }

  navigateToBeneficiariosList() {
    this.router.navigate(['/beneficiarios/list']).then(() => {
      this.tabSelectionService.setSelectedTabIndex(0);
    });
  }

  getSelectedTabIndex(): number {
    return this.tabSelectionService.getSelectedTabIndex();
  }

  onTabChange(event: any): void {
    this.tabSelectionService.setSelectedTabIndex(event.index);
  }

}
