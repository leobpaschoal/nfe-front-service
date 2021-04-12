import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotaFiscal } from '../model/nota-fiscal';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private https: HttpClient) {}

  pushNfeToStorage(file: File): Observable<any> {
    const data: FormData = new FormData();
    data.append('file', file);

    return this.https.post(environment.apiUrl, data, {
      reportProgress: true,
      responseType: 'text',
    });
  }

  getNfeList(): Observable<any> {
    return this.https.get<NotaFiscal>(environment.apiUrl, {
      reportProgress: true,
      responseType: 'json',
    });
  }

  deleteNfe(id: number): Observable<any> {
    return this.https.delete(environment.apiUrl + id, {
      reportProgress: true,
      responseType: 'json',
    });
  }
}
