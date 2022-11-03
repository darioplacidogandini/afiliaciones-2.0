import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Afiliado } from '../model/afiliado.model';

@Injectable({
  providedIn: 'root'
})
export class AfiliadosService {
  private baseUrl = 'localhost:8080';

  constructor(private http:HttpClient) {}

  listar(): Observable<Afiliado[]> {
    return this.http.get<Afiliado[]>(`${this.baseUrl}/afiliados`);
  }
}
