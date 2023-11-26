import { Component } from '@angular/core';
import { SharedService } from "../../../shared/services/shared.service";
import { EncaminhamentoDownloadModalComponent } from '../modal/encaminhamento-download-modal/encaminhamento-download-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-encaminhamento-list',
  templateUrl: './encaminhamento-list.component.html',
  styleUrls: ['./encaminhamento-list.component.css']
})
export class EncaminhamentoListComponent {

  constructor(private sharedService: SharedService, public dialog: MatDialog) { }

  isCadastro() {
    this.sharedService.setIsCadastro(true);
  }

  openDialog() {
    const dialogRef = this.dialog.open(EncaminhamentoDownloadModalComponent, {
      width: "36%",
      height: "90%",
      data: {
        teste: "oi"
      }
    })
  }

}
