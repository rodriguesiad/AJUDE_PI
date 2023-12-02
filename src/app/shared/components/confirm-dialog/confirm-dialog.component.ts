import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { title: string, message: string, confirmAction?: () => void },
    private dialogRef: MatDialogRef<ConfirmDialogComponent>) {
  }

  onConfirm(): void {
    if (this.data.confirmAction) {
      this.data.confirmAction();
    }
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }


}
