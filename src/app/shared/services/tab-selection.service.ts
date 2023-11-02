import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabSelectionService {
  
  private selectedTabIndex = 0;
  
  getSelectedTabIndex(): number {
    return this.selectedTabIndex;
  }

  setSelectedTabIndex(index: number): void {
    this.selectedTabIndex = index;
  }

}
