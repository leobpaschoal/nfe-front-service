import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotaFiscal } from 'src/app/model/nota-fiscal';

@Component({
  selector: 'app-dialog-duplicata',
  templateUrl: './dialog-duplicata.component.html',
  styleUrls: ['./dialog-duplicata.component.css'],
})
export class DialogDuplicataComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogDuplicataComponent>,
    @Inject(MAT_DIALOG_DATA) public nfe: NotaFiscal
  ) {}
}
