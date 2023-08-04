import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { constantes } from '../../../core/data/Constantes';
import { IRegistrationRequest } from '../data/IRequestVacation';

@Injectable({
  providedIn: 'root'
})
export class VacationService {


  public respuesta = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' }),
  };

  constructor(private readonly http: HttpClient) { }

   public getRequest(idUsuario: number): Observable<IRegistrationRequest[]> {
    return this.http.get<IRegistrationRequest[]>(`${environment.api}${constantes.GETREQUESTVACATION}${idUsuario}`);
  }

  public createRequest(request: IRegistrationRequest): Observable<IRegistrationRequest> {
    return this.http.post<IRegistrationRequest>(`${environment.api}${constantes.CREATEREQUESTVACATION}`, request, this.respuesta);
  }
}