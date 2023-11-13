import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TabSelectionService } from '../../services/tab-selection.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navLinks = [
    { path: '/beneficiarios/list', label: 'BENEFICIÁRIOS', isActive: false },
    { path: '/orgaos/list', label: 'ÓRGÃOS', isActive: false },
    { path: '/usuarios/list', label: 'USUÁRIOS', isActive: false }
  ]

  constructor(private tabSelectionService: TabSelectionService, private router: Router) { }


  ngOnInit() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe(event => {
        this.highlightActiveLink(event.url);
      });
  }

  private highlightActiveLink(url: string): void {
    const linkPrefixes = ['/beneficiarios/', '/orgaos/', '/usuarios/'];

    if (url.includes('/atendimentos/')) {
      url = url.replace('/atendimentos/', '/beneficiarios/');
    }

    const foundLink = this.navLinks.find(link =>
      linkPrefixes.some(prefix => url.includes(prefix)) && url.includes(link.path)
    );

    if (foundLink) {
      this.navLinks.forEach(link => (link.isActive = false));
      foundLink.isActive = true;
    }
  }


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
