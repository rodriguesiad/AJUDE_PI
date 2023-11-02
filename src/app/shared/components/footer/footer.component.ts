import { Component } from '@angular/core';
import { TabSelectionService } from '../../services/tab-selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private tabSelectionService: TabSelectionService, private router: Router) { }

  navigateToBeneficiariosList() {
    this.router.navigate(['/beneficiarios/list']).then(() => {
      this.tabSelectionService.setSelectedTabIndex(0);
    });
  }

}
