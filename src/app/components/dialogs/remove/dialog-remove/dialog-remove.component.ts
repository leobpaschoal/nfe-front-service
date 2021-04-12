import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-remove',
  templateUrl: './dialog-remove.component.html',
  styleUrls: ['./dialog-remove.component.css'],
})
export class DialogRemoveComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogRemoveComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { arquivo: string }
  ) {}

  onRemove() {
    this.dialogRef.close('remove');
  }
}
