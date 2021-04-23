import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import {Seguimiento} from '../interfaces/seguimiento.interface'

@Injectable({
    providedIn: 'root'
  })
  export class seguimientoServicio{
    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
    constructor(private http:HttpClient){}
    addSeguimiento(seguimiento:Seguimiento): Observable<Seguimiento>{
        return this.http.post<Seguimiento>(`${environment.baseUrl}/seguimientos/add`,seguimiento, this.httpOptions);
    }
    getSeguimientos(){
        return this.http.get<Seguimiento[]>(`${environment.baseUrl}/seguimientos/get`);
    }
    deleteSeguimiento(seguimiento:Seguimiento): Observable<Seguimiento>{
        return this.http.post<Seguimiento>(`${environment.baseUrl}/seguimientos/:${seguimiento.nombre}`, this.httpOptions);
    }

  }