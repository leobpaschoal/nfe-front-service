import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DialogDuplicataComponent } from './components/dialogs/duplicata/dialog-duplicata.component';

import { HttpService } from './services/http-service';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DialogRemoveComponent } from './components/dialogs/remove/dialog-remove/dialog-remove.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    DialogDuplicataComponent,
    DialogRemoveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
