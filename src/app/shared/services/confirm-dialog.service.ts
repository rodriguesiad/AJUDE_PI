import { Injectable } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';

@Injectable({
    providedIn: 'root'
})
export class ConfirmationDialogService {
    constructor(private dialog: MatDialog) { }

    openConfirmationDialog(title: string, message: string, confirmAction?: () => void): void {
        this.dialog.open(ConfirmDialogComponent, {
            width: "600px",
            height: "270px",
            data: { title, message, confirmAction },
        });
    }
}