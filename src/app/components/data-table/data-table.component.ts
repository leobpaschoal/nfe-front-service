import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { HttpService } from 'src/app/services/http-service';
import { NotaFiscal } from 'src/app/model/nota-fiscal';
import { MatPaginator } from '@angular/material/paginator';
import { DialogDuplicataComponent } from '../dialogs/duplicata/dialog-duplicata.component';
import { NfStatus } from 'src/app/enum/nf-status';
import { DialogRemoveComponent } from '../dialogs/remove/dialog-remove/dialog-remove.component';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit, AfterViewInit {
  constructor(private httpService: HttpService, private dialog: MatDialog) {}

  displayedColumns: string[] = [
    'arquivo',
    'chave',
    'nomeEmitente',
    'nomeDestinatario',
    'valorNota',
    'status',
    'actions',
  ];

  public nfe: NotaFiscal[] = [];

  selectedFiles: any = FileList;
  currentFileUpload: any = File;
  dataSource = new MatTableDataSource(this.nfe);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.getNfeList();

    setInterval(() => {
      this.getNfeList();
    }, 5000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getNfeList() {
    this.nfe = [];

    this.httpService.getNfeList().subscribe({
      next: (data) => {
        if (data.length != 0) {
          data.forEach((element: NotaFiscal) => {
            if (
              element.status.id === NfStatus.AGUARDANDO_PROCESSAMENTO ||
              element.status.id === NfStatus.EM_PROCESSAMENTO
            ) {
              element.canDelete = false;
            } else {
              element.canDelete = true;
            }

            element.hasDuplicata = element.duplicatas.length !== 0;
            this.nfe.push(element);
          });

          this.dataSource.data = this.nfe;
        }

        console.info(data);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  deleteNfe(id: number) {
    console.log(id);
    this.httpService.deleteNfe(id).subscribe({
      next: (data) => {
        console.info(data);
        this.getNfeList();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  uploadNfe() {
    this.currentFileUpload = this.selectedFiles.item(0);

    this.httpService.pushNfeToStorage(this.currentFileUpload).subscribe({
      next: (event) => {
        console.info(event);
        this.selectedFiles = undefined;
        this.getNfeList();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  callDuplicataDialog(nfe: NotaFiscal) {
    this.dialog.open(DialogDuplicataComponent, {
      width: '600px',
      data: nfe,
    });
  }

  callRemoveDialog(id: number, arquivo: string) {
    const dialogRef = this.dialog.open(DialogRemoveComponent, {
      width: '600px',
      data: { arquivo: arquivo },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'remove') {
        this.deleteNfe(id);
      }
    });
  }
}
